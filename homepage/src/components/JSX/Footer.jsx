import "../CSS/Footer.css";

export default function Footer() {
  return (
    <footer className="appFooter">
      <div className="appFooter__content">
        <span>© {new Date().getFullYear()}</span>
        <span className="appFooter__links">
          <a href="#">Contact Us</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy policy</a>
        </span>
      </div>
    </footer>
  );
}
