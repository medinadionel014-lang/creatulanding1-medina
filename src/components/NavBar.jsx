import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

function NavBar() {

  return (

    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#111",
        color: "#fff",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >

        <Link
          to="/"
          style={{ color: "white" }}
        >
          Inicio
        </Link>

        <Link
          to="/category/sedan"
          style={{ color: "white" }}
        >
          Sedanes
        </Link>

        <Link
          to="/category/pickup"
          style={{ color: "white" }}
        >
          Pickups
        </Link>

      </div>

      <CartWidget />

    </nav>

  );

}

export default NavBar;