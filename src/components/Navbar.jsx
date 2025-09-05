import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { clp } from "../utils/currency.js";

export default function Navbar() {
  const { total, count } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #eee",
      }}
    >
      <Link to="/" style={{ fontWeight: 700, textDecoration: "none" }}>
        🍕 Mamma Mía
      </Link>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Inicio
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          🛒 {count} – {clp(total)}
        </Link>
      </div>
    </nav>
  );
}