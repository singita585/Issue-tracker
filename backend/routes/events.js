import express from "express";
import Event from "../models/Event";

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Add new event 
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    const saved = await event.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;