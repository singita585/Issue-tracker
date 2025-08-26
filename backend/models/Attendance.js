import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: "Volunteer", required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true }
}, { timestamps: true });

export default mongoose.model("Attendance", issueSchema);