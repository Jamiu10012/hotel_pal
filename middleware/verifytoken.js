import jwt from "jsonwebtoken";
import { createError } from "../error.js";

const verifyToken = (req, res, next) => {
  // const token = req.header("Authorization");
  // console.log("Received Token:", token);

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is missing!" });
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      console.error("Token verification error:", err);
      return res.status(401).json({ message: "Not Authorised" });
    }
    // If the token is valid, you can access decoded information
    req.user = user;
    next();
  });
};
export default verifyToken;
