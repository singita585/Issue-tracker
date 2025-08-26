// Imports that are needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VolunteerForm from "./components/VolunteerForm";
import EventForm from "./components/EventForm";
import Attendance from "./components/Attendance";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteers" element={<VolunteerForm />} />
        <Route path="/events" element={<EventForm />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </Router>
  );
}

export default App;
