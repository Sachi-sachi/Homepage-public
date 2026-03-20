import "../CSS/Header.css";
import logo from "../../assets/logo.png";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverLocked, setHoverLocked] = useState(false);

  const whoRef = useRef(null);
  const settingsRef = useRef(null);
  const helpRef = useRef(null);
  const profileRef = useRef(null);

  /* ---------- helpers ---------- */
  const openOnHover = (name) => {
    if (!hoverLocked) {
      setActiveDropdown(name);
    }
  };

  const closeOnLeave = () => {
    if (!hoverLocked) {
      setActiveDropdown(null);
    }
  };

  const openOnClick = (name) => {
    setActiveDropdown(name);
    setHoverLocked(true);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setHoverLocked(false);
  };

  /* ---------- outside click ---------- */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        whoRef.current &&
        settingsRef.current &&
        helpRef.current &&
        profileRef.current &&
        !whoRef.current.contains(e.target) &&
        !settingsRef.current.contains(e.target) &&
        !helpRef.current.contains(e.target) &&
        !profileRef.current.contains(e.target)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="appHeader">
      {/* ---------- Brand ---------- */}
      <div className="appHeader__brand">
        <div className="appHeader__logo">
          <img src={logo} alt="Software Factory logo" />
        </div>
        <div className="appHeader__brandText">
          <span className="appHeader__brandName">Software Factory</span>
          <span className="appHeader__brandSub">BMW TechWorks India</span>
        </div>
      </div>

      {/* ---------- Center | Who Are We ---------- */}
      <div className="appHeader__center">
        <div
          ref={whoRef}
          className="dropdown"
          onMouseEnter={() => openOnHover("who")}
          onMouseLeave={closeOnLeave}
        >
          <button
            className="appHeader__whoButton"
            onClick={() => openOnClick("who")}
          >
            Who Are We?
          </button>

          {activeDropdown === "who" && (
            <div className="dropdown__menu dropdown__menu--center">
              <a href="#" className="dropdown__item">
                ArchCraft
              </a>
              <a href="#" className="dropdown__item">
                CodeCraft
              </a>
              <a href="#" className="dropdown__item">
                ValidationCraft
              </a>
            </div>
          )}
        </div>
      </div>

      {/* ---------- Right Actions ---------- */}
      <div className="appHeader__actions">
        {/* Settings */}
        <div
          ref={settingsRef}
          className="dropdown"
          onMouseEnter={() => openOnHover("settings")}
          onMouseLeave={closeOnLeave}
        >
          <button
            className="iconButton"
            onClick={() => openOnClick("settings")}
          >
            ⚙️
          </button>

          {activeDropdown === "settings" && (
            <div className="dropdown__menu">
              <a href="#" className="dropdown__item">
                Profile Settings
              </a>
              <a href="#" className="dropdown__item">
                Preferences
              </a>
              <a href="#" className="dropdown__item">
                Permissions
              </a>
            </div>
          )}
        </div>

        {/* Help */}
        <div
          ref={helpRef}
          className="dropdown"
          onMouseEnter={() => openOnHover("help")}
          onMouseLeave={closeOnLeave}
        >
          <button className="iconButton" onClick={() => openOnClick("help")}>
            ❓
          </button>

          {activeDropdown === "help" && (
            <div className="dropdown__menu">
              <a href="#" className="dropdown__item">
                Documentation
              </a>
              <a href="#" className="dropdown__item">
                FAQs
              </a>
              <a href="#" className="dropdown__item">
                Contact Support
              </a>
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          ref={profileRef}
          className="dropdown"
          onMouseEnter={() => openOnHover("profile")}
          onMouseLeave={closeOnLeave}
        >
          <div className="avatar" onClick={() => openOnClick("profile")}>
            SC
          </div>

          {activeDropdown === "profile" && (
            <div className="dropdown__menu dropdown__menu--profile">
              <div className="profile-header">
                <div className="profile-avatar">SC</div>
                <div className="profile-info">
                  <span className="profile-name">Sarah Connor</span>
                  <span className="profile-email">sarah.connor@bmw.com</span>
                </div>
              </div>

              <a href="#" className="dropdown__item">
                View Account
              </a>
              <button className="dropdown__item dropdown__item--logout">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
