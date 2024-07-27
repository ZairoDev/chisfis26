import mongoose from "mongoose";
import { customAlphabet } from "nanoid";

const generateVSID = (length) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const generateUniqueId = customAlphabet(charset, length);

  return generateUniqueId();
};

const PropertySchema = new mongoose.Schema(
  {
    VSID: {
      type: String,
      default: () => generateVSID(7),
    },
    rentalType: {
      type: String,
      default: "Short Term",
    },

    userId: {
      type: String,
      required: true,
    },

    propertyType: String,
    placeName: String,
    rentalForm: String,
    numberOfPortions: { type: Number, default: 1 },

    street: String,
    postalCode: String,
    city: String,
    state: String,
    country: String,
    center: {
      type: {
        lat: Number,
        lng: Number,
      },
    },

    portionName: [String],
    portionSize: [Number],
    guests: [Number],
    bedrooms: [Number],
    beds: [Number],
    bathroom: [Number],
    kitchen: [Number],
    childrenAge: [Number],

    basePrice: [Number],
    weekendPrice: [Number],
    monthlyDiscount: [Number],
    currency: String,

    generalAmenities: {
      type: Map,
      of: Boolean,
    },
    otherAmenities: {
      type: Map,
      of: Boolean,
    },
    safeAmenities: {
      type: Map,
      of: Boolean,
    },

    smoking: String,
    pet: String,
    party: String,
    cooking: String,
    additionalRules: [String],

    reviews: [String],

    propertyCoverFileUrl: String,
    propertyPictureUrls: [String],
    portionCoverFileUrls: [String],
    portionPictureUrls: [[String]],

    night: [Number],
    time: [Number],
    datesPerPortion: [[String]],

    isLive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Property =
  mongoose.models?.listings || mongoose.model("listings", PropertySchema);
