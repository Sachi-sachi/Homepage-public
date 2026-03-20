import "../CSS/Header.css";
import logo from "../../assets/logo.png";
import { useState, useRef, useEffect } from "react";

export default function Header({ onMenuToggle }) {
  // which dropdown is active: "settings" | "help" | "profile" | null
  const [activeDropdown, setActiveDropdown] = useState(null);

  // if true, hover is disabled for other icons
  const [hoverLocked, setHoverLocked] = useState(false);

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
    setHoverLocked(true); // 🔒 lock hover for others
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setHoverLocked(false); // 🔓 unlock hover
  };

  /* ---------- outside click ---------- */

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        settingsRef.current &&
        helpRef.current &&
        profileRef.current &&
        !settingsRef.current.contains(event.target) &&
        !helpRef.current.contains(event.target) &&
        !profileRef.current.contains(event.target)
      ) {
        closeAll();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ---------- render ---------- */

  return (
    <header className="appHeader">
      {/* Brand */}
      <div className="appHeader__brand">
        <div className="appHeader__logo">
          <img src={logo} alt="Software Factory logo" />
        </div>
        <div className="appHeader__brandText">
          <span className="appHeader__brandName">Software Factory</span>
          <span className="appHeader__brandSub">BMW TechWorks India</span>
        </div>
      </div>

      {/* Actions */}
      <div className="appHeader__actions">
        {/* Who Are We */}
        <div
          className="dropdown"
          ref={settingsRef}
          onMouseEnter={() => openOnHover("who")}
          onMouseLeave={closeOnLeave}
        >
          <button className="whoButton" onClick={() => openOnClick("who")}>
            Who Are We?
          </button>

          {activeDropdown === "who" && (
            <div className="dropdown__menu">
              <a className="dropdown__item" href="#">
                About Us
              </a>
              <a className="dropdown__item" href="#">
                ArchCraft
              </a>
              <a className="dropdown__item" href="#">
                CodeCraft
              </a>
              <a className="dropdown__item" href="#">
                ValidationCraft
              </a>
            </div>
          )}
        </div>

        {/* SETTINGS */}
        <div
          className="dropdown"
          ref={settingsRef}
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
              <a className="dropdown__item" href="#">
                Profile Settings
              </a>
              <a className="dropdown__item" href="#">
                Preferences
              </a>
              <a className="dropdown__item" href="#">
                Permissions
              </a>
            </div>
          )}
        </div>

        {/* HELP */}
        <div
          className="dropdown"
          ref={helpRef}
          onMouseEnter={() => openOnHover("help")}
          onMouseLeave={closeOnLeave}
        >
          <button className="iconButton" onClick={() => openOnClick("help")}>
            ❓
          </button>

          {activeDropdown === "help" && (
            <div className="dropdown__menu">
              <a className="dropdown__item" href="#">
                Documentation
              </a>
              <a className="dropdown__item" href="#">
                FAQs
              </a>
              <a className="dropdown__item" href="#">
                Contact Support
              </a>
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div
          className="dropdown"
          ref={profileRef}
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
                  <div className="profile-name">Sarah Connor</div>
                  <div className="profile-email">sarah.connor@bmw.com</div>
                </div>
              </div>

              <a className="dropdown__item" href="#">
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
