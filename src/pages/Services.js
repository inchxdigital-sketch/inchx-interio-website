import React from "react";
import "./Services.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Services() {
  const marqueeRow1 = [
    "interior1.jpg",
    "interior2.jpg",
    "interior3.jpg",
    "interior4.jpg",
    "interior5.jpg",
    "interior6.jpg",
    "interior7.jpg",
    "interior8.jpg",
  ];

  const marqueeRow2 = [
    "show1.jpg",
    "show2.jpg",
    "show3.jpg",
    "show4.jpg",
    "show6.jpg",
    "show7.jpg",
    "show8.jpg",
    "show9.jpg",
  ];

  return (
    <div>
      <Navbar />

      <div className="services-wrapper" id="services">
        <section
          className="services-hero"
          style={{ backgroundImage: `url('/Images/main-banner3.jpg')` }}
        >
          <div className="services-hero-overlay">
            <div className="services-hero-inner">
              <div className="services-hero-kicker">KALKINADH ONENESS (KANNA)</div>
              <h1 className="services-hero-title">INCHX INTERIO</h1>
              <p className="services-hero-tagline">EXCELLENCE AT YOUR DOOR STEP</p>

              <div className="services-hero-actions">
                <a className="btn btn-solid" href="/contact">
                  Get Quote
                </a>
                <a className="btn btn-outline" href="tel:+919393141224">
                  Call +91 9393141224
                </a>
              </div>

              <div className="services-hero-meta">
                <a className="services-hero-link" href="mailto:inchxinterio@gmail.com">
                  inchxinterio@gmail.com
                </a>
                <span className="services-hero-sep">|</span>
                <a className="services-hero-link" href="mailto:kalkinadh.g@gmail.com">
                  kalkinadh.g@gmail.com
                </a>
                <span className="services-hero-sep">|</span>
                <span className="services-hero-handle">INCHX_INTERIO (Insta)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="brandstrip" aria-label="Brand intro">
          <div className="brandstrip-inner">
            <div className="brandstrip-left">
              <h2 className="section-title">KALKI’S Signature Work</h2>
              <div className="section-underline" />
              <p className="section-sub">
                We design interiors that feel premium, practical, and calm. From the first 3D view to the final finish,
                everything stays clean, aligned, and on-time.
              </p>

              <div className="brandstrip-points">
                <div className="brandstrip-point">
                  <span className="pill">Design First</span>
                  <div className="brandstrip-point-text">Clear planning with 3D design before execution begins.</div>
                </div>
                <div className="brandstrip-point">
                  <span className="pill">Neat Finish</span>
                  <div className="brandstrip-point-text">Clean edges, balanced lighting, and smooth handovers.</div>
                </div>
                <div className="brandstrip-point">
                  <span className="pill">Execution</span>
                  <div className="brandstrip-point-text">Step-by-step tracking and quality checks throughout.</div>
                </div>
              </div>
            </div>

            <div className="brandstrip-right" aria-label="Brand images">
              <div className="brandstrip-gallery">
                <figure className="imgcard">
                  <img src="/Images/final1.jpg" alt="Interior finish" />
                </figure>
                <figure className="imgcard">
                  <img src="/Images/final2.jpg" alt="Premium detailing" />
                </figure>
                <figure className="imgcard">
                  <img src="/Images/featured.jpg" alt="Featured interior" />
                </figure>
                <figure className="imgcard">
                  <img src="/Images/clock3.jpg" alt="Theme and mood" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="svcgrid" aria-label="Services">
          <div className="svcgrid-inner">
            <header className="section-head">
              <h2 className="section-title">Our Services</h2>
              <div className="section-underline" />
              <p className="section-sub">
                Full-service interior and facade work, with design clarity and execution discipline.
              </p>
            </header>

            <div className="svcgrid-grid">
              <article className="svcgrid-card">
                <div className="svcgrid-icon">01</div>
                <h3 className="svcgrid-title">Interior Designing</h3>
                <p className="svcgrid-text">
                  Space planning, layout design, and material selection to match your style and budget.
                </p>
              </article>

              <article className="svcgrid-card">
                <div className="svcgrid-icon">02</div>
                <h3 className="svcgrid-title">3D Designing</h3>
                <p className="svcgrid-text">
                  See your home before work starts. Clean 3D views with practical sizing and lighting ideas.
                </p>
              </article>

              <article className="svcgrid-card">
                <div className="svcgrid-icon">03</div>
                <h3 className="svcgrid-title">Modular Kitchens</h3>
                <p className="svcgrid-text">
                  Smart storage, neat shutters, durable hardware, and a finish built for daily use.
                </p>
              </article>

              <article className="svcgrid-card">
                <div className="svcgrid-icon">04</div>
                <h3 className="svcgrid-title">Planning & Execution</h3>
                <p className="svcgrid-text">
                  Timelines, tracking, and smooth coordination so the project stays on time and clean.
                </p>
              </article>

              <article className="svcgrid-card">
                <div className="svcgrid-icon">05</div>
                <h3 className="svcgrid-title">Facade Designing</h3>
                <p className="svcgrid-text">
                  Modern elevation concepts with balanced lines, textures, and long-lasting materials.
                </p>
              </article>

              <article className="svcgrid-card svcgrid-card-wide">
                <div className="svcgrid-wide">
                  <div className="svcgrid-wide-left">
                    <div className="svcgrid-wide-badge">Need a quick call?</div>
                    <h3 className="svcgrid-title">Let’s plan your space</h3>
                    <p className="svcgrid-text">
                      Share your requirement, we will guide you with layout, finish options, and a clear quote.
                    </p>
                    <div className="svcgrid-wide-actions">
                      <a className="btn btn-solid" href="/contact">
                        Enquire Now
                      </a>
                      <a className="btn btn-outline" href="tel:+919393141224">
                        Call Now
                      </a>
                    </div>
                  </div>
                  <div className="svcgrid-wide-right">
                    <img src="/Images/right3.jpg" alt="Modern interior details" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="process" aria-label="Process">
          <div className="process-inner">
            <header className="section-head section-head-dark">
              <h2 className="section-title section-title-dark">How We Work</h2>
              <div className="section-underline" />
              <p className="section-sub section-sub-dark">
                Simple steps, clear communication, and finishing that feels premium.
              </p>
            </header>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-no">01</div>
                <div className="process-body">
                  <div className="process-title">Site Visit</div>
                  <div className="process-text">Measurements, requirements, and style direction.</div>
                </div>
              </div>

              <div className="process-step">
                <div className="process-no">02</div>
                <div className="process-body">
                  <div className="process-title">3D Design</div>
                  <div className="process-text">Layouts, elevations, lighting, and mood selection.</div>
                </div>
              </div>

              <div className="process-step">
                <div className="process-no">03</div>
                <div className="process-body">
                  <div className="process-title">Quotation</div>
                  <div className="process-text">Clear scope, transparent pricing, and timelines.</div>
                </div>
              </div>

              <div className="process-step">
                <div className="process-no">04</div>
                <div className="process-body">
                  <div className="process-title">Execution</div>
                  <div className="process-text">Neat work, quality checks, and regular updates.</div>
                </div>
              </div>

              <div className="process-step">
                <div className="process-no">05</div>
                <div className="process-body">
                  <div className="process-title">Handover</div>
                  <div className="process-text">Clean finish, final walk-through, and support.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="regions" aria-label="Regions we serve">
          <div className="regions-inner">
            <div className="regions-grid">
              <div className="regions-left">
                <h2 className="section-title">Regions We Serve</h2>
                <div className="section-underline" />
                <p className="section-sub">
                  We take projects across South India with the same finish standard and execution discipline.
                </p>

                <div className="regions-cards">
                  <div className="regions-card">
                    <div className="regions-card-title">Andhra Pradesh</div>
                    <div className="regions-card-sub">Homes, apartments, and elevations.</div>
                  </div>
                  <div className="regions-card">
                    <div className="regions-card-title">Telangana</div>
                    <div className="regions-card-sub">Modern interiors and modular works.</div>
                  </div>
                  <div className="regions-card">
                    <div className="regions-card-title">Karnataka</div>
                    <div className="regions-card-sub">Planned execution with premium finish.</div>
                  </div>
                </div>
              </div>

              <div className="regions-right" aria-label="Regions visuals">
                <div className="regions-visual">
                  <img src="/Images/house1.jpg" alt="Exterior showcase" />
                  <div className="regions-float">
                    <div className="regions-float-title">Book a Site Visit</div>
                    <div className="regions-float-sub">Call +91 9393141224</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured" aria-label="Featured highlights">
          <div className="featured-inner">
            <header className="section-head">
              <h2 className="section-title">Featured Highlights</h2>
              <div className="section-underline" />
              <p className="section-sub">A few signature finishes that clients love, clean, modern, and long-lasting.</p>
            </header>

            <div className="featured-grid">
              <article className="featured-card">
                <img src="/Images/grid1.jpg" alt="Lighting and ceiling finish" />
                <div className="featured-cap">
                  <div className="featured-cap-title">Ceiling & Lighting</div>
                  <div className="featured-cap-sub">Balanced light, neat finishing.</div>
                </div>
              </article>

              <article className="featured-card">
                <img src="/Images/grid2.jpg" alt="Modular kitchen finish" />
                <div className="featured-cap">
                  <div className="featured-cap-title">Modular Kitchen</div>
                  <div className="featured-cap-sub">Storage-first layouts.</div>
                </div>
              </article>

              <article className="featured-card">
                <img src="/Images/grid3.jpg" alt="Wardrobes and storage" />
                <div className="featured-cap">
                  <div className="featured-cap-title">Wardrobes & Storage</div>
                  <div className="featured-cap-sub">Smooth finish, clean lines.</div>
                </div>
              </article>

              <article className="featured-card">
                <img src="/Images/grid4.jpg" alt="Living room finishes" />
                <div className="featured-cap">
                  <div className="featured-cap-title">Living Spaces</div>
                  <div className="featured-cap-sub">Calm tones, practical planning.</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Animated gallery">
          <div className="marquee-inner">
            <header className="section-head section-head-dark">
              <h2 className="section-title section-title-dark">Services Gallery</h2>
              <div className="section-underline" />
              <p className="section-sub section-sub-dark">
                A smooth, modern animation that shows our style range without distracting the page.
              </p>
            </header>

            <div className="marquee-wrap">
              <div className="marquee-row marquee-row-a" aria-hidden="true">
                {[...marqueeRow1, ...marqueeRow1].map((img, idx) => (
                  <div className="marquee-card" key={`a-${idx}`}>
                    <img src={`/Images/${img}`} alt="" />
                  </div>
                ))}
              </div>

              <div className="marquee-row marquee-row-b" aria-hidden="true">
                {[...marqueeRow2, ...marqueeRow2].map((img, idx) => (
                  <div className="marquee-card" key={`b-${idx}`}>
                    <img src={`/Images/${img}`} alt="" />
                  </div>
                ))}
              </div>
            </div>

            <div className="marquee-cta">
              <a className="btn btn-solid" href="/contact">
                Get a Design Plan
              </a>
              <a className="btn btn-outline" href="tel:+919393141224">
                Talk to Us
              </a>
            </div>
          </div>
        </section>

        <section className="showcase" aria-label="Project showcase">
          <div className="showcase-inner">
            <header className="section-head">
              <h2 className="section-title">Project Showcase</h2>
              <div className="section-underline" />
              <p className="section-sub">
                Strong planning, neat execution, and a finish that feels premium and calm.
              </p>
            </header>

            <div className="showcase-grid">
              <div className="showcase-left">
                <article className="showcase-hero">
                  <img
                    src="/Images/contact3.jpg"
                    alt="Modern interior showcase"
                  />
                  <div className="showcase-hero-overlay" />
                  <div className="showcase-hero-cap">
                    <div className="showcase-hero-kicker">INCHX INTERIO</div>
                    <div className="showcase-hero-title">Modern Homes, Made Practical</div>
                    <div className="showcase-hero-sub">Neat detailing, balanced layouts, and clean finishing.</div>
                  </div>
                </article>

                <div className="showcase-tiles">
                  <article className="showcase-tile">
                    <img src="/Images/interior2.jpg" alt="Premium interior" />
                    <div className="showcase-tile-cap">
                      <div className="showcase-tile-title">Premium Interiors</div>
                    </div>
                  </article>

                  <article className="showcase-tile">
                    <img src="/Images/clock2.jpg" alt="Smart layout planning" />
                    <div className="showcase-tile-cap">
                      <div className="showcase-tile-title">Smart Layout Planning</div>
                    </div>
                  </article>
                </div>
              </div>

              <aside className="showcase-right" aria-label="Showcase highlights">
                <div className="showcase-panel">
                  <h3 className="showcase-panel-title">What You Can Expect</h3>
                  <p className="showcase-panel-text">
                    Clean planning and clean finishing. From the first layout to the final touch, every step stays aligned
                    and tracked.
                  </p>

                  <ul className="showcase-points">
                    <li>
                      <span className="bullet" />
                      Modern elevation and clean lines
                    </li>
                    <li>
                      <span className="bullet" />
                      Quality materials with neat detailing
                    </li>
                    <li>
                      <span className="bullet" />
                      Lighting and storage planned for daily living
                    </li>
                    <li>
                      <span className="bullet" />
                      Timely delivery with regular updates
                    </li>
                    <li>
                      <span className="bullet" />
                      Friendly support after handover
                    </li>
                  </ul>

                  <div className="showcase-actions">
                    <a className="btn btn-solid" href="/contact">
                      Get Quote
                    </a>
                    <a className="btn btn-outline" href="tel:+919393141224">
                      Call Now
                    </a>
                  </div>

                  <div className="showcase-meta">
                    <div className="showcase-meta-title">Andhra Pradesh • Telangana • Karnataka</div>
                    <div className="showcase-meta-sub">
                      <a className="link" href="tel:+919393141224">
                        +91 9393141224
                      </a>
                      <span className="sep">|</span>
                      <a className="link" href="mailto:inchxinterio@gmail.com">
                        inchxinterio@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="testimonials" aria-label="Testimonials">
          <div className="testimonials-inner">
            <header className="section-head section-head-dark">
              <h2 className="section-title section-title-dark">Client Words</h2>
              <div className="section-underline" />
              <p className="section-sub section-sub-dark">
                Short feedback that reflects what we focus on, finish, clarity, and on-time execution.
              </p>
            </header>

            <div className="testimonials-grid">
              <article className="tcard">
                <div className="tcard-top">
                  <div className="tchip">Finish</div>
                  <div className="tstars">★★★★★</div>
                </div>
                <p className="ttext">
                  The finishing looks premium and clean. Lighting and ceiling work was done neatly.
                </p>
                <div className="tname">Home Interior</div>
              </article>

              <article className="tcard">
                <div className="tcard-top">
                  <div className="tchip">Planning</div>
                  <div className="tstars">★★★★★</div>
                </div>
                <p className="ttext">
                  The 3D design helped us decide fast. Execution followed the plan without confusion.
                </p>
                <div className="tname">Modular Kitchen</div>
              </article>

              <article className="tcard">
                <div className="tcard-top">
                  <div className="tchip">On-Time</div>
                  <div className="tstars">★★★★★</div>
                </div>
                <p className="ttext">
                  Work was completed on time, and the team kept the site clean. Very professional.
                </p>
                <div className="tname">Full Home Project</div>
              </article>
            </div>
          </div>
        </section>

        <section className="faq" aria-label="FAQ">
          <div className="faq-inner">
            <header className="section-head">
              <h2 className="section-title">Quick Answers</h2>
              <div className="section-underline" />
              <p className="section-sub">A few common questions before you book a site visit.</p>
            </header>

            <div className="faq-grid">
              <div className="faq-item">
                <div className="faq-q">Do you provide 3D design before work starts?</div>
                <div className="faq-a">Yes. We share 3D views and finalize the design, then we begin execution.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Which areas do you take projects in?</div>
                <div className="faq-a">Andhra Pradesh, Telangana, and Karnataka.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">How do I get a quote?</div>
                <div className="faq-a">Call us or use the contact page. A site visit helps us quote accurately.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Do you handle modular kitchens?</div>
                <div className="faq-a">Yes. We handle modular kitchen design, storage planning, and installation.</div>
              </div>
            </div>

            <div className="faq-cta">
              <a className="btn btn-solid" href="/contact">
                Enquire Now
              </a>
              <a className="btn btn-outline" href="mailto:inchxinterio@gmail.com">
                Email Us
              </a>
            </div>
          </div>
        </section>

        <section className="cta" aria-label="Final call to action">
          <div className="cta-inner">
            <div className="cta-panel">
              <div className="cta-left">
                <div className="cta-kicker">KALKINADH ONENESS (KANNA)</div>
                <h2 className="cta-title">Ready to start your interior work?</h2>
                <p className="cta-sub">
                  Share your requirement, we will guide you with planning, finishes, and a clean execution timeline.
                </p>
                <div className="cta-actions">
                  <a className="btn btn-solid" href="/contact">
                    Get Quote
                  </a>
                  <a className="btn btn-outline" href="tel:+919393141224">
                    Call +91 9393141224
                  </a>
                </div>
              </div>

              <div className="cta-right">
                <img src="/Images/right1.jpg" alt="Interior preview" />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Services;