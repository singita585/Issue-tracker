import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }
}, {timestamps: true });

export default mongoose.model("Volunteer", volunteerSchema);