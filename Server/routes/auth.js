import express from "express";
import {
  forgotPassword,
  googleAuth,
  loginUser,
  registerUser,
  resetPassword,
} from "../controllers/auth.js";
import passport from "passport";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google", googleAuth);
// router.get("/google", passport.authenticate("google", ["profile", "email"]));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.post("/forgot-password", forgotPassword);

// Route for handling password reset
router.post("/reset-password/:resetToken", resetPassword);

export default router;
