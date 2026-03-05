import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="about8">
        <section className="about8-hero" aria-label="About hero">
          <img className="about8-hero-img" src="/Images/about.jpg" alt="INCHX INTERIO about" />
          <div className="about8-hero-overlay" />
          <div className="about8-hero-content">
            <div className="about8-hero-pill">INCHX INTERIO</div>
            <h1 className="about8-hero-title">About Us</h1>
            <p className="about8-hero-sub">
              Excellence at your doorstep, interiors that feel premium, practical, and built to last.
            </p>

            <div className="about8-hero-cta">
              <a className="about8-btn about8-btn-solid" href="/contact">
                Get a Free Consultation
              </a>
              <a className="about8-btn about8-btn-ghost" href="tel:+919393141224">
                Call +91 93931 41224
              </a>
            </div>

            <div className="about8-hero-badges" aria-label="Service regions">
              <span className="about8-badge">Andhra Pradesh</span>
              <span className="about8-badge">Telangana</span>
              <span className="about8-badge">Karnataka</span>
            </div>
          </div>
        </section>

        <section className="about8-s1" aria-label="Who we are">
          <div className="about8-container">
            <div className="about8-s1-grid">
              <div className="about8-s1-left">
                <h2 className="about8-h2">Who We Are</h2>
                <div className="about8-underline" />
                <p className="about8-p">
                  INCHX INTERIO is led by <span className="about8-strong">Kalkinadh Oneness (Kanna)</span>. We design and execute
                  interiors that match your lifestyle and your budget, with clean workmanship and premium finishing.
                </p>

                <div className="about8-kpi">
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">01</div>
                    <div className="about8-kpi-label">Clear planning</div>
                    <div className="about8-kpi-sub">Smart layouts, smooth workflow</div>
                  </div>
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">02</div>
                    <div className="about8-kpi-label">Neat execution</div>
                    <div className="about8-kpi-sub">Clean edges, clean site</div>
                  </div>
                  <div className="about8-kpi-box">
                    <div className="about8-kpi-num">03</div>
                    <div className="about8-kpi-label">Premium finish</div>
                    <div className="about8-kpi-sub">Details that feel rich</div>
                  </div>
                </div>

                <div className="about8-info">
                  <div className="about8-info-row">
                    <div className="about8-info-label">Phone</div>
                    <a className="about8-info-val about8-link" href="tel:+919393141224">
                      +91 93931 41224
                    </a>
                  </div>
                  <div className="about8-info-row">
                    <div className="about8-info-label">Email</div>
                    <a className="about8-info-val about8-link" href="mailto:inchxinterio@gmail.com">
                      inchxinterio@gmail.com
                    </a>
                  </div>
                  <div className="about8-info-row">
                    <div className="about8-info-label">Instagram</div>
                    <a className="about8-info-val about8-link" href="https://instagram.com/inchx_interio" target="_blank" rel="noreferrer">
                      @inchx_interio
                    </a>
                  </div>
                </div>
              </div>

              <div className="about8-s1-right" aria-label="Work preview">
                <div className="about8-photo-frame">
                  <img src="/Images/about3.jpg" alt="Interior design and execution" />
                </div>
                <div className="about8-mini-row">
                  <div className="about8-mini">
                    <div className="about8-mini-top">Modular Kitchens</div>
                    <div className="about8-mini-sub">Clean storage, perfect fit</div>
                  </div>
                  <div className="about8-mini">
                    <div className="about8-mini-top">Facade Designing</div>
                    <div className="about8-mini-sub">Modern look, strong presence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s2" aria-label="Signature promise">
          <div className="about8-container">
            <div className="about8-s2-wrap">
              <div className="about8-s2-left">
                <h2 className="about8-h2 about8-h2-invert">Our Promise</h2>
                <div className="about8-underline about8-underline-invert" />
                <p className="about8-p about8-p-invert">
                  We keep it simple, we keep it clean. From 3D design to final handover, you get clear updates, quality materials,
                  and a finish that feels premium.
                </p>

                <div className="about8-tags">
                  <span className="about8-tag">Interior Designing</span>
                  <span className="about8-tag">3D Designing</span>
                  <span className="about8-tag">Planning</span>
                  <span className="about8-tag">Execution</span>
                  <span className="about8-tag">Modular Kitchens</span>
                </div>
              </div>

              <div className="about8-s2-right">
                <div className="about8-s2-card">
                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Design</div>
                      <div className="about8-s2-sub">3D visuals, layout planning, and material guidance.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Execution</div>
                      <div className="about8-s2-sub">Skilled work, clean edges, and tidy site handling.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Finishing</div>
                      <div className="about8-s2-sub">Premium look with long lasting quality.</div>
                    </div>
                  </div>

                  <div className="about8-s2-btm">
                    <a className="about8-btn about8-btn-solid" href="/contact">
                      Get in Touch
                    </a>
                    <a className="about8-btn about8-btn-outline" href="tel:+919393141224">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="about8-s2-note" aria-label="Short note">
                  <div className="about8-s2-note-top">EXCELLENCE AT YOUR DOORSTEP</div>
                  <div className="about8-s2-note-sub">
                    Residential and commercial interiors across AP, Telangana, and Karnataka.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s3" aria-label="Services snapshot">
          <div className="about8-container">
            <div className="about8-s3-head">
              <h2 className="about8-h2">What We Do</h2>
              <div className="about8-underline" />
              <p className="about8-p">
                End to end interior services, designed to look rich and stay easy to maintain.
              </p>
            </div>

            <div className="about8-s3-grid">
              <article className="about8-s3-card">
                <div className="about8-s3-kicker">01</div>
                <div className="about8-s3-title">Interior Designing</div>
                <div className="about8-s3-text">Style, layout, and a plan that fits your space.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">02</div>
                <div className="about8-s3-title">3D Designing</div>
                <div className="about8-s3-text">See the full look before we start the work.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">03</div>
                <div className="about8-s3-title">Modular Kitchens</div>
                <div className="about8-s3-text">Smart storage, clean finish, perfect functionality.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">04</div>
                <div className="about8-s3-title">Facade Designing</div>
                <div className="about8-s3-text">Modern elevation designs that stand out.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">05</div>
                <div className="about8-s3-title">Planning</div>
                <div className="about8-s3-text">Measurements, timelines, and clear deliverables.</div>
              </article>

              <article className="about8-s3-card">
                <div className="about8-s3-kicker">06</div>
                <div className="about8-s3-title">Execution</div>
                <div className="about8-s3-text">On site work with clean edges and neat finishing.</div>
              </article>
            </div>
          </div>
        </section>

        <section className="about8-s4" aria-label="Photo strip">
          <div className="about8-container">
            <div className="about8-s4-grid">
              <div className="about8-s4-copy">
                <h2 className="about8-h2 about8-h2-invert">Designed for Real Homes</h2>
                <div className="about8-underline about8-underline-invert" />
                <p className="about8-p about8-p-invert">
                  A premium space is not heavy design. It is clean lines, balanced layout, and finishing that feels calm.
                </p>

                <ul className="about8-list">
                  <li>
                    <span className="about8-check" />
                    Practical layout planning
                  </li>
                  <li>
                    <span className="about8-check" />
                    Clean edges and neat workmanship
                  </li>
                  <li>
                    <span className="about8-check" />
                    Material selection guidance
                  </li>
                  <li>
                    <span className="about8-check" />
                    Timely progress updates
                  </li>
                </ul>
              </div>

              <div className="about8-s4-photos" aria-label="Work previews">
                <div className="about8-s4-photo">
                  <img src="/Images/interior1.jpg" alt="Work preview 1" />
                </div>
                <div className="about8-s4-photo">
                  <img src="/Images/interior3.jpg" alt="Work preview 2" />
                </div>
                <div className="about8-s4-photo">
                  <img src="/Images/interior6.jpg" alt="Work preview 3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s5" aria-label="Contact">
          <div className="about8-container">
            <div className="about8-s5-grid">
              <div className="about8-s5-card">
                <h2 className="about8-h2">Contact</h2>
                <div className="about8-underline" />

                <div className="about8-contact">
                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Name</div>
                    <div className="about8-contact-val">Kalkinadh Oneness (Kanna)</div>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Phone</div>
                    <a className="about8-contact-val about8-link" href="tel:+919393141224">
                      +91 93931 41224
                    </a>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Email</div>
                    <a className="about8-contact-val about8-link" href="mailto:inchxinterio@gmail.com">
                      inchxinterio@gmail.com
                    </a>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-label">Alternate Email</div>
                    <a className="about8-contact-val about8-link" href="mailto:kalkinadh.g@gmail.com">
                      kalkinadh.g@gmail.com
                    </a>
                  </div>
                </div>

                <div className="about8-s5-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">
                    Send Message
                  </a>
                  <a className="about8-btn about8-btn-light" href="/services">
                    View Services
                  </a>
                </div>
              </div>

              <div className="about8-s5-card">
                <h2 className="about8-h2">Quick Note</h2>
                <div className="about8-underline" />
                <p className="about8-p">
                  Share your requirements and location, we will suggest a clean plan and the right materials for your budget.
                </p>

                <div className="about8-mapline">
                  <span className="about8-mapdot" />
                  <span>Fast response, clear quote, and neat site visits.</span>
                </div>

                <div className="about8-s5-photo">
                  <img src="/Images/theme.jpg" alt="Interior theme preview" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s6" aria-label="How we work">
          <div className="about8-container">
            <div className="about8-s6-head">
              <h2 className="about8-h2 about8-h2-invert">How We Work</h2>
              <div className="about8-underline about8-underline-invert" />
              <p className="about8-p about8-p-invert">
                A simple workflow that keeps everything clear, smooth, and on track.
              </p>
            </div>

            <div className="about8-steps">
              <div className="about8-step">
                <div className="about8-step-no">01</div>
                <div className="about8-step-title">Discuss</div>
                <div className="about8-step-text">We understand needs, style, and budget.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">02</div>
                <div className="about8-step-title">Design</div>
                <div className="about8-step-text">We create a plan and 3D visuals when needed.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">03</div>
                <div className="about8-step-title">Execute</div>
                <div className="about8-step-text">Neat work with clean edges and tidy site.</div>
              </div>
              <div className="about8-step">
                <div className="about8-step-no">04</div>
                <div className="about8-step-title">Handover</div>
                <div className="about8-step-text">Final checks and a finish that lasts.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s7" aria-label="Visiting card">
          <div className="about8-container">
            <div className="about8-card">
              <div className="about8-card-top">
                <div>
                  <div className="about8-card-brand">INCHX INTERIO</div>
                  <div className="about8-card-name">Kalkinadh Oneness (Kanna)</div>
                  <div className="about8-card-role">Interior Designing and Execution</div>
                </div>
                <div className="about8-card-mark" aria-hidden="true">
                  <span className="about8-mark-dot" />
                  <span className="about8-mark-dot" />
                  <span className="about8-mark-dot" />
                </div>
              </div>

              <div className="about8-card-mid">
                <div className="about8-card-col">
                  <div className="about8-card-label">Phone</div>
                  <a className="about8-card-val" href="tel:+919393141224">
                    +91 93931 41224
                  </a>
                </div>
                <div className="about8-card-col">
                  <div className="about8-card-label">Email</div>
                  <a className="about8-card-val" href="mailto:inchxinterio@gmail.com">
                    inchxinterio@gmail.com
                  </a>
                </div>
                <div className="about8-card-col">
                  <div className="about8-card-label">Instagram</div>
                  <a className="about8-card-val" href="https://instagram.com/inchx_interio" target="_blank" rel="noreferrer">
                    @inchx_interio
                  </a>
                </div>
              </div>

              <div className="about8-card-btm">
                <div className="about8-card-strip">
                  Interior Designing • 3D Designing • Modular Kitchens • Planning and Execution • Facade Designing
                </div>
                <a className="about8-card-cta" href="/contact">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s8" aria-label="Final call to action">
          <div className="about8-container">
            <div className="about8-final">
              <div className="about8-final-left">
                <h2 className="about8-final-title">Let’s Build a Clean, Premium Look</h2>
                <p className="about8-final-sub">
                  Tell us what you need, we will plan it clearly and finish it neatly.
                </p>
                <div className="about8-final-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">
                    Get in Touch
                  </a>
                  <a className="about8-btn about8-btn-light" href="/services">
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="about8-final-right" aria-label="Final image">
                <img src="/Images/about4.jpg" alt="Premium interior finish" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}