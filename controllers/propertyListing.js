import Property from "../models/PropertyListing.js";
import User from "../models/User.js";

export const createProperty = async (req, res) => {
  try {
    // Assuming you have user information available in req.user after authentication
    const id = req.params.id;
    const user = await User.findOne({ _id: id });

    if (!req.params.id || !req.params.id) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // Check if the user's role is not "employer"
    if (!user) {
      return res.status(403).json({ error: "Only user can create listings." });
    } else {
      const existingListingsCount = await Property.countDocuments({
        user: req.params.id,
      });
      const newListing = await Property.create({
        ...req.body,
        user: req.params.id,
        listId: existingListingsCount + 1,
      });

      res.status(201).json(newListing);
    }
  } catch (err) {
    console.error("Error creating property:", err);
    res.status(500).json({ error: "Failed to create property." });
  }
};

export const updatePropertyByUserIdAndPropertyId = async (req, res) => {
  try {
    // Check if the user is authenticated
    // Retrieve user ID and property ID from request parameters
    const userId = req.params.userId;
    const propertyId = req.params.propertyId;
    const user = await User.findOne({ _id: userId }).populate();

    if (!user) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // Check if the user ID and property ID are valid
    if (!userId || !propertyId) {
      return res.status(400).json({ error: "Invalid user ID or property ID." });
    }

    // Check if the authenticated user is the same as the user in the request parameters
    if (userId !== user._id.toString()) {
      return res.status(403).json({
        error: "You are not authorized to update properties for this user.",
      });
    }

    // Find the property by ID
    const existingProperty = await Property.findById(propertyId);

    // Check if the property exists
    if (!existingProperty) {
      return res.status(404).json({ error: "Property not found." });
    }

    // Check if the property belongs to the specified user
    if (existingProperty.user.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this property." });
    }

    // Update the property with the new data from the request body
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { $set: req.body },
      { new: true }
    );

    // Respond with the updated property
    res.json(updatedProperty);
  } catch (err) {
    console.error("Error updating property:", err);
    res.status(500).json({ error: "Failed to update property." });
  }
};

export const getAllListings = async (req, res) => {
  try {
    // Retrieve all property listings
    const allListings = await Property.find();

    // Respond with the array of property listings
    res.json(allListings);
  } catch (err) {
    console.error("Error getting all listings:", err);
    res.status(500).json({ error: "Failed to get property listings." });
  }
};
export const getFirstSixListings = async (req, res) => {
  try {
    // Retrieve the first 6 property listings
    const firstSixListings = await Property.find().limit(6);

    // Respond with the array of the first 6 property listings
    res.json(firstSixListings);
  } catch (err) {
    console.error("Error getting the first six listings:", err);
    res
      .status(500)
      .json({ error: "Failed to get the first six property listings." });
  }
};
export const getPropertyById = async (req, res) => {
  try {
    // Retrieve the property ID from request parameters
    const propertyId = req.params.id;

    // Check if the property ID is valid
    if (!propertyId) {
      return res.status(400).json({ error: "Invalid property ID." });
    }

    // Find the property by ID
    const property = await Property.findById(propertyId).populate("booked");

    // Check if the property exists
    if (!property) {
      return res.status(404).json({ error: "Property not found." });
    }

    // Respond with the property details
    res.json(property);
  } catch (err) {
    console.error("Error getting property by ID:", err);
    res.status(500).json({ error: "Failed to get property by ID." });
  }
};

export const getListingsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId });
    // Check if the user is authenticated
    if (!user) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // Retrieve user ID from request parameters

    // Check if the user ID is valid
    if (!userId) {
      return res.status(400).json({ error: "Invalid user ID." });
    }

    // Check if the authenticated user is the same as the user in the request parameters
    if (userId !== user._id.toString()) {
      return res.status(403).json({
        error: "You are not authorized to view properties for this user.",
      });
    }

    // Find all properties for the specified user
    const userProperties = await Property.find({ user: userId });

    // Respond with the array of property listings for the user
    res.json(userProperties);
  } catch (err) {
    console.error("Error getting listings by user ID:", err);
    res
      .status(500)
      .json({ error: "Failed to get property listings by user ID." });
  }
};

export const deleteListingByUserIdAndId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const propertyId = req.params.propertyId;
    const user = await User.findOne({ _id: userId }).populate();

    if (!user) {
      return res.status(403).json({ error: "User not authenticated." });
    }

    // Check if the user ID and property ID are valid
    if (!userId || !propertyId) {
      return res.status(400).json({ error: "Invalid user ID or property ID." });
    }

    // Check if the authenticated user is the same as the user in the request parameters
    if (userId !== user._id.toString()) {
      return res.status(403).json({
        error: "You are not authorized to delete properties for this user.",
      });
    }

    // Find the property by ID
    const existingProperty = await Property.findById(propertyId);

    // Check if the property exists
    if (!existingProperty) {
      return res.status(404).json({ error: "Property not found." });
    }

    // Check if the property belongs to the specified user
    if (existingProperty.user.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to delete this property." });
    }

    // Delete the property by ID
    await Property.findByIdAndDelete(propertyId);

    // Respond with a success message
    res.json({ message: "Property deleted successfully." });
  } catch (err) {
    console.error("Error deleting property:", err);
    res.status(500).json({ error: "Failed to delete property." });
  }
};
export const getRandomThreeListings = async (req, res) => {
  try {
    // Retrieve three random property listings
    const RandomThree = await Property.aggregate([{ $sample: { size: 3 } }]);

    // Respond with the array of three random property listings
    res.json(RandomThree);
  } catch (err) {
    console.error("Error getting three random listings:", err);
    res
      .status(500)
      .json({ error: "Failed to get three random property listings." });
  }
};
