import axios from "axios";
import express from "express";

const router = express.Router();

router.get("/properties", async (req, res) => {
  try {
    const config = {
      method: "get",
      url: "https://api.mapro.io/v1/channels/properties",
      headers: {
        "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
        Authorization:
          "Bearer 9c1bfd9304759d537da07ea8f6f03dab9230f9a0cd7bd283359d6f94866f36d7",
      },
    };

    const response = await axios(config);
    const properties = response.data;
    res.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch properties from Mapro API" });
  }
});
router.get("/property/:id", async (req, res) => {
  try {
    const propertyId = req.params.id; // Get the ID from request parameters
    const config = {
      method: "get",
      url: `https://api.mapro.io/v1/channels/property/${propertyId}`, // Use correct string interpolation
      headers: {
        "User-Agent": "Apidog/1.0.0 (https://apidog.com)",
        Authorization:
          "Bearer 9c1bfd9304759d537da07ea8f6f03dab9230f9a0cd7bd283359d6f94866f36d7",
      },
    };

    const response = await axios(config);
    const property = response.data; // Assuming this fetches a single property based on ID
    res.json(property);
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({ error: "Failed to fetch property from Mapro API" });
  }
});

export default router;
