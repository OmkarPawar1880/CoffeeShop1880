import React from "react";


const Feature = ({ icon, title, children }) => (
  <article className="feature" tabIndex="0" aria-labelledby={title.replace(/\s+/g, "-")}>
    <div className="feature__icon" aria-hidden="true">{icon}</div>
    <h3 id={title.replace(/\s+/g, "-")} className="feature__title">{title}</h3>
    <p className="feature__desc">{children}</p>
  </article>
);

export default function FeaturesSection() {
  return (
    <section className="features" aria-labelledby="features-heading">
      <div className="features__inner">
        

        <div className="features__grid">
          <Feature
            title="Freshly Roasted, Every Week"
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M4 12c0 4.418 3.582 8 8 8s8-3.582 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            We roast small batches at our partner roastery in Satara and deliver fresh to Karad every week — bright, bold, and full of life.
          </Feature>

          <Feature
            title="Brewed by Trained Baristas"
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 7h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 3h6v4H9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Every team member is trained in tamping, milk temperature, and extraction — we obsess over details for a consistent cup every time.
          </Feature>

          <Feature
            title="Sustainably Sourced, Locally Loved"
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 6 4 7 4 11c0 5 4 9 8 11 4-2 8-6 8-11 0-4-4-5-8-9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 11.5c.5 1 1.5 2 2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            }
          >
            Partnering with estates from Chikmagalur, Coorg, and Araku Valley — organic practices and fair wages. Great coffee, better impact.
          </Feature>

          <Feature
            title="A Space That Feels Like Home"
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 7v-2h10v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            }
          >
            Warm lighting, wooden tables, and soft acoustic playlists — your corner of calm in the heart of Karad.
          </Feature>

          <Feature
            title="Community Over Commerce"
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M5 20c1-4 6-6 7-6s6 2 7 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
          >
            Open mic nights, art shows, book clubs, and student sessions — because connection is the best thing we brew.
          </Feature>

          <Feature
            title="No Rushing. No Judgement. Just Good Vibes."
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 21s4-2 4-6-1.5-5-4-5-4 2-4 5 4 6 4 6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            }
          >
            Stay for 10 minutes or 3 hours — work, sketch, or simply sit. You're welcome exactly as you are.
          </Feature>
        </div>

        <div className="features__cta">
          <a className="btn" href="/visit" role="button">Visit Us →</a>
          <a className="btn btn--outline" href="/menu" role="button">View Menu →</a>
        </div>
      </div>
    </section>
  );
}
