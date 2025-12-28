// CallToAction.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".cta-animate"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="cta-banner" ref={sectionRef}>
      <h2 className="cta-title cta-animate">
        Your next favorite cup is waiting.
      </h2>

      <p className="cta-subtitle cta-animate">
        Visit Ember & Brew Today
      </p>

      <a
        href="#visit-us"
        className="cta-button cta-animate"
      >
        Get Directions →
      </a>
    </section>
  );
};

export default CallToAction;
