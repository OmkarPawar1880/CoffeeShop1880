import React from "react";


const Header = () => {
  return (
    <header className="header">
      {/* Logo / Brand */}
      <div className="logo">
        Ember & Brew
      </div>

      {/* Navigation Links */}
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Call to Action */}
      <div className="cta">
        <button className="order-btn">Order Online</button>
      </div>
    </header>
  );
};

export default Header;
