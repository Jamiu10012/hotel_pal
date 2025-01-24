import SavedProperty from "../models/SavedProperty.js";
import User from "../models/User.js";

export const createSaveProperty = async (req, res) => {
  try {
    // Check if the job is already saved
    const existingSavedProperty = await SavedProperty.findOne({
      user: req.body.user,
      propetyListing: req.body.propetyListing,
    });

    if (existingSavedProperty) {
      return res.status(400).json({ error: "Property is already saved." });
    }

    // Create and save the job if it's not already saved
    const newsaveProperty = await SavedProperty.create(req.body);
    // console.log("New Property Saved:", newsaveProperty);

    // Update jobseeker's saved_jobs field
    await User.findByIdAndUpdate(
      req.body.user, // Replace with the actual field name holding the jobseeker's ID
      { $push: { saved_propertys: newsaveProperty._id } },
      { new: true }
    );

    res.status(201).json(newsaveProperty);
  } catch (err) {
    res.status(500).json({ error: "Failed to save property." });
  }
};

export const getSavedPropertyById = async (req, res) => {
  try {
    const savedProperty = await SavedProperty.findById(req.params.id).populate(
      "propertyListing"
    );
    if (!savedProperty) {
      console.log(`Saved property not found for ID: ${req.params.id}`);
      return res.status(404).json({ error: "Saved property not found." });
    }

    res.status(200).json(savedProperty);
  } catch (err) {
    console.error("Error retrieving saved property:", err);
    res.status(404).json({ error: "Saved property not found." });
  }
};
export const getSavedPropertyByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const savedProperty = await SavedProperty.find({
      user: userId,
    }).populate("propertyListing");
    res.status(200).json(savedProperty);
  } catch (error) {
    console.error("Error fetching savedProperty:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching saved property." });
  }
};
export const deleteSavePropertyById = async (req, res) => {
  try {
    // Find the saved property to get the associated user ID
    const savedProperty = await SavedProperty.findById(req.params.id);

    // Check if the saved property exists
    if (!savedProperty) {
      return res.status(404).json({ error: "Property application not found." });
    }

    // Remove the saved property ID from the user's saved_propertys array
    await User.findByIdAndUpdate(
      savedProperty.user, // Replace with the actual field name holding the user's ID
      { $pull: { saved_propertys: req.params.id } },
      { new: true }
    );

    // Delete the saved property
    await SavedProperty.findByIdAndDelete(req.params.id);

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete property application." });
  }
};
export const getSavedPropertyByUserIdAndPropertyId = async (req, res) => {
  const userId = req.params.userId;
  const propertyId = req.params.propertyId;

  try {
    const savedProperty = await SavedProperty.findOne({
      user: userId,
      propertyListing: propertyId,
    }).populate("propertyListing");

    if (!savedProperty) {
      return res.status(404).json({ message: "Saved property not found." });
    }

    res.status(200).json(savedProperty);
  } catch (error) {
    console.error("Error fetching savedProperty:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching saved property." });
  }
};
