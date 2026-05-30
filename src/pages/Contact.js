import React, { useEffect, useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const [activeSlide, setActiveSlide] = useState(0);

  const mapLink = "https://maps.google.com/?q=Andhra%20Pradesh%20Telangana%20Karnataka%20Odisha%20India";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    "Andhra Pradesh Telangana Karnataka Odisha India"
  )}&output=embed`;

  const heroSlides = [
    {
      image: "/Images/contact1.jpg",
      title: "Contact",
      subtitle: "Premium interior design, modular kitchens, 3D planning, and clean execution for beautiful spaces."
    },
    {
      image: "/Images/contact-main-hero-2.jpg",
      title: "Design That Feels Personal",
      subtitle: "We understand your space, your lifestyle, and your taste before creating the right interior plan."
    },
    {
      image: "/Images/contact-main-hero-3.jpg",
      title: "From Idea To Handover",
      subtitle: "A clear process with practical planning, rich finishes, and smooth site execution."
    }
  ];

  const services = [
    "Interior Designing",
    "3D Designing",
    "Modular Kitchens",
    "Planning & Execution",
    "Facade Designing"
  ];

  const coverage = [
    {
      state: "Andhra Pradesh",
      status: "Active Service",
      text: "Design consultation, site planning, modular work, and execution support."
    },
    {
      state: "Telangana",
      status: "Active Service",
      text: "Home interiors, modular kitchens, wardrobes, and finishing guidance."
    },
    {
      state: "Karnataka",
      status: "Active Service",
      text: "Premium interior solutions with practical layouts and quality execution."
    },
    {
      state: "Odisha",
      status: "Active Service",
      text: "Interior consultation and project planning for homes and commercial spaces."
    },
    {
      state: "All Over India",
      status: "Expansion Plan",
      text: "We are planning to expand our services across India with the same design quality."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      <Navbar />

      <main className="contact8" id="contact">
        <section className="contact8-hero" aria-label="Contact hero slideshow">
          {heroSlides.map((slide, index) => (
            <div className={`contact8-hero-slide ${activeSlide === index ? "active" : ""}`} key={slide.image}>
              <img className="contact8-hero-img" src={slide.image} alt={slide.title} />
            </div>
          ))}

          <div className="contact8-hero-overlay" />

          <div className="contact8-hero-content">
            <div className="contact8-hero-pill">KALKI&apos;S INCHX INTERIO</div>
            <h1 className="contact8-hero-title">{heroSlides[activeSlide].title}</h1>
            <p className="contact8-hero-sub">{heroSlides[activeSlide].subtitle}</p>

            <div className="contact8-hero-badges" aria-label="Service regions">
              <span className="contact8-badge">Andhra Pradesh</span>
              <span className="contact8-badge">Telangana</span>
              <span className="contact8-badge">Karnataka</span>
              <span className="contact8-badge">Odisha</span>
              <span className="contact8-badge">Expanding Across India</span>
            </div>

            <div className="contact8-slide-dots" aria-label="Hero slideshow controls">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.image}
                  className={`contact8-slide-dot ${activeSlide === index ? "active" : ""}`}
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="contact8-s1" aria-label="Quick contact">
          <div className="contact8-container">
            <div className="contact8-head">
              <h2 className="contact8-h2">Quick Contact</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">Reach us for site visits, quotations, design discussions, or complete project planning.</p>
            </div>

            <div className="contact8-cards">
              <a className="contact8-card" href="tel:+919393141224" aria-label="Call us">
                <div className="contact8-card-kicker">Phone</div>
                <div className="contact8-card-main">+91 93931 41224</div>
                <div className="contact8-card-sub">Tap to call now</div>
              </a>

              <a className="contact8-card" href="mailto:inchxinterio@gmail.com" aria-label="Email us">
                <div className="contact8-card-kicker">Email</div>
                <div className="contact8-card-main">inchxinterio@gmail.com</div>
                <div className="contact8-card-sub">Tap to email</div>
              </a>

              <a
                className="contact8-card"
                href="https://instagram.com/inchx_interio"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <div className="contact8-card-kicker">Instagram</div>
                <div className="contact8-card-main">@inchx_interio</div>
                <div className="contact8-card-sub">Tap to open</div>
              </a>
            </div>
          </div>
        </section>

        <section className="contact8-s9" aria-label="Service coverage map">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <h2 className="contact8-h2 contact8-h2-invert">Where We Serve</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">
                We currently serve Andhra Pradesh, Telangana, Karnataka, and Odisha. We are also planning to expand our interior services across India.
              </p>
            </div>

            <div className="contact8-coverage-grid">
              <div className="contact8-coverage-left">
                

                <div className="contact8-mapwrap" aria-label="Google map">
                  <iframe
                    title="Service Locations"
                    src={mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a className="contact8-maplink" href={mapLink} target="_blank" rel="noreferrer">
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="contact8-coverage-right">
                {coverage.map((item) => (
                  <div className={`contact8-zone-card ${item.status === "Expansion Plan" ? "plan" : ""}`} key={item.state}>
                    <div className="contact8-zone-top">
                      <span className="contact8-zone-state">{item.state}</span>
                      <span className="contact8-zone-status">{item.status}</span>
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s2" aria-label="Service coverage">
          <div className="contact8-container">
            <div className="contact8-s2-grid">
              <div className="contact8-s2-left">
                <h2 className="contact8-h2 contact8-h2-invert">What We Do</h2>
                <div className="contact8-underline contact8-underline-invert" />
                <p className="contact8-p contact8-p-invert">
                  We create interiors that look premium, feel comfortable, and work practically for everyday living.
                </p>

                <div className="contact8-tags">
                  {services.map((service) => (
                    <span className="contact8-tag" key={service}>
                      {service}
                    </span>
                  ))}
                </div>

                <div className="contact8-s2-actions">
                  <a className="contact8-btn contact8-btn-solid" href="tel:+919393141224">
                    Call Now
                  </a>
                  <a className="contact8-btn contact8-btn-outline" href="mailto:inchxinterio@gmail.com">
                    Email Us
                  </a>
                </div>
              </div>

              <div className="contact8-s2-right">
                <div className="contact8-s2-tiles">
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Design Clarity</div>
                    <div className="contact8-tile-sub">Layouts, materials, colors, and finish plans made easy to understand.</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Premium Finish</div>
                    <div className="contact8-tile-sub">Rich detailing with clean edges, balanced textures, and practical materials.</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Site Planning</div>
                    <div className="contact8-tile-sub">Clear execution flow with measurements, timelines, and regular updates.</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Custom Work</div>
                    <div className="contact8-tile-sub">Solutions made for your space, taste, storage needs, and lifestyle.</div>
                  </div>
                </div>

                <div className="contact8-s2-photo">
                  <img src="/Images/theme.jpg" alt="Interior design preview" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s3" aria-label="Business details">
          <div className="contact8-container">
            <div className="contact8-s3-grid">
              <div className="contact8-s3-card">
                <h2 className="contact8-h2">Business Details</h2>
                <div className="contact8-underline" />
                <p className="contact8-p">
                  Led by <span className="contact8-strong">Kalkinadh Oneness (Kanna)</span>. Reach us for interiors, modular kitchens, 3D designs, and project execution.
                </p>

                <div className="contact8-info">
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Phone</div>
                    <div className="contact8-info-val">+91 93931 41224</div>
                  </div>
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Email</div>
                    <div className="contact8-info-val">inchxinterio@gmail.com</div>
                  </div>
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Alternate Email</div>
                    <div className="contact8-info-val">kalkinadh.g@gmail.com</div>
                  </div>
                  <div className="contact8-info-row">
                    <div className="contact8-info-label">Instagram</div>
                    <div className="contact8-info-val">@inchx_interio</div>
                  </div>
                </div>
              </div>

              <div className="contact8-s3-media" aria-label="Interior planning photo">
                <img src="/Images/contact2.jpg" alt="Interior planning and execution" />
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s4" aria-label="Project flow">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <h2 className="contact8-h2 contact8-h2-invert">Project Flow</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">A simple step-by-step flow so you always know what is next.</p>
            </div>

            <div className="contact8-steps">
              <div className="contact8-step">
                <div className="contact8-step-no">01</div>
                <div className="contact8-step-title">Discuss</div>
                <div className="contact8-step-sub">We understand your space, taste, needs, and budget.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">02</div>
                <div className="contact8-step-title">Design</div>
                <div className="contact8-step-sub">We plan the layout, look, materials, and 3D design when needed.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">03</div>
                <div className="contact8-step-title">Estimate</div>
                <div className="contact8-step-sub">You get clear cost options before starting the work.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">04</div>
                <div className="contact8-step-title">Execute</div>
                <div className="contact8-step-sub">Our team handles the site work with neat execution.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">05</div>
                <div className="contact8-step-title">Handover</div>
                <div className="contact8-step-sub">Final checks, finishing, and handover after completion.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s8" aria-label="Final call to action">
          <div className="contact8-container">
            <div className="contact8-final">
              <div className="contact8-final-left">
                <h2 className="contact8-final-title">Let’s Start Your Project</h2>
                <p className="contact8-final-sub">
                  Call us for interiors, modular kitchen designs, 3D planning, or complete execution support.
                </p>
              </div>
              <div className="contact8-final-right">
                <a className="contact8-btn contact8-btn-solid" href="tel:+919393141224">
                  Call Now
                </a>
                <a className="contact8-btn contact8-btn-outline-dark" href="mailto:inchxinterio@gmail.com">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}