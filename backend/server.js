import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import volunteerRoutes from "./routes/volunteers.js";
import eventRoutes from "./routes/events.js";
import attendanceRoutes from "./routes/attendance.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/volunteers", volunteerRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/attendance", attendanceRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log("DB Connection Error:", err));