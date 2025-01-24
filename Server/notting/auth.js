import Booker from "../models/Booker.js";
import Lister from "../models/Lister.js";
import User from "../models/User.js";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const PASSWORD_COMPLEXITY_REGEX =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const role = req.body.role;
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }
    if (!PASSWORD_COMPLEXITY_REGEX.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
      });
    }

    // Encrypt the password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create a new user with the hashed password
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    // Save the user to the database
    await newUser.save();

    // Send a verification email
    sendVerificationEmail(newUser.email);

    // res.status(201).json({
    //   message:
    //     "User registered successfully. Check your email for verification.",
    // });

    if (role === "booker") {
      const booker = new Booker({
        ...req.body,
        user: newUser._id,
        // full_name: newUser.firstname + " " + newUser.lastname,
        contact_email: newUser.email,
      });

      return await booker.save().then(() => {
        res.status(201).json({
          success: true,
          message:
            "New booker account created! Check your email for verification.",
        });
      });
    } else if (role === "lister") {
      const lister = new Lister({
        ...req.body,
        user: newUser._id,
        contact_email: newUser.email,
      });

      return await lister.save().then(() => {
        res.status(201).json({
          success: true,
          message:
            "New lister account created! Check your email for verification.",
        });
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const email = req.query.email;

    // Find the user by email and update the isVerified field
    await User.findOneAndUpdate({ email }, { isVerified: true });
    res.status(201).json({
      message: "Verify successfully. ",
    });

    // res.redirect("register"); // Redirect to login page after successful verification
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user with the provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (!user.isVerified) {
      return res.status(401).json({
        message: "User not verified. Check your email for verification.",
      });
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password." });
    }

    // Create a JWT token for authentication
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT
    );

    // Return the token and user information
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        // Add other user information you want to include in the response
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ token, user: user._doc });
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
        isVerified: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ token, user: savedUser._doc });
    }
  } catch (err) {
    next(err);
  }
};
