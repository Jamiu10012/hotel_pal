import mongoose from "mongoose";

const savedPropertySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  propertyListing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  saved_date: { type: Date, default: Date.now },
});

const SavedProperty = mongoose.model("SavedProperty", savedPropertySchema);

export default SavedProperty;
