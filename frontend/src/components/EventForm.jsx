// Imports that are needed
import { useEffect, useState } from "react";
import axios from "axios";

// Adding events and listing all events
function EventForm() {
  const [form, setForm] = useState({ title: "", date: ""});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await axios.get("http://localhost:5000/api/events");
    setEvents(res.data);
  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/events", form);
    alert("Event added successfully!");
    setForm({ title: "", date: ""});
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Event</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Event Title" className="w-full p-2 border rounded"/>
        <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full p-2 border rounded"/>
        <button className="w-full bg-green-600 text-white py-2 rounded-xl">Add Event</button>
      </form>

      <h3 className="mt-6 font-bold text-lg">Events List</h3>
      <ul className="mt-2 space-y-1">
        {events.map(e => (
          <li key={e._id} className="border p-2 rounded">{e.title} ({new Date(e.date).toLocaleDateString()})</li>
        ))}
      </ul>
    </div>
  );
}

export default EventForm;