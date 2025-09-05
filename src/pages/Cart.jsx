import { useCart } from "../context/CartContext.jsx";
import { clp } from "../utils/currency.js";

export default function Cart() {
  const { cart, inc, dec, remove, clear, total } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <h2>Tu carrito está vacío</h2>
        <p>Agrega pizzas desde el inicio 😋</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <h2>Carrito</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "grid",
          gap: 12,
        }}
      >
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: 12,
              alignItems: "center",
              border: "1px solid #eee",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
            />

            <div>
              <strong>{item.name}</strong>
              <div style={{ opacity: 0.8 }}>{clp(item.price)} c/u</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                <button onClick={() => dec(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => inc(item.id)}>+</button>
                <button onClick={() => remove(item.id)} style={{ marginLeft: 8 }}>
                  Eliminar
                </button>
              </div>
            </div>

            <div style={{ justifySelf: "end" }}>
              <strong>{clp(item.price * item.qty)}</strong>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
        <button onClick={clear}>Vaciar carrito</button>
        <div style={{ fontSize: 20 }}>
          <strong>Total: {clp(total)}</strong>
        </div>
      </div>

      <div style={{ textAlign: "right", marginTop: 12 }}>
        <button onClick={() => alert("¡Compra realizada! 🎉")}>Pagar</button>
      </div>
    </div>
  );
}