import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import listingRoutes from "./routes/propertyListing.js";
import bookingRoutes from "./routes/booking.js";
import savedPropertyRoutes from "./routes/savedProperty.js";
import VerifyRoutes from "./routes/verification.js";
import ExternalRoutes from "./routes/extProperties.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Rental API with Swagger",
      version: "0.1.0",
      description:
        "This is a  API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Silentcoder",
        url: "silent.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/auth", authRoutes);
app.use("/api", VerifyRoutes);
app.use("/api/user", userRoutes);
app.use("/api/listing", listingRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/savedProperty", savedPropertyRoutes);
app.use("/api/external", ExternalRoutes);

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log(`Connected to DB ${mongoose.connection.host}`);
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
};

startServer();
