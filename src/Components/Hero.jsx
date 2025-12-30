import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroDesktop from "../assets/ember & brew cafe.png";
import heroMobile from "../assets/Ember & Brew Phone.png";
import heroTablet from "../assets/Ember & Brew Tab.png"


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const maskRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 2,
          pin: true,
        },
      });

      // 1️⃣ Mask text scales (image reveal)
      tl.fromTo(
        textRef.current,
        { scale: 1 },
        { scale: 250, ease: "none" }
      );

      // 2️⃣ Mask fades out → full image visible
      tl.to(maskRef.current, {
        opacity: 0,
        ease: "none",
      });

      // 3️⃣ Catch line + CTA appear
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-container" id="home" ref={containerRef}>
      {/* Background Image */}

      {/* 🔥 Responsive Background Image */}
      <picture className="hero-img-wrapper">
        {/* Mobile */}
        <source
          media="(max-width: 600px)"
          srcSet={heroMobile}
        />

        {/* Tablet */}
        <source
          media="(max-width: 1024px)"
          srcSet={heroTablet}
        />

        {/* Desktop (fallback) */}
        <img
          src={heroDesktop}
          alt="Ember & Brew Cafe"
          className="hero-img"
        />
      </picture>


      
      {/* Mask */}
      <div className="mask" ref={maskRef}>
        <h2 ref={textRef}>Ember & Brew</h2>
      </div>

      {/* Final Hero Content */}
      <div className="hero-content" ref={contentRef}>
        <h3>Where Every Sip Tells a Story</h3>
        <p>
          Discover artisan coffee crafted with passion, brewed for moments
          you’ll always remember.
        </p>
        <button className="cta-btn">Order a Coffee</button>
      </div>
    </section>
  );
};

export default Hero;
