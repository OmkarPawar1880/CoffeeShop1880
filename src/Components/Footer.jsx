import React from "react";

import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* ABOUT */}
        <div className="footer__col">
          <h3>About Ember & Brew</h3>
          <p>
            Nestled in the heart of Karad, Maharashtra, Ember and Brew is your 
            neighborhood destination for exceptional coffee and warm hospitality. 
            We serve thoughtfully crafted brews and fresh bites in a cozy, welcoming space.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer__col">
          <h3>Contact</h3>
          <p><MdPhone /> +91 98765 43210</p>
          <p><MdEmail /> emberbrew@gmail.com</p>
          <p>
            <FaMapMarkerAlt />  
            21 Krishna River Road, Near MG Circle,  
            Karad, Maharashtra 415110
          </p>
        </div>

        {/* HOURS */}
        <div className="footer__col">
          <h3>Opening Hours</h3>
          <p>Monday – Sunday: 9:00 AM – 11:00 PM</p>
          <p>Special Holidays: 10:00 AM – 8:00 PM</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Reservations / Order Online</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer__col">
          <h3>Follow Us</h3>
          <div className="footer__social">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaMapMarkerAlt /></a>
          </div>
        </div>

        {/* LEGAL */}
        <div className="footer__col">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Refund / Cancellation Policy</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer__col newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe for the latest offerings and events.</p>
          <div className="newsletter__box">
            <input type="email" placeholder="Enter your email..." />
            <button>Subscribe</button>
          </div>
        </div>

        {/* PAYMENTS */}
        <div className="footer__col">
          <h3>Payment Methods</h3>
          <div className="payments">
            <span>💵 Cash</span>
            <span>📲 UPI</span>
            <span>💳 Card</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        © 2024 Ember and Brew Cafe. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
