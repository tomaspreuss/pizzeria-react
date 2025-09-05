import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { clp } from "../utils/currency.js";

export default function PizzaCard({ pizza }) {
  const { addItem } = useCart();

  return (
    <article style={{border:"1px solid #eee", borderRadius:12, overflow:"hidden"}}>
      <img src={pizza.img} alt={pizza.name} style={{width:"100%", height:180, objectFit:"cover"}} />
      <div style={{padding:"1rem"}}>
        <h3 style={{marginTop:0}}>{pizza.name}</h3>
        <p style={{margin:"0.25rem 0", opacity:.8}}>{clp(pizza.price)}</p>
        <p style={{fontSize:14, opacity:.8}}>Ingredientes: {pizza.ingredients.join(", ")}</p>
        <div style={{display:"flex", gap:8}}>
          <Link to={`/pizza/${pizza.id}`} style={{textDecoration:"none"}}>Ver detalle</Link>
          <button onClick={() => addItem(pizza, 1)}>Agregar 🛒</button>
        </div>
      </div>
    </article>
  );
}