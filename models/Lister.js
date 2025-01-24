import mongoose from "mongoose";

const listerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  full_name: { type: String },
  zipcode: { type: String },
  full_address: { type: String },
  state: { type: String },
  website_url: { type: String },
  email: {
    type: String,
    required: true,
  },
  contact_phone: { type: String },
  profile_picture: { type: String },
  nationality: { type: String },
  city: { type: String },
  linkedin: { type: String },
  twitter: { type: String },
  facebook: { type: String },
  instagram: { type: String },

  property: [{ type: mongoose.Schema.Types.ObjectId, ref: "PropertyListing" }],
});

const Lister = mongoose.model("Lister", listerSchema);

export default Lister;
