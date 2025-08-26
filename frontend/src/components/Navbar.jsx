// Imports that are needed
import { Link } from "react-router-dom";

// Navbar links to all pages
function Navbar() {
  return (
     <nav className="flex gap-6 bg-white p-4 rounded-2xl shadow mb-6">
        <Link to="/" className="font-bold text-blue-600">Home</Link>
        <Link to="/volunteers" className="font-bold text-green-600">Volunteers</Link>
        <Link to="/events" className="font-bold text-purple-600">Events</Link>
        <Link to="/attendance" className="font-bold text-red-600">Attendance</Link>
    </nav>
  );
}

export default Navbar;