import express from "express";
import {
  createProperty,
  deleteListingByUserIdAndId,
  getAllListings,
  getFirstSixListings,
  getListingsByUserId,
  getPropertyById,
  getRandomThreeListings,
  updatePropertyByUserIdAndPropertyId,
} from "../controllers/propertyListing.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Define routes
router.post("/create-list/:id", verifyToken, createProperty);
router.patch(
  "/update-list/:userId/:propertyId",
  verifyToken,
  updatePropertyByUserIdAndPropertyId
);
router.get("/first-six-listings", getFirstSixListings);
router.get("/all-listings", getAllListings);
router.get("/:id", getPropertyById);
router.get("/user/:userId", verifyToken, getListingsByUserId);
router.delete("/user/:userId/:propertyId", deleteListingByUserIdAndId);
router.get("/li/related-list", getRandomThreeListings);

export default router;
