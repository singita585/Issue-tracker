// Imports that are needed
import { useState, useEffect } from "react";
import axios from "axios";

// The form to track attendance of volunteers to events and list attendance
function Attendance() {
  const [volunteers, setVolunteers] = useState([]);
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ volunteerId: "", eventId: "" });
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const vRes = await axios.get("http://localhost:5000/api/volunteers");
    const eRes = await axios.get("http://localhost:5000/api/events");
    const aRes = await axios.get("http://localhost:5000/api/attendance");
    setVolunteers(vRes.data);
    setEvents(eRes.data);
    setAttendanceList(aRes.data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/attendance", form);
    setForm({ volunteerId: "", eventId: "" });
    fetchData();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Record Attendance</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <select name="volunteerId" value={form.volunteerId} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Volunteer</option>
          {volunteers.map(v => <option key={v._id} value={v._id}>{v.firstName} {v.lastName}</option>)}
        </select>
        <select name="eventId" value={form.eventId} onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">Select Event</option>
          {events.map(e => <option key={e._id} value={e._id}>{e.title}</option>)}
        </select>
        <button className="w-full bg-purple-600 text-white py-2 rounded-xl">Record Attendance</button>
      </form>

      <h3 className="mt-6 font-bold text-lg">Attendance List</h3>
      <ul className="mt-2 space-y-1">
        {attendanceList.map(a => (
          <li key={a._id} className="border p-2 rounded">
            {a.volunteerName} attended {a.eventTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;