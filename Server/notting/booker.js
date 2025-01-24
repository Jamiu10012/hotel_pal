import mongoose from "mongoose";

const bookerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  full_name: { type: String },
  nationality: { type: String },
  city: { type: String },
  zipcode: { type: String },
  full_address: { type: String },
  state: { type: String },
  website_url: { type: String },
  profile_picture: { type: String },
  email: {
    type: String,
    required: true,
  },
  contact_phone: { type: String },

  linkedin: { type: String },
  twitter: { type: String },
  facebook: { type: String },
  instagram: { type: String },

  booked: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

const Booker = mongoose.model("Booker", bookerSchema);

export default Booker;
