import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Gallery.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Gallery() {
  const location = useLocation();
  const navigate = useNavigate();

  const categories = useMemo(
    () => [
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
          "/Images/gallery/facade-8.jpg",
          "/Images/gallery/facade-9.jpeg",
          "/Images/gallery/facade-10.jpeg",
          "/Images/gallery/facade-11.jpeg",
          "/Images/gallery/facade-12.jpeg"

        ]
      },
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
          "/Images/own/gallery/living-8.jpeg",
          "/Images/gallery/living-9.jpg",
          "/Images/gallery/living-10.jpg",
          "/Images/gallery/living-11.jpg",
          "/Images/gallery/living-12.jpg"
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
          "/Images/own/gallery/bedroom-8.jpeg",
          "/Images/gallery/bedroom-9.jpg",
          "/Images/gallery/bedroom-10.jpg",
          "/Images/gallery/bedroom-11.jpg",
          "/Images/gallery/bedroom-12.jpg",
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
          "/Images/own/gallery/kitchen-8.jpeg",
          "/Images/gallery/kitchen-9.jpg",
          "/Images/gallery/kitchen-10.jpg",
          "/Images/gallery/kitchen-11.jpg",
          "/Images/gallery/kitchen-12.jpg"
        ]
      },
      {
        key: "ceiling",
        label: "Poooja Mandir",
        images: [
          "/Images/gallery/mandir1.jpeg",
          "/Images/gallery/mandir3.jpeg",
          "/Images/gallery/mandir2.jpeg",
          "/Images/gallery/mandir4.jpeg",
          "/Images/gallery/mandir6.jpeg",
          "/Images/gallery/mandir7.jpeg",
          "/Images/gallery/mandir5.jpeg",
          "/Images/gallery/mandir9.jpeg",
          "/Images/gallery/mandir8.jpeg",
          "/Images/gallery/mandir10.jpeg",
          "/Images/gallery/mandir11.jpeg",
         

        ]
      }
    ],
    []
  );

  const selectedCategoryKey = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");
    const isValidCategory = categories.some((category) => category.key === selectedCategory);

    return isValidCategory ? selectedCategory : categories[0].key;
  }, [location.search, categories]);

  const [activeKey, setActiveKey] = useState(selectedCategoryKey);
  const [phase, setPhase] = useState("in");
  const [baValue, setBaValue] = useState([60, 60, 60]);

  const tabTimerRef = useRef(null);
  const galleryTabsRef = useRef(null);

  const activeIndex = categories.findIndex((category) => category.key === activeKey);
  const active = categories[activeIndex] || categories[0];

  useEffect(() => {
    let scrollTimer;

    if (selectedCategoryKey !== activeKey) {
      setActiveKey(selectedCategoryKey);
      setPhase("in");
    }

    if (location.search.includes("category=")) {
      scrollTimer = window.setTimeout(() => {
        galleryTabsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 300);
    }

    return () => {
      if (scrollTimer) {
        window.clearTimeout(scrollTimer);
      }
    };
  }, [selectedCategoryKey, activeKey, location.search]);

  useEffect(() => {
    return () => {
      if (tabTimerRef.current) {
        window.clearTimeout(tabTimerRef.current);
      }
    };
  }, []);

  const handleTab = (key) => {
    if (key === activeKey) return;

    setPhase("out");

    if (tabTimerRef.current) {
      window.clearTimeout(tabTimerRef.current);
    }

    tabTimerRef.current = window.setTimeout(() => {
      setActiveKey(key);
      setPhase("in");
      navigate(`/gallery?category=${key}`, { replace: true });
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

  const galleryHeroSlides = useMemo(
    () => [
      "/Images/gallery-hero-1.jpg",
      "/Images/gallery-hero-2.jpg",
      "/Images/gallery-hero-3.jpg"
    ],
    []
  );

  return (
    <div className="gallery-page">
      <Navbar />

      <section className="g-hero-update" aria-label="Gallery hero">
        <div className="g-hero-bg-update" aria-hidden="true">
          {galleryHeroSlides.map((image, index) => (
            <img
              key={image}
              className="g-hero-slide-update"
              src={image}
              alt=""
              style={{ animationDelay: `${index * 4}s` }}
            />
          ))}
        </div>

        <div className="g-hero-overlay-update" aria-hidden="true" />

        <div className="g-hero-inner-update">
          <div className="g-hero-left-update">
            <h1 className="g-title-update">Gallery</h1>

            <p className="g-tagline-update">EXCELLENCE AT YOUR DOOR STEP</p>

            <p className="g-desc-update">
              A quick look at our interior works, modular kitchens, and facade designs.
              Clean finish, balanced lighting, and practical layouts.
            </p>

            <div className="g-actions-update">
              <a className="g-btn-update g-btn-solid-update" href="/contact">
                Get Quote
              </a>

              <a className="g-btn-update g-btn-outline-update" href="tel:+919393141224">
                Call +91 9393141224
              </a>
            </div>

            <div className="g-meta-update">
              <span className="g-meta-item-update">Andhra Pradesh</span>
              <span className="g-meta-dot-update" />
              <span className="g-meta-item-update">Telangana</span>
              <span className="g-meta-dot-update" />
              <span className="g-meta-item-update">Karnataka</span>
              <span className="g-meta-dot-update" />
              <span className="g-meta-item-update">Odisha</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gtabs" aria-label="Gallery categories" ref={galleryTabsRef}>
        <div className="gtabs-inner">
          <header className="gtabs-head">
            <h2 className="gtabs-title">Browse by Category</h2>
            <div className="gtabs-underline" />
            <p className="gtabs-sub">
              Select a category to view related works. Smooth transitions, clean layout, and a modern showroom feel.
            </p>
          </header>

          <div className="gtabs-bar" role="tablist" aria-label="Gallery category tabs">
            {categories.map((category) => (
              <button
                key={category.key}
                type="button"
                className={`gtab ${category.key === activeKey ? "active" : ""}`}
                onClick={() => handleTab(category.key)}
                role="tab"
                aria-selected={category.key === activeKey}
              >
                <span className="gtab-label">{category.label}</span>
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