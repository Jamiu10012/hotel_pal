import express from "express";
import { verifyEmail } from "../controllers/auth.js";
const router = express.Router();

router.get("/verify", verifyEmail);

export default router;
