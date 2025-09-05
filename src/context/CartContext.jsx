import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const STORAGE_KEY = "mammamia_cart_v1";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem = (pizza, qty = 1) => {
    setCart((prev) => {
      const i = prev.findIndex((p) => p.id === pizza.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy.filter((p) => p.qty > 0);
      }
      return [
        ...prev,
        { id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img, qty },
      ];
    });
  };

  const inc = (id) =>
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p))
    );

  const dec = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );

  const remove = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clear = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.qty, 0),
    [cart]
  );
  const count = useMemo(
    () => cart.reduce((acc, p) => acc + p.qty, 0),
    [cart]
  );

  const value = { cart, addItem, inc, dec, remove, clear, total, count };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}