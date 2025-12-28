// CafeGallerySlideshow.jsx
// Single-file React component + CSS (works as-is).
// Usage: import CafeGallerySlideshow from "./CafeGallerySlideshow";
// <CafeGallerySlideshow />

import React, { useEffect, useRef, useState } from "react";

export default function CafeGallerySlideshow({ images: propImages }) {
  const fallbackImages = [
    "src/assets/ravi-sharma-B_4SL5mN1OA-unsplash.jpg",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=1600&q=80&auto=format&fit=crop"
  ];

  const images = (propImages && propImages.length >= 1) ? propImages.slice(0, 6) : fallbackImages;
  const slideCount = images.length;

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  // Next / Prev / GoTo (stable forms)
  const next = () => setIndex((i) => (i + 1) % slideCount);
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount);
  const goTo = (i) => setIndex(() => ((i % slideCount) + slideCount) % slideCount);

  // Autoplay interval — depend only on `playing` and `slideCount`
  useEffect(() => {
    // clear any previous interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (playing && slideCount > 1) {
      // use setInterval that updates index using functional setState
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % slideCount);
      }, 3500);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [playing, slideCount]);

  // Pause on hover & focus
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onEnter = () => setPlaying(false);
    const onLeave = () => setPlaying(true);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  // Keyboard navigation (use code for reliable detection)
  useEffect(() => {
    const onKey = (e) => {
      // ignore when user is typing in an input/textarea
      const target = e.target;
      const inInput = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
      if (inInput) return;

      if (e.code === "ArrowRight") next();
      if (e.code === "ArrowLeft") prev();
      if (e.code === "Space") {
        // e.code === 'Space' on most browsers; prevent default so page doesn't scroll
        e.preventDefault();
        setPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideCount]); // slideCount is stable; handler uses next/prev closures

  return (
    <section className="cafe-gallery" id="gallery" aria-label="Café photo gallery slideshow">
      <div className="gallery__container" ref={containerRef} tabIndex={0}>
        <div className="gallery__viewport" role="region" aria-roledescription="carousel">
          {images.map((src, i) => {
            const offset = (i - index + slideCount) % slideCount;
            const isActive = i === index;
            return (
              <figure
                id={`slide-${i}`}
                key={i}
                className={`gallery__slide ${isActive ? "is-active" : ""} pos-${offset}`}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${slideCount}`}
              >
                <img src={src} alt={`Gallery image ${i + 1}`} loading="lazy" />
                <figcaption className="gallery__caption">
                  {i === 0 && "Café interior"}
                  {i === 1 && "Latte art"}
                  {i === 2 && "Brewing moment"}
                  {i === 3 && "Coffee beans"}
                </figcaption>
              </figure>
            );
          })}
        </div>

        <button
          className="gallery__control gallery__control--prev"
          onClick={() => { prev(); setPlaying(false); }}
          aria-label="Previous image"
        >
          ‹
        </button>

        <button
          className="gallery__control gallery__control--next"
          onClick={() => { next(); setPlaying(false); }}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="gallery__dots" role="tablist" aria-label="Select slide">
          {images.map((_, i) => (
            <button
              key={i}
              className={`gallery__dot ${i === index ? "is-active" : ""}`}
              onClick={() => { goTo(i); setPlaying(false); }}
              role="tab"
              aria-selected={i === index}
              aria-controls={`slide-${i}`}
              tabIndex={0}
            />
          ))}
        </div>

        <button
          className="gallery__playtoggle"
          onClick={() => setPlaying((p) => !p)}
          aria-pressed={!playing}
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      {/* Component-scoped CSS (move to .css file if you prefer) */}
      
    </section>
  );
}
