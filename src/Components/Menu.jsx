import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { allFoods } from "../../constants/foodItems";


const Menu = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
    );
  }, [currentIndex]);

  if (!Array.isArray(allFoods) || allFoods.length === 0) return null;

  const total = allFoods.length;
  const food = allFoods[currentIndex];
  const prev = allFoods[(currentIndex - 1 + total) % total];
  const next = allFoods[(currentIndex + 1) % total];

  return (
    <section ref={containerRef} id="menu" className="menu">
      <h2 className="menu__heading">Food Menu</h2>

      <nav className="menu__tabs">
        {allFoods.map((item, index) => (
          <button
            key={item.id}
            className={`menu__tab ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          >
            {item.name}
          </button>
        ))}
      </nav>

      <div className="menu__arrows">
        <button onClick={() => setCurrentIndex((currentIndex - 1 + total) % total)}>
          ← {prev.name}
        </button>

        <button onClick={() => setCurrentIndex((currentIndex + 1) % total)}>
          {next.name} →
        </button>
      </div>

      <div className="menu__image">
        <img ref={imageRef} src={food.image} alt={food.name} />
      </div>

      <div className="menu__details">
        <h3 ref={titleRef} className="menu__name">{food.name}</h3>
        <h4 className="menu__title">{food.title}</h4>
        <p className="menu__desc">{food.description}</p>
      </div>

        <div className="menu__cta">
        <button className="menu__view-btn">
          View Full Menu
        </button>
      </div>


    </section>
  );
};

export default Menu;
