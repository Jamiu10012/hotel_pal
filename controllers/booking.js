import Booking from "../models/Booking.js";
import Property from "../models/PropertyListing.js";
import User from "../models/User.js";
import sendBookingBookerEmail from "../utils/sendBookingBookerEmail.js";
import sendBookingOwnerEmail from "../utils/sendBookingOwnerEmail.js";

export const createBooking = async (req, res) => {
  try {
    const userId = req.params.userId;
    const propertyId = req.params.propertyId;
    const user = await User.findOne({ _id: userId }).populate();
    const property_owner = await Property.findOne({
      _id: propertyId,
    }).populate("user");
    // console.log(user);
    if (!userId) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // if (property_owner.booked) {
    //   return res.status(400).json({
    //     error: "Property already booked.",
    //   });
    // }
    if (!user) {
      return res.status(403).json({ error: "Only user can book." });
    } else {
      const newBooking = await Booking.create({
        ...req.body,
        user: userId,
        property: propertyId,
        propertyOwner: property_owner.user,
      });

      const property = await Property.findOne({ _id: propertyId });
      const newBookingDates = {
        from: req.body.checkInDate,
        to: req.body.checkOutDate,
      };

      property.booked.push(newBookingDates);
      await property.save();

      sendBookingBookerEmail(user.email);
      sendBookingOwnerEmail(property_owner?.user?.email);

      res
        .status(201)
        .json({ message: "Booking created successfully", booking: newBooking });
    }
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateBookingByUserIdAndBookingId = async (req, res) => {
  try {
    // Check if the user is authenticated
    // Retrieve user ID and Booking ID from request parameters
    const userId = req.params.userId;
    const bookingId = req.params.bookingId;
    const user = await User.findOne({ _id: userId }).populate();

    if (!user) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // Check if the user ID and Booking ID are valid
    if (!userId || !bookingId) {
      return res.status(400).json({ error: "Invalid user ID or booking ID." });
    }

    // Check if the authenticated user is the same as the user in the request parameters
    if (userId !== user._id.toString()) {
      return res.status(403).json({
        error: "You are not authorized to update for this user.",
      });
    }

    // Find the Booking by ID
    const existingBooking = await Booking.findById(bookingId);

    // Check if the Booking exists
    if (!existingBooking) {
      return res.status(404).json({ error: "booking not found." });
    }

    // Check if the Booking belongs to the specified user
    if (existingBooking.user.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this Booking." });
    }

    // Update the Booking with the new data from the request body
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { $set: req.body },
      { new: true }
    );

    // Respond with the updated Booking
    res.json(updatedBooking);
  } catch (err) {
    console.error("Error updating Booking:", err);
    res.status(500).json({ error: "Failed to update Booking." });
  }
};

export const getBookingByUserIdAndBookingId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bookingId = req.params.bookingId;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(403).json({ error: "User not found." });
    }

    const booking = await Booking.findOne({ _id: bookingId, user: userId });

    if (!booking) {
      return res.status(404).json({
        error: "Booking not found for the specified user and bookingId.",
      });
    }

    res.status(200).json(booking);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBookingsByUserId = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(403).json({ error: "User not found." });
    }

    const bookings = await Booking.find({ user: userId })
      .populate("property") // Replace 'propertyName' with the property field you want to include
      .exec();

    res.status(200).json(bookings);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBookingsByPropertyOwnerId = async (req, res) => {
  try {
    const propertyOwnerId = req.params.propertyOwnerId;

    const bookings = await Booking.find({ propertyOwner: propertyOwnerId })
      .populate("property", "propertyName") // Replace 'propertyName' with the property field you want to include
      .exec();

    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBookingByUserIdAndBookingId = async (req, res) => {
  try {
    // Retrieve user ID and Booking ID from request parameters
    const userId = req.params.userId;
    const bookingId = req.params.bookingId;

    // Check if the user ID and Booking ID are valid
    if (!userId || !bookingId) {
      return res.status(400).json({ error: "Invalid user ID or booking ID." });
    }

    // Find the Booking by ID
    const existingBooking = await Booking.findById(bookingId);

    // Check if the Booking exists
    if (!existingBooking) {
      return res.status(404).json({ error: "Booking not found." });
    }

    // Check if the Booking belongs to the specified user
    if (existingBooking.user.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this Booking." });
    }

    // Delete the Booking
    await Booking.findByIdAndDelete(bookingId);

    // Update the Property to mark it as not booked
    await Property.findByIdAndUpdate(existingBooking.property, {
      booked: false,
    });

    // Respond with a success message
    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    console.error("Error deleting Booking:", err);
    res.status(500).json({ error: "Failed to delete Booking." });
  }
};
