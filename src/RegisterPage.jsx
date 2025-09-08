// src/RegisterPage.jsx
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState({ type: "", text: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email.trim() || !pass.trim() || !confirm.trim()) {
      setMsg({ type: "error", text: "Todos los campos son obligatorios." });
      return;
    }
    if (pass.length < 6) {
      setMsg({ type: "error", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }
    if (pass !== confirm) {
      setMsg({ type: "error", text: "La confirmación no coincide con la contraseña." });
      return;
    }

    // Éxito
    setMsg({ type: "success", text: "Registro exitoso ✅" });
  };

  return (
    <section style={{ maxWidth: 420, margin: "40px auto", padding: 16 }}>
      <h2>Registro</h2>

      {msg.text && (
        <p
          style={{
            padding: "10px",
            borderRadius: 8,
            background: msg.type === "success" ? "#E6FFED" : "#FFE6E6",
            color: msg.type === "success" ? "#0E7A2E" : "#8A0010",
            marginBottom: 12,
          }}
        >
          {msg.text}
        </p>
      )}

      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
          placeholder="tu@email.com"
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
          placeholder="Mínimo 6 caracteres"
        />

        <label>Confirmar contraseña</label>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          style={{ width: "100%", padding: 8, marginBottom: 16 }}
          placeholder="Repítela"
        />

        <button type="submit" style={{ padding: "10px 16px", cursor: "pointer" }}>
          Crear cuenta
        </button>
      </form>
    </section>
  );
}