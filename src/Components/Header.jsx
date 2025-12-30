import React, { useState } from "react";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo">
        Ember & Brew
      </div>

      {/* Navigation Links */}
      <nav className={`nav ${open ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <button className="order-btn mobile-btn">Order Online</button>
      </nav>

      {/* Call to Action */}
      <div className="cta">
        <button className="order-btn">Order Online</button>
      </div>
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
};

export default Header;
