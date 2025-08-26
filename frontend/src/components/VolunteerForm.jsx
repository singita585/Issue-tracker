// Imports that are needed
import { useState, useEffect } from "react";
import axios from "axios";

// Adding volunteers and listing all volunteers
function VolunteerForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [volunteers, setVolunteers] = useState([]);

  // Fetch volunteers on load
  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    const res = await axios.get("http://localhost:5000/api/volunteers");
    setVolunteers(res.data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/volunteers", form);
    setForm({ firstName: "", lastName: "", email: "" });
    fetchVolunteers();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-bold mb-4">Add Volunteer</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded"/>
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded"/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full p-2 border rounded"/>
        <button className="w-full bg-blue-600 text-white py-2 rounded-xl">Add Volunteer</button>
      </form>

      <h3 className="mt-6 font-bold text-lg">Volunteers List</h3>
      <ul className="mt-2 space-y-1">
        {volunteers.map(v => (
          <li key={v._id} className="border p-2 rounded">{v.firstName} {v.lastName} ({v.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default VolunteerForm;
