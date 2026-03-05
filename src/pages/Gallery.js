import React, { useEffect, useMemo, useState } from "react";
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
                    "/Images/gallery/living-1.jpg",
                    "/Images/gallery/living-2.jpg",
                    "/Images/gallery/living-3.jpg",
                    "/Images/gallery/living-4.jpg",
                    "/Images/gallery/living-5.jpg",
                    "/Images/gallery/living-6.jpg",
                    "/Images/gallery/living-7.jpg",
                    "/Images/gallery/living-8.jpg",
                ],
            },
            {
                key: "bedroom",
                label: "Bedroom",
                images: [
                    "/Images/gallery/bedroom-1.jpg",
                    "/Images/gallery/bedroom-2.jpg",
                    "/Images/gallery/bedroom-3.jpg",
                    "/Images/gallery/bedroom-4.jpg",
                    "/Images/gallery/bedroom-5.jpg",
                    "/Images/gallery/bedroom-6.jpg",
                    "/Images/gallery/bedroom-7.jpg",
                    "/Images/gallery/bedroom-8.jpg",
                ],
            },
            {
                key: "kitchen",
                label: "Kitchen",
                images: [
                    "/Images/gallery/kitchen-1.jpg",
                    "/Images/gallery/kitchen-2.jpg",
                    "/Images/gallery/kitchen-3.jpg",
                    "/Images/gallery/kitchen-4.jpg",
                    "/Images/gallery/kitchen-5.jpg",
                    "/Images/gallery/kitchen-6.jpg",
                    "/Images/gallery/kitchen-7.jpg",
                    "/Images/gallery/kitchen-8.jpg",

                ],
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
                    "/Images/gallery/facade-8.jpg",
                ],
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
                    "/Images/gallery/ceiling-8.jpg",

                ],
            },
        ],
        []
    );

    const [activeKey, setActiveKey] = useState(categories[0].key);
    const [phase, setPhase] = useState("in");

    const activeIndex = categories.findIndex((c) => c.key === activeKey);
    const active = categories[activeIndex];

    const handleTab = (key) => {
        if (key === activeKey) return;
        setPhase("out");
        window.clearTimeout(handleTab._t);
        handleTab._t = window.setTimeout(() => {
            setActiveKey(key);
            setPhase("in");
        }, 220);
    };

    const masonryItems = useMemo(
        () => [
            { src: "/Images/gallery/masonry-1.jpg", title: "Living Room", sub: "Balanced lighting, clean finish" },
            { src: "/Images/gallery/masonry-2.jpg", title: "Bedroom", sub: "Warm tones, neat detailing" },
            { src: "/Images/gallery/masonry-3.jpg", title: "Modular Kitchen", sub: "Storage-first planning" },
            { src: "/Images/gallery/masonry-4.jpg", title: "Facade", sub: "Modern elevation lines" },
            { src: "/Images/gallery/masonry-5.jpg", title: "False Ceiling", sub: "Lighting + ceiling layout" },
            { src: "/Images/gallery/masonry-6.jpg", title: "TV Unit", sub: "Custom design, clean edges" },
            { src: "/Images/gallery/masonry-7.jpg", title: "Wardrobe", sub: "Smart storage, smooth finish" },
            { src: "/Images/gallery/masonry-8.jpg", title: "Dining", sub: "Practical layout planning" },
            { src: "/Images/gallery/masonry-9.jpg", title: "Hallway", sub: "Simple, premium look" },
            { src: "/Images/gallery/masonry-10.jpg", title: "Kitchen Details", sub: "Hardware and finish focus" },
            { src: "/Images/gallery/masonry-11.jpg", title: "Bedroom Details", sub: "Texture and color balance" },
            { src: "/Images/gallery/masonry-12.jpg", title: "Facade Details", sub: "Material and lighting blend" },
            { src: "/Images/gallery/masonry-13.jpg", title: "Living Details", sub: "Comfort meets style" },
            { src: "/Images/gallery/masonry-14.jpg", title: "Ceiling Details", sub: "Neat cut lines" },
            { src: "/Images/gallery/masonry-15.jpg", title: "Storage", sub: "Minimal, functional" },
            { src: "/Images/gallery/masonry-16.jpg", title: "Premium Interior", sub: "Clean and modern" },
            { src: "/Images/gallery/masonry-17.jpg", title: "Entrance", sub: "Strong first impression" },
            { src: "/Images/gallery/masonry-18.jpg", title: "Full Home", sub: "Complete finish quality" },
        ],
        []
    );

    const [masonryReady, setMasonryReady] = useState(false);

    useEffect(() => {
        const el = document.querySelector(".gmasonry");
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMasonryReady(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.18 }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const baSets = useMemo(
        () => [
            {
                title: "Living Room Upgrade",
                sub: "Lighting balance, cleaner layout, premium finish",
                before: "/Images/gallery/ba-living-before.jpg",
                after: "/Images/gallery/ba-living-after.jpg",
            },
            {
                title: "Modular Kitchen Finish",
                sub: "Storage planning, neat edges, better lighting",
                before: "/Images/gallery/ba-kitchen-before.jpg",
                after: "/Images/gallery/ba-kitchen-after.jpg",
            },
            {
                title: "Facade Elevation",
                sub: "Modern lines, material mix, clean detailing",
                before: "/Images/gallery/ba-facade-before.jpg",
                after: "/Images/gallery/ba-facade-after.jpg",
            },
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
            "/Images/gallery/film-1.jpg",
            "/Images/gallery/film-2.jpg",
            "/Images/gallery/film-3.jpg",
            "/Images/gallery/film-4.jpg",
            "/Images/gallery/film-5.jpg",
            "/Images/gallery/film-6.jpg",
            "/Images/gallery/film-7.jpg",
            "/Images/gallery/film-8.jpg",
            "/Images/gallery/film-9.jpg",
            "/Images/gallery/film-10.jpg",
            "/Images/gallery/film-11.jpg",
            "/Images/gallery/film-12.jpg",
            "/Images/gallery/film-13.jpg",
            "/Images/gallery/film-14.jpg",
            "/Images/gallery/film-15.jpg",
            "/Images/gallery/film-16.jpg",
            "/Images/gallery/film-17.jpg",
            "/Images/gallery/film-18.jpg",
        ],
        []
    );

    const spotlightItems = useMemo(
        () => [
            { src: "/Images/gallery/spot-1.jpg", title: "Living Room", sub: "Clean lighting and premium finish" },
            { src: "/Images/gallery/spot-2.jpg", title: "Bedroom", sub: "Warm tones with neat detailing" },
            { src: "/Images/gallery/spot-3.jpg", title: "Modular Kitchen", sub: "Smart storage planning" },
            { src: "/Images/gallery/spot-4.jpg", title: "Facade", sub: "Modern elevation lines" },
            { src: "/Images/gallery/spot-5.jpg", title: "False Ceiling", sub: "Balanced lighting layout" },
            { src: "/Images/gallery/spot-6.jpg", title: "TV Unit", sub: "Custom work, clean edges" },
            { src: "/Images/gallery/spot-7.jpg", title: "Wardrobe", sub: "Storage-first design" },
            { src: "/Images/gallery/spot-8.jpg", title: "Dining", sub: "Practical layouts" },
            { src: "/Images/gallery/spot-9.jpg", title: "Premium Interior", sub: "Modern and calm finish" },
            { src: "/Images/gallery/spot-10.jpg", title: "Entrance", sub: "Strong first impression" },
            { src: "/Images/gallery/spot-11.jpg", title: "Ceiling Details", sub: "Neat cut lines" },
            { src: "/Images/gallery/spot-12.jpg", title: "Full Home", sub: "Complete finish quality" },
        ],
        []
    );

    const [spotIndex, setSpotIndex] = useState(0);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowLeft") setSpotIndex((p) => (p - 1 + spotlightItems.length) % spotlightItems.length);
            if (e.key === "ArrowRight") setSpotIndex((p) => (p + 1) % spotlightItems.length);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [spotlightItems.length]);

    const goSpot = (dir) => {
        setSpotIndex((p) => {
            const n = spotlightItems.length;
            return dir === "next" ? (p + 1) % n : (p - 1 + n) % n;
        });
    };

    const rel = (i) => {
        const n = spotlightItems.length;
        let d = i - spotIndex;
        if (d > n / 2) d -= n;
        if (d < -n / 2) d += n;
        return d;
    };

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
                        {categories.map((c, idx) => (
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
                                "--n": categories.length,
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

            <section className="gmasonry" aria-label="Masonry gallery">
                <div className="gmasonry-inner">
                    <header className="gmasonry-head">
                        <h2 className="gmasonry-title">Masonry Showcase</h2>
                        <div className="gmasonry-underline" />
                        <p className="gmasonry-sub">
                            A quick wall of highlights. Hover to reveal details, scroll to see the layout build smoothly.
                        </p>
                    </header>

                    <div className={`gmasonry-wall ${masonryReady ? "ready" : ""}`}>
                        {masonryItems.map((it, i) => (
                            <figure className="gmasonry-item" key={`${it.src}-${i}`} style={{ "--d": `${i * 60}ms` }}>
                                <div className="gmasonry-frame">
                                    <img className="gmasonry-img" src={it.src} alt={it.title} loading="lazy" />
                                    <div className="gmasonry-overlay">
                                        <div className="gmasonry-tag">INCHX INTERIO</div>
                                        <div className="gmasonry-caption">
                                            <div className="gmasonry-cap-title">{it.title}</div>
                                            <div className="gmasonry-cap-sub">{it.sub}</div>
                                        </div>
                                    </div>
                                </div>
                            </figure>
                        ))}
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

            <section className="gspot" aria-label="Spotlight carousel">
                <div className="gspot-inner">
                    <header className="gspot-head">
                        <h2 className="gspot-title">Spotlight Carousel</h2>
                        <div className="gspot-underline" />
                        <p className="gspot-sub">
                            A center-focused view. Tap arrows or use left and right keys to browse.
                        </p>
                    </header>

                    <div className="gspot-stage" role="region" aria-label="Carousel">
                        <button type="button" className="gspot-nav left" onClick={() => goSpot("prev")} aria-label="Previous">
                            ‹
                        </button>

                        <div className="gspot-track" style={{ "--i": spotIndex, "--n": spotlightItems.length }}>
                            {spotlightItems.map((it, i) => {
                                const d = rel(i);
                                const state = d === 0 ? "active" : Math.abs(d) === 1 ? "near" : "far";
                                return (
                                    <article
                                        key={`${it.src}-${i}`}
                                        className={`gspot-card ${state}`}
                                        style={{ "--d": d }}
                                        onClick={() => setSpotIndex(i)}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${it.title} card`}
                                    >
                                        <div className="gspot-imgwrap">
                                            <img className="gspot-img" src={it.src} alt={it.title} loading="lazy" />
                                            <div className="gspot-glass" aria-hidden="true" />
                                        </div>
                                        <div className="gspot-cap">
                                            <div className="gspot-cap-title">{it.title}</div>
                                            <div className="gspot-cap-sub">{it.sub}</div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        <button type="button" className="gspot-nav right" onClick={() => goSpot("next")} aria-label="Next">
                            ›
                        </button>
                    </div>

                    <div className="gspot-cta">
                        <a className="g-btn g-btn-solid" href="/contact">
                            Get Quote
                        </a>
                        <a className="g-btn g-btn-outline" href="tel:+919393141224">
                            Call +91 9393141224
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Gallery;