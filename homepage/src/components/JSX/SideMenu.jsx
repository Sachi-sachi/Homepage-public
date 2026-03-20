import "../CSS/SideMenu.css";

export default function SideMenu({ open, onClose }) {
  return (
    <div
      className={`sideMenu${open ? " sideMenu--open" : ""}`}
      aria-hidden={!open}
    >
      <div className="sideMenu__backdrop" onClick={onClose} />
      <aside
        className="sideMenu__panel"
        role="dialog"
        aria-label="Site navigation"
      >
        <div className="sideMenu__header">
          <div className="sideMenu__brand">
            <span className="sideMenu__brandLogo" aria-hidden="true">
              ⚙️
            </span>
            <span className="sideMenu__brandText">Software Factory</span>
          </div>
          <button
            className="sideMenu__close"
            type="button"
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="sideMenu__nav" aria-label="Sidebar">
          <a href="#" className="sideMenu__link sideMenu__link--active">
            <span className="sideMenu__icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="#" className="sideMenu__link">
            <span className="sideMenu__icon">👥</span>
            <span>Who are we?</span>
          </a>
          <a href="#" className="sideMenu__link">
            <span className="sideMenu__icon">📋</span>
            <span>HR Policies & SPOCs</span>
          </a>
          <a href="#" className="sideMenu__link">
            <span className="sideMenu__icon">🎧</span>
            <span>Support</span>
          </a>
          <a href="#" className="sideMenu__link">
            <span className="sideMenu__icon">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>

        <div className="sideMenu__footer">
          <span>v1.0.0</span>
          <span>© {new Date().getFullYear()} BTI</span>
        </div>
      </aside>
    </div>
  );
}
