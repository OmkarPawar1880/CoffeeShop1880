// Testimonials.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Best coffee in Karad. Calm vibe and consistent quality every single visit.",
    author: "Local Customer"
  },
  {
    text: "A perfect place to work or just sit quietly with a book. The coffee is always on point.",
    author: "College Student"
  },
  {
    text: "Friendly staff, warm ambience, and excellent coffee. Feels like a second home.",
    author: "Regular Visitor"
  },
  {
    text: "I love how peaceful it is here. Great brews, great people, great energy.",
    author: "Freelance Designer"
  },
  {
    text: "From espresso to cold brews, everything tastes thoughtfully crafted. Highly recommended.",
    author: "Coffee Enthusiast"
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      }
    );
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <h2 className="testimonials-title">Customer Love ❤️</h2>
      <p className="testimonials-subtitle">
        What our guests say about us
      </p>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p className="testimonial-text">“{item.text}”</p>
            <span className="testimonial-author">— {item.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
