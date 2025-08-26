import express from "express";
import Attendance from "../models/Attendance.js";
import Volunteer from "../models/Volunteer.js";
import Event from "../models/Event.js";

const router = express.Router()

// Get all attendance records
router.get("/", async (req, res) => {
  try {
    const records = await Attendance.find()
      .populate("volunteerId", "firstName lastName")
      .populate("eventId", "title")

    const formatted = records.map(r => ({
      _id: r._id,
      volunteerName: `${r.volunteerId.firstName} ${r.volunteerId.lastName}`,
      eventTitle: r.eventId.title
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add attendance
Router.post("/", async (req, res) => {
  try {
    const record = new Attendance(req.body);
    const saved = await record.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;