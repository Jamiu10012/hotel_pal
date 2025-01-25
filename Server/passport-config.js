// passport-config.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "./models/User"; // Adjust the path based on your project structure

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1024671414360-mdtljfduild8hicgb6eu9jl73rf25iss.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://rental-8yem.onrender.com/auth/google/callback", // Adjust the URL based on your backend
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user already exists in the database
        const user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          // User already exists, return the user
          return done(null, user);
        }

        // If the user does not exist, create a new user
        const newUser = new User({
          email: profile.emails[0].value,
          // You may want to add additional user information from the Google profile
        });

        // Save the new user to the database
        await newUser.save();

        // Return the new user
        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});
