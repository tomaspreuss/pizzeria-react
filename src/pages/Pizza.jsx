import { useParams } from "react-router-dom";
import pizzas from "../data/pizzas.json";
import { clp } from "../utils/currency.js";
import { useCart } from "../context/CartContext.jsx";

export default function Pizza() {
  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!pizza) {
    return <p>Pizza no encontrada.</p>;
  }

  return (
    <article
      style={{
        maxWidth: 900,
        margin: "0 auto",
        display: "grid",
        gap: 24,
        gridTemplateColumns: "1fr 1fr",
        alignItems: "start",
      }}
    >
      <img
        src={pizza.img}
        alt={pizza.name}
        style={{ width: "100%", borderRadius: 12 }}
      />
      <div>
        <h2>{pizza.name}</h2>
        <p style={{ opacity: 0.8 }}>{pizza.desc}</p>
        <p>
          <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
        </p>
        <p style={{ fontSize: 18 }}>
          <strong>{clp(pizza.price)}</strong>
        </p>
        <button onClick={() => addItem(pizza, 1)}>Agregar al carrito 🛒</button>
      </div>
    </article>
  );
}