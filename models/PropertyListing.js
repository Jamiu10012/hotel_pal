import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  booked: [
    {
      from: {
        type: Date,
      },
      to: {
        type: Date,
        validate: {
          validator: function (value) {
            return value > this.from;
          },
          message: "End date must be greater than the start date",
        },
      },
    },
  ],
  category: {
    type: String,
    enum: ["Apartment", "Dorm", "Cabin"],
  },
  room_type: {
    type: String,
    enum: ["Entire Room", "Private", "Shared Room"],
  },
  guest_no: {
    type: Number,
  },
  list_size: {
    type: String,
  },
  listId: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
  bathrooms: {
    type: Number,
  },
  currency: {
    type: String,
  },
  price_per_night: {
    type: String,
  },
  price_per_night_month: {
    type: String,
  },
  price_per_night_week: {
    type: String,
  },
  tax_fee: {
    type: String,
  },
  cleaning_fee: {
    type: String,
  },
  extra_people: {
    type: String,
  },
  cover_image: {
    type: String,
  },
  rest_images: [
    {
      type: String,
    },
  ],
  county: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  area: {
    type: String,
  },
  country: {
    type: String,
  },
  postal_code: {
    type: String,
  },
  late_checkin: {
    type: String,
  },
  optional_service: {
    type: String,
  },
  outdor_facilities: {
    type: String,
  },
  amenties: [
    {
      type: String,
    },
  ],
  // Timestamps for when the listing was created and last updated
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
