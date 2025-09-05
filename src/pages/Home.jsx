import pizzas from "../data/pizzas.json";
import PizzaCard from "../components/PizzaCard.jsx";

export default function Home() {
  return (
    <div>
      <header style={{textAlign:"center", padding:"2rem 1rem"}}>
        <h1>Bienvenido a Mamma Mía</h1>
        <p>Elige tu pizza favorita 🍕</p>
      </header>

      <section style={{display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(240px,1fr))", gap:"1rem"}}>
        {pizzas.map((p) => <PizzaCard key={p.id} pizza={p} />)}
      </section>
    </div>
  );
}