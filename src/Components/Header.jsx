import React, { useEffect, useState } from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import { MdMenu, MdInfo } from "react-icons/md";

export default function App() {
  const [open, setOpen] = useState(false);

  // toggle menu open/close
  function toggleMenu() {
    setOpen((s) => !s);
  }

  function closeMenu() {
    setOpen(false);
  }

  // close when a nav/link is clicked
  function onNavClick() {
    setOpen(false);
  }

  // Escape key to close and scroll lock while open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // lock body scroll when open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup on unmount just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header>
        <h2>Ember & Brew</h2>

        <nav>
          <ul className="nav-list">
            <li className="nav-item"><span className="Home"><FaHome /></span> Home</li>
            <li className="nav-item"><span className="Info"><MdInfo /></span> About</li>
            <li className="nav-item"><span className="Phone"><FaPhone /></span> Contact</li>
          </ul>
        </nav>

        {/* Menu button is visible on all screen sizes and toggles the sidebar */}
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-sidebar"
        >
          <MdMenu />
          <span className="menu-text">Menu</span>
        </button>
      </header>

      {/* Overlay (click closes) */}
      <div
        className={`overlay ${open ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        id="site-sidebar"
        className={`slide ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <h1>MENU</h1>

        <ul>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-tv" /> dashboard</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-user" /> profile</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-gripfire" /> trending</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-comments" /> message</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-folder" /> file manager</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-address-book" /> portfolio</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-heart" /> saved</a></li>
          <li><a href="#" onClick={onNavClick}><i className="fas fa-cogs" /> settings</a></li>
        </ul>
      </aside>

      <main className="Hero-section">
        <div className="Hero-title-div">
        <h1 className="Hero-title">Where Every Sip Tells a Story</h1>
        <p className="Hero-subtitle">Discover artisan coffee crafted with passion, brewed for moments you’ll always remember.</p>
        <button className="cta-button">Order a coffee</button>
        </div>
      </main>
    </>
  )
}
