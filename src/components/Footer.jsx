export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem",
        borderTop: "1px solid #eee",
      }}
    >
      <small>© {new Date().getFullYear()} Pizzería Mamma Mía</small>
    </footer>
  );
}