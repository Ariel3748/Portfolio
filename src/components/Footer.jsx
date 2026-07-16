export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {year} — {name}
        </p>
      </div>
    </footer>
  );
}
