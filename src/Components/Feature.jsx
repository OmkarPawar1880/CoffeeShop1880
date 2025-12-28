import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Feature = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="features" ref={sectionRef}>
      <div className="features-inner">
        <h2 className="features-title">Why People Love Ember & Brew</h2>
        <p className="features-subtitle">
          Crafted with passion, served with warmth.
        </p>

        <div className="features-grid">
          {[
            {
              icon: "☕",
              title: "Freshly Brewed Coffee",
              desc: "Premium beans, roasted and brewed to perfection every day.",
            },
            {
              icon: "🍰",
              title: "Handmade Bites",
              desc: "Fresh pastries and snacks that pair perfectly with your cup.",
            },
            {
              icon: "🌿",
              title: "Calm Ambience",
              desc: "A cozy space designed to relax, work, or connect.",
            },
            {
              icon: "🤍",
              title: "Community Driven",
              desc: "More than a café — a place where stories are shared.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
