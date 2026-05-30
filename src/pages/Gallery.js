import React, { useMemo, useRef, useState } from "react";
import "./Gallery.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Gallery() {
  const categories = useMemo(
    () => [
      {
        key: "living",
        label: "Living",
        images: [
          "/Images/own/gallery/living-1.jpeg",
          "/Images/own/gallery/living-2.jpeg",
          "/Images/own/gallery/living-3.jpeg",
          "/Images/own/gallery/living-4.jpeg",
          "/Images/own/gallery/living-5.jpeg",
          "/Images/own/gallery/living-6.jpeg",
          "/Images/own/gallery/living-7.jpeg",
          "/Images/own/gallery/living-8.jpeg"
        ]
      },
      {
        key: "bedroom",
        label: "Bedroom",
        images: [
          "/Images/own/gallery/bedroom-1.jpeg",
          "/Images/own/gallery/bedroom-2.jpeg",
          "/Images/own/gallery/bedroom-3.jpeg",
          "/Images/own/gallery/bedroom-4.jpeg",
          "/Images/own/gallery/bedroom-5.jpeg",
          "/Images/own/gallery/bedroom-6.jpeg",
          "/Images/own/gallery/bedroom-7.jpeg",
          "/Images/own/gallery/bedroom-8.jpeg"
        ]
      },
      {
        key: "kitchen",
        label: "Kitchen",
        images: [
          "/Images/own/gallery/kitchen-1.jpeg",
          "/Images/own/gallery/kitchen-2.jpeg",
          "/Images/own/gallery/kitchen-3.jpeg",
          "/Images/own/gallery/kitchen-4.jpeg",
          "/Images/own/gallery/kitchen-5.jpeg",
          "/Images/own/gallery/kitchen-6.jpeg",
          "/Images/own/gallery/kitchen-7.jpeg",
          "/Images/own/gallery/kitchen-8.jpeg"
        ]
      },
      {
        key: "facade",
        label: "Facade",
        images: [
          "/Images/gallery/facade-1.jpg",
          "/Images/gallery/facade-2.jpg",
          "/Images/gallery/facade-3.jpg",
          "/Images/gallery/facade-4.jpg",
          "/Images/gallery/facade-5.jpg",
          "/Images/gallery/facade-6.jpg",
          "/Images/gallery/facade-7.jpg",
          "/Images/gallery/facade-8.jpg"
        ]
      },
      {
        key: "ceiling",
        label: "False Ceiling",
        images: [
          "/Images/gallery/ceiling-1.jpg",
          "/Images/gallery/ceiling-2.jpg",
          "/Images/gallery/ceiling-3.jpg",
          "/Images/gallery/ceiling-4.jpg",
          "/Images/gallery/ceiling-5.jpg",
          "/Images/gallery/ceiling-6.jpg",
          "/Images/gallery/ceiling-7.jpg",
          "/Images/gallery/ceiling-8.jpg"
        ]
      }
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(categories[0].key);
  const [phase, setPhase] = useState("in");
  const tabTimerRef = useRef(null);

  const activeIndex = categories.findIndex((c) => c.key === activeKey);
  const active = categories[activeIndex] || categories[0];

  const handleTab = (key) => {
    if (key === activeKey) return;

    setPhase("out");

    if (tabTimerRef.current) {
      window.clearTimeout(tabTimerRef.current);
    }

    tabTimerRef.current = window.setTimeout(() => {
      setActiveKey(key);
      setPhase("in");
    }, 220);
  };

  const baSets = useMemo(
    () => [
      {
        title: "Living Room Upgrade",
        sub: "Lighting balance, cleaner layout, premium finish",
        before: "/Images/gallery/ba-living-before.jpg",
        after: "/Images/gallery/ba-living-after.jpg"
      },
      {
        title: "Modular Kitchen Finish",
        sub: "Storage planning, neat edges, better lighting",
        before: "/Images/gallery/ba-kitchen-before.jpg",
        after: "/Images/gallery/ba-kitchen-after.jpg"
      },
      {
        title: "Facade Elevation",
        sub: "Modern lines, material mix, clean detailing",
        before: "/Images/gallery/ba-facade-before.jpg",
        after: "/Images/gallery/ba-facade-after.jpg"
      }
    ],
    []
  );

  const [baValue, setBaValue] = useState([60, 60, 60]);

  const setOneBA = (idx, v) => {
    setBaValue((prev) => {
      const next = [...prev];
      next[idx] = v;
      return next;
    });
  };

  const filmstrip = useMemo(
    () => [
      "/Images/own/gallery/bedroom-1.jpeg",
      "/Images/own/gallery/bedroom-2.jpeg",
      "/Images/own/gallery/bedroom-3.jpeg",
      "/Images/own/gallery/bedroom-4.jpeg",
      "/Images/own/gallery/bedroom-5.jpeg",
      "/Images/own/gallery/bedroom-6.jpeg",
      "/Images/own/gallery/bedroom-7.jpeg",
      "/Images/own/gallery/bedroom-8.jpeg",
      "/Images/own/gallery/kitchen-1.jpeg",
      "/Images/own/gallery/kitchen-2.jpeg",
      "/Images/own/gallery/kitchen-3.jpeg",
      "/Images/own/gallery/kitchen-4.jpeg",
      "/Images/own/gallery/kitchen-5.jpeg",
      "/Images/own/gallery/kitchen-6.jpeg",
      "/Images/own/gallery/kitchen-7.jpeg",
      "/Images/own/gallery/kitchen-8.jpeg",
      "/Images/gallery/film-17.jpg",
      "/Images/gallery/film-18.jpg"
    ],
    []
  );

  return (
    <div className="gallery-page">
      <Navbar />

      <section className="g-hero" aria-label="Gallery hero">
        <div className="g-hero-bg" aria-hidden="true" />

        <div className="g-hero-inner">
          <div className="g-hero-left">
            <div className="g-chip">KALKINADH ONENESS (KANNA)</div>
            <h1 className="g-title">Gallery</h1>
            <p className="g-tagline">EXCELLENCE AT YOUR DOOR STEP</p>

            <p className="g-desc">
              A quick look at our interior works, modular kitchens, and facade designs. Clean finish, balanced lighting,
              and practical layouts.
            </p>

            <div className="g-actions">
              <a className="g-btn g-btn-solid" href="/contact">
                Get Quote
              </a>
              <a className="g-btn g-btn-outline" href="tel:+919393141224">
                Call +91 9393141224
              </a>
            </div>

            <div className="g-meta">
              <span className="g-meta-item">Andhra Pradesh</span>
              <span className="g-meta-dot" />
              <span className="g-meta-item">Telangana</span>
              <span className="g-meta-dot" />
              <span className="g-meta-item">Karnataka</span>
            </div>
          </div>

          <div className="g-hero-right" aria-label="Hero visuals">
            <div className="g-collage">
              <div className="g-card g-card-main">
                <img className="g-img" src="/Images/gallery/hero-main.jpg" alt="Gallery hero main" loading="eager" />
              </div>

              <div className="g-card g-card-a">
                <img className="g-img" src="/Images/gallery/hero-1.jpg" alt="Gallery preview 1" loading="lazy" />
              </div>

              <div className="g-card g-card-b">
                <img className="g-img" src="/Images/gallery/hero-2.jpg" alt="Gallery preview 2" loading="lazy" />
              </div>

              <div className="g-card g-card-c">
                <img className="g-img" src="/Images/gallery/hero-3.jpg" alt="Gallery preview 3" loading="lazy" />
              </div>

              <div className="g-card g-card-d">
                <img className="g-img" src="/Images/gallery/hero-4.jpg" alt="Gallery preview 4" loading="lazy" />
              </div>

              <div className="g-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="gtabs" aria-label="Gallery categories">
        <div className="gtabs-inner">
          <header className="gtabs-head">
            <h2 className="gtabs-title">Browse by Category</h2>
            <div className="gtabs-underline" />
            <p className="gtabs-sub">
              Select a category to view related works. Smooth transitions, clean layout, and a modern showroom feel.
            </p>
          </header>

          <div className="gtabs-bar" role="tablist" aria-label="Gallery category tabs">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                className={`gtab ${c.key === activeKey ? "active" : ""}`}
                onClick={() => handleTab(c.key)}
                role="tab"
                aria-selected={c.key === activeKey}
              >
                <span className="gtab-label">{c.label}</span>
              </button>
            ))}

            <div
              className="gtab-rail"
              style={{
                "--i": activeIndex,
                "--n": categories.length
              }}
              aria-hidden="true"
            />
          </div>

          <div className={`gtabs-stage ${phase === "out" ? "out" : "in"}`} aria-label={`${active.label} gallery`}>
            <div className="gtabs-grid">
              {active.images.map((src, i) => (
                <figure className="gitem" key={`${active.key}-${i}`} style={{ "--d": `${i * 70}ms` }}>
                  <div className="gitem-frame">
                    <img className="gitem-img" src={src} alt={`${active.label} ${i + 1}`} loading="lazy" />
                    <div className="gitem-shine" aria-hidden="true" />
                  </div>
                </figure>
              ))}
            </div>

            <div className="gtabs-foot">
              <div className="gtabs-foot-left">
                <div className="gtabs-badge">INCHX INTERIO</div>
                <div className="gtabs-foot-title">{active.label} Collection</div>
                <div className="gtabs-foot-sub">
                  Want a similar style for your home? Call +91 9393141224 or message us for a quote.
                </div>
              </div>

              <div className="gtabs-foot-right">
                <a className="g-btn g-btn-solid" href="/contact">
                  Enquire Now
                </a>
                <a className="g-btn g-btn-outline" href="tel:+919393141224">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gba" aria-label="Before and after">
        <div className="gba-inner">
          <header className="gba-head">
            <h2 className="gba-title">Before & After</h2>
            <div className="gba-underline" />
            <p className="gba-sub">
              Slide to compare. Same angle, same space, better planning and finishing.
            </p>
          </header>

          <div className="gba-grid">
            {baSets.map((it, idx) => (
              <article className="gba-card" key={`${it.title}-${idx}`}>
                <div className="gba-top">
                  <div className="gba-badge">KALKI’S</div>
                  <div className="gba-toptext">
                    <div className="gba-cardtitle">{it.title}</div>
                    <div className="gba-cardsub">{it.sub}</div>
                  </div>
                </div>

                <div className="gba-stage" style={{ "--p": `${baValue[idx]}%` }}>
                  <img className="gba-img gba-img-after" src={it.after} alt={`${it.title} after`} loading="lazy" />

                  <div className="gba-before-wrap">
                    <img className="gba-img gba-img-before" src={it.before} alt={`${it.title} before`} loading="lazy" />
                  </div>

                  <div className="gba-handle" aria-hidden="true">
                    <div className="gba-hline" />
                    <div className="gba-knob">
                      <span className="gba-arrow left" />
                      <span className="gba-arrow right" />
                    </div>
                  </div>
                </div>

                <div className="gba-controls">
                  <div className="gba-labels">
                    <span className="gba-l">Before</span>
                    <span className="gba-r">After</span>
                  </div>

                  <input
                    className="gba-range"
                    type="range"
                    min="0"
                    max="100"
                    value={baValue[idx]}
                    onChange={(e) => setOneBA(idx, Number(e.target.value))}
                    aria-label={`Compare slider for ${it.title}`}
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="gba-cta">
            <a className="g-btn g-btn-solid" href="/contact">
              Get Quote
            </a>
            <a className="g-btn g-btn-outline" href="tel:+919393141224">
              Call +91 9393141224
            </a>
          </div>
        </div>
      </section>

      <section className="gfilm" aria-label="Filmstrip gallery">
        <div className="gfilm-inner">
          <header className="gfilm-head">
            <h2 className="gfilm-title">Filmstrip Gallery</h2>
            <div className="gfilm-underline" />
            <p className="gfilm-sub">
              A smooth, continuous reel of works. Hover any frame to pause and focus.
            </p>
          </header>

          <div className="gfilm-stage">
            <div className="gfilm-row gfilm-row-a">
              {[...filmstrip, ...filmstrip].map((src, i) => (
                <div className="gfilm-frame" key={`a-${i}`}>
                  <div className="gfilm-perf" aria-hidden="true" />
                  <div className="gfilm-perf bottom" aria-hidden="true" />
                  <img className="gfilm-img" src={src} alt={`Film frame ${i + 1}`} loading="lazy" />
                  <div className="gfilm-glass" aria-hidden="true" />
                </div>
              ))}
            </div>

            <div className="gfilm-row gfilm-row-b">
              {[...filmstrip, ...filmstrip].reverse().map((src, i) => (
                <div className="gfilm-frame" key={`b-${i}`}>
                  <div className="gfilm-perf" aria-hidden="true" />
                  <div className="gfilm-perf bottom" aria-hidden="true" />
                  <img className="gfilm-img" src={src} alt={`Film frame ${i + 1}`} loading="lazy" />
                  <div className="gfilm-glass" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="gfilm-cta">
            <a className="g-btn g-btn-solid" href="/contact">
              Enquire Now
            </a>
            <a className="g-btn g-btn-outline" href="tel:+919393141224">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;