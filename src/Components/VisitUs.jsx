// VisitUs.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const VisitUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".visit-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="visit-us" id="contact" ref={sectionRef}>
      <h2 className="visit-title visit-animate">Visit Us 📍</h2>
      <p className="visit-subtitle visit-animate">
        Perfect for meetings, dates & solo work
      </p>

      <div className="visit-wrapper">
        {/* Map */}
        <div className="visit-map visit-animate">
          <iframe
            title="Ember & Brew Location"
            src="https://www.google.com/maps?q=Karad,Maharashtra&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info */}
        <div className="visit-info visit-animate">
          <div className="visit-block">
            <h3>📍 Address</h3>
            <p>
              Ember & Brew Café <br />
              Krishna River Road, Near MG Circle <br />
              Karad, Maharashtra
            </p>
          </div>

          <div className="visit-block">
            <h3>⏰ Opening Hours</h3>
            <p>
              Monday – Sunday <br />
              9:00 AM – 10:30 PM
            </p>
          </div>

          <a
            className="visit-button"
            href="https://www.google.com/maps?q=Karad,Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
