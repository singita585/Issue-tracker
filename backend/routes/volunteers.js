import express from "express";
import Volunteer from "../models/Volunteer.js";

const router = express.Router();

// Get all volunteers
router.get("/", async (req, res) => {
  const volunteers = await Volunteer.find();
  res.json(volunteers);
});

// Add new volunteer
router.post("/", async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    const saved = await volunteer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;