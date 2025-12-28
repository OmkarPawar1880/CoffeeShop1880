import React from "react";
import { FaLeaf, FaClock, FaUsers } from "react-icons/fa";


/**
 * AboutSection
 * - Self-contained presentational component for the "Our Story" / "What Makes Us Different" section.
 * - Drop `AboutSection.jsx` and `AboutSection.css` into your project and import <AboutSection /> where needed.
 */
export default function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-inner container">
        {/* Left: story */}
        <div className="about-story">
          <h2 id="about-heading" className="eyebrow">Our Story</h2>
          <h1 className="title">From a Dream in Karad to Your Cup</h1>

          <p className="lead">
            It all started on a monsoon evening in 2019, in the heart of Karad,
            Maharashtra. Our founder, Rohan, was sitting in a small chai stall
            near the Krishna River, watching the rain blur the ghats in the
            distance. He'd just returned from Bangalore, where he'd fallen in
            love with specialty coffee culture — but he couldn't shake one
            feeling: Why doesn't Karad have a place like this?
          </p>

          <p>
            Karad has always been a city of students, dreamers, and doers. It
            deserved more than instant coffee and hurried cups. It deserved a
            space where conversations could linger, ideas could brew, and every
            sip felt intentional.
          </p>

          <p>
            So Rohan took a leap. He partnered with a local roaster in Satara,
            learned the craft of brewing from YouTube and countless failed
            espressos, and opened <strong>Ember &amp; Brew</strong> in a tiny 400
            sq. ft. corner near the old bus stand. The first week? Just 12
            customers. But they kept coming back. And they brought friends.
          </p>

          <p className="muted">
            Today, Ember &amp; Brew is more than a café — it's a feeling. It's
            the warmth of a perfectly pulled shot. The quiet hum of students
            studying by the window. The laughter of friends reuniting over cold
            brews on a summer afternoon. We didn't just open a café. We started
            a conversation.
          </p>
        </div>

        {/* Right: highlights */}
        <aside className="about-highlights" aria-labelledby="diff-heading">
          <h3 id="diff-heading" className="subhead">What Makes Us Different</h3>

          <ul className="features" role="list">
            <li className="feature">
              <span className="icon" aria-hidden="true"><FaLeaf /></span>
              <div>
                <h4>Locally Roasted, Globally Inspired</h4>
                <p className="feature-text">
                  We source beans from estates across India and roast them fresh
                  in Satara — bold, bright, and made for your palate.
                </p>
              </div>
            </li>

            <li className="feature">
              <span className="icon" aria-hidden="true"><FaClock /></span>
              <div>
                <h4>Crafted, Not Rushed</h4>
                <p className="feature-text">
                  Every cup is brewed with care. Whether it's a pour-over or a
                  classic filter coffee, we take our time — because you deserve
                  it.
                </p>
              </div>
            </li>

            <li className="feature">
              <span className="icon" aria-hidden="true"><FaUsers /></span>
              <div>
                <h4>Rooted in Community</h4>
                <p className="feature-text">
                  From open mic nights to art showcases, Ember &amp; Brew is
                  Karad's living room — a space where everyone belongs.
                </p>
              </div>
            </li>
          </ul>

          {/* CTA — optional */}
          <div className="cta-row">
            <a href="/menu" className="btn" aria-label="See our menu">See Our Menu</a>
            <a href="/events" className="link">Upcoming events →</a>
          </div>
        </aside>
      </div>
    </section>
  );
}
