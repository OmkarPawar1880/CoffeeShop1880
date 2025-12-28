import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".reason"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
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
    <section className="why-choose" ref={sectionRef}>
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-tagline">Where Every Cup Tells a Story</p>

      <div className="why-grid">
        <div className="reason">
          <h3>Freshly Roasted</h3>
          <p>Small-batch beans, sourced sustainably and roasted with care.</p>
        </div>

        <div className="reason">
          <h3>Crafted by Experts</h3>
          <p>Every brew handled by skilled baristas who respect the ritual.</p>
        </div>

        <div className="reason">
          <h3>Warm, Welcoming Space</h3>
          <p>A cozy place to work, relax, or connect—just like home.</p>
        </div>

        <div className="reason">
          <h3>Locally Loved</h3>
          <p>Pastries, milk, and ingredients sourced from our community.</p>
        </div>
      </div>

      <span className="why-footer">
        Fresh Roasted · Expertly Crafted · Locally Loved
      </span>
    </section>
  );
};

export default WhyChooseUs;
