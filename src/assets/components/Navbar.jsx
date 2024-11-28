import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/book" className="nav-link">Book</Link>
    </nav>
  );
}

export default Navbar;
