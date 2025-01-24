import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    full_name: {
      type: String,
    },
    contact_phone: { type: String },
    isVerified: { type: Boolean, default: false },
    RegistrationDate: {
      type: Date,
      default: Date.now,
    },
    username: { type: String },
    gender: { type: String },
    date_of_birth: { type: String },
    nationality: { type: String },
    city: { type: String },
    zipcode: { type: String },
    full_address: { type: String },
    state: { type: String },
    website_url: { type: String },
    bankname: { type: String },
    account_number: { type: String },
    beneficiary: { type: String },
    profile_picture: { type: String },
    email: {
      type: String,
      required: true,
    },
    contact_phone: { type: String },
    saved_propertys: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PropertyListing" },
    ],

    linkedin: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
