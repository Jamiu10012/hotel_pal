import express from "express";
import {
  createSaveProperty,
  deleteSavePropertyById,
  getSavedPropertyById,
  getSavedPropertyByUserId,
  getSavedPropertyByUserIdAndPropertyId,
} from "../controllers/savedProperty.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Route to allow jobseeker to apply for a job
router.post("/", verifyToken, createSaveProperty);
router.get("/saved/:id", verifyToken, getSavedPropertyById);
router.get("/:userId", verifyToken, getSavedPropertyByUserId);
router.get(
  "/:userId/:propertyId",
  verifyToken,
  getSavedPropertyByUserIdAndPropertyId
);
router.delete("/delete/:id", verifyToken, deleteSavePropertyById);

export default router;
