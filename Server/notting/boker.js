import Booker from "../models/Booker";

export const createBooker = async (req, res) => {
  try {
    const newBooker = await Booker.create(req.body);
    res.status(201).json(newBooker);
  } catch (err) {
    res.status(500).json({ error: "Failed to create booker." });
  }
};
