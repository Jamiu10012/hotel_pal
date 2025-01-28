/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         description:
 *           type: string
 *           description: The book explanation
 *         published:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *
 */
import express from "express";
import {
  createBooking,
  deleteBookingByUserIdAndBookingId,
  getBookingByUserIdAndBookingId,
  getBookingsByPropertyOwnerId,
  getBookingsByUserId,
  updateBookingByUserIdAndBookingId,
} from "../controllers/booking.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Define routes
router.post("/create-book/:userId/:propertyId", verifyToken, createBooking);
router.patch(
  "/update-book/:userId/:bookingId",
  verifyToken,
  updateBookingByUserIdAndBookingId
);
router.get(
  "/bookbyuser/:userId/:bookingId",
  verifyToken,
  getBookingByUserIdAndBookingId
);
router.get("/:id", verifyToken, getBookingsByUserId);
router.get(
  "/propertyOwner/:propertyOwnerId",
  verifyToken,
  getBookingsByPropertyOwnerId
);
router.delete("/del/:userId/:bookingId", deleteBookingByUserIdAndBookingId);

export default router;
