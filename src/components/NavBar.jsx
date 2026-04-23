import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ color: "white" }}>Inicio</Link>
      <Link to="/category/sedan" style={{ color: "white" }}>Sedanes</Link>
      <Link to="/category/pickup" style={{ color: "white" }}>Pickups</Link>
    </nav>
  );
}

export default Navbar;