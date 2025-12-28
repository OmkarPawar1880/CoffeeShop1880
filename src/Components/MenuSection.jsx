import React from "react";


const items = [
  {
    id: 1,
    emoji: "☕",
    name: "Ember Latte",
    tagline: "Our house specialty",
    desc:
      "A velvety smooth latte with notes of caramel and hazelnut, topped with a delicate cinnamon swirl. Made with our signature medium roast blend from Chikmagalur estates. It's comfort in a cup — the drink that started it all.",
    price: "₹140",
  },
  {
    id: 2,
    emoji: "🌤️",
    name: "Krishna Cold Brew",
    tagline: "Named after our river, crafted for our summers",
    desc:
      "Steeped for 18 hours and served over ice, this cold brew is bold yet refreshingly smooth — with hints of dark chocolate and a whisper of citrus. Perfect for Karad's warm afternoons when you need clarity and calm.",
    price: "₹160",
  },
  {
    id: 3,
    emoji: "🍂",
    name: "Filter Kaapi Reimagined",
    tagline: "South Indian soul, specialty coffee heart",
    desc:
      "We took the classic filter coffee you grew up with and elevated it. Made with our single-origin Araku beans, frothed to perfection, and served in a traditional steel tumbler. Nostalgia, but make it artisan.",
    price: "₹120",
  },
  {
    id: 4,
    emoji: "🥐",
    name: "Cardamom Butter Croissant",
    tagline: "The perfect companion",
    desc:
      "Flaky, golden, and lightly spiced with Maharashtrian cardamom. Baked fresh every morning by our local partner bakery. Pairs beautifully with any brew — but we love it with the Ember Latte.",
    price: "₹80",
  },
];

export default function SignatureBrews() {
  return (
    <section className="sb-container" aria-labelledby="sb-heading">
      <div className="sb-header">
        <div>
          <h2 id="sb-heading" className="sb-title">Our Signature Brews</h2>
          <p className="sb-subtitle">The drinks that made us a Karad favorite</p>
        </div>
        <a className="sb-fullmenu" href="#full-menu" aria-label="View full menu">
          View Full Menu →
        </a>
      </div>

      <ul className="sb-grid" role="list">
        {items.map((it) => (
          <li key={it.id} className="sb-card" role="article" aria-label={it.name}>
            <div className="sb-top">
              <div className="sb-emoji" aria-hidden="true">{it.emoji}</div>
              <div className="sb-meta">
                <h3 className="sb-name">{it.name}</h3>
                <div className="sb-tagline">{it.tagline}</div>
              </div>
              <div className="sb-price">{it.price}</div>
            </div>

            <p className="sb-desc">{it.desc}</p>

            <div className="sb-actions">
              <button className="sb-btn sb-btn-order" type="button">Order</button>
              <button className="sb-btn sb-btn-more" type="button" aria-label={`More about ${it.name}`}>
                More
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
