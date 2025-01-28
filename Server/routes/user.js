import express from "express";
import {
  deleteUserById,
  getUserByEmail,
  getUserById,
  updateUserById,
} from "../controllers/user.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

// Define routes
router.get("/:id", verifyToken, getUserById);
router.get("/email-get/:email", getUserByEmail);
router.patch("/update/:id", verifyToken, updateUserById);
router.delete("/remove/:id", verifyToken, deleteUserById);

export default router;
