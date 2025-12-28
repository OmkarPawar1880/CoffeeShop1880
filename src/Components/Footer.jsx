import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer__col", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__container">

        {/* ABOUT */}
        <div className="footer__col">
          <h3>About Ember & Brew</h3>
          <p>
            Nestled in the heart of Karad, Maharashtra, Ember and Brew is your
            neighborhood destination for exceptional coffee and warm hospitality.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer__col">
          <h3>Contact</h3>
          <p><MdPhone /> +91 98765 43210</p>
          <p><MdEmail /> emberbrew@gmail.com</p>
          <p>
            <FaMapMarkerAlt /> Krishna River Road, MG Circle,<br />
            Karad, Maharashtra 415110
          </p>
        </div>

        {/* HOURS */}
        <div className="footer__col">
          <h3>Opening Hours</h3>
          <p>Mon – Sun: 9:00 AM – 11:00 PM</p>
          <p>Holidays: 10:00 AM – 8:00 PM</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer__col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Careers</a></li>
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

        {/* NEWSLETTER */}
        <div className="footer__col newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe for events & new brews</p>
          <div className="newsletter__box">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        © 2024 Ember & Brew Café. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
