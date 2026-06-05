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
      image: "/Images/contact4.jpg",
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
        <section className="contact8-hero-update" aria-label="Contact hero slideshow">
          {heroSlides.map((slide, index) => (
            <div
              className={`contact8-hero-slide-update ${activeSlide === index ? "active-update" : ""}`}
              key={slide.image}
            >
              <img className="contact8-hero-img-update" src={slide.image} alt={slide.title} />
            </div>
          ))}

          <div className="contact8-hero-overlay-update" />

          <div className="contact8-hero-content-update">
            <h1 className="contact8-hero-title-update">{heroSlides[activeSlide].title}</h1>

            <p className="contact8-hero-sub-update">{heroSlides[activeSlide].subtitle}</p>

            <div className="contact8-hero-badges-update" aria-label="Service regions">
              <span className="contact8-badge-update">Andhra Pradesh</span>
              <span className="contact8-badge-update">Telangana</span>
              <span className="contact8-badge-update">Karnataka</span>
              <span className="contact8-badge-update">Odisha</span>
              <span className="contact8-badge-update">Expanding Across India</span>
            </div>

            <div className="contact8-slide-dots-update" aria-label="Hero slideshow controls">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.image}
                  className={`contact8-slide-dot-update ${activeSlide === index ? "active-update" : ""}`}
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

        <section className="contact8-s2-final-update" aria-label="Service coverage">
  <div className="contact8-container-final-update">
    <div className="contact8-s2-grid-final-update">
      <div className="contact8-s2-left-final-update">
        <span className="contact8-s2-kicker-final-update">Interior Design Studio</span>

        <h2 className="contact8-h2-final-update contact8-h2-invert-final-update">
          What We Do
        </h2>

        <div className="contact8-underline-final-update contact8-underline-invert-final-update" />

        <p className="contact8-p-final-update contact8-p-invert-final-update">
          We design warm, elegant, and functional interiors that bring comfort, beauty, and personality into every corner of your space.
        </p>

        <div className="contact8-tags-final-update">
          {services.map((service) => (
            <span className="contact8-tag-final-update" key={service}>
              {service}
            </span>
          ))}
        </div>

        <div className="contact8-s2-actions-final-update">
          <a className="contact8-btn-final-update contact8-btn-solid-final-update" href="tel:+919393141224">
            Call Now
          </a>
          <a className="contact8-btn-final-update contact8-btn-outline-final-update" href="mailto:inchxinterio@gmail.com">
            Email Us
          </a>
        </div>
      </div>

      <div className="contact8-s2-right-final-update">
        <div className="contact8-s2-image-wrap-final-update">
          <img src="/Images/theme.jpg" alt="Interior design preview" />

          <div className="contact8-s2-image-label-final-update">
            <span className="contact8-s2-label-title-final-update">Premium Spaces</span>
            <span className="contact8-s2-label-text-final-update">Designed with clarity and care</span>
          </div>
        </div>

        <div className="contact8-s2-cards-final-update">
          <div className="contact8-tile-final-update">
            <span className="contact8-tile-no-final-update">01</span>
            <div className="contact8-tile-body-final-update">
              <div className="contact8-tile-top-final-update">Design Clarity</div>
              <div className="contact8-tile-sub-final-update">
                Layouts, materials, colors, and finishes explained clearly before work starts.
              </div>
            </div>
          </div>

          <div className="contact8-tile-final-update">
            <span className="contact8-tile-no-final-update">02</span>
            <div className="contact8-tile-body-final-update">
              <div className="contact8-tile-top-final-update">Elegant Finish</div>
              <div className="contact8-tile-sub-final-update">
                Balanced textures, clean detailing, and a premium look for modern spaces.
              </div>
            </div>
          </div>

          <div className="contact8-tile-final-update">
            <span className="contact8-tile-no-final-update">03</span>
            <div className="contact8-tile-body-final-update">
              <div className="contact8-tile-top-final-update">Smart Planning</div>
              <div className="contact8-tile-sub-final-update">
                Practical site planning with proper measurements, timelines, and updates.
              </div>
            </div>
          </div>

          <div className="contact8-tile-final-update">
            <span className="contact8-tile-no-final-update">04</span>
            <div className="contact8-tile-body-final-update">
              <div className="contact8-tile-top-final-update">Custom Work</div>
              <div className="contact8-tile-sub-final-update">
                Personalized solutions based on your taste, storage needs, and lifestyle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/*<section className="contact8-s3" aria-label="Business details">
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
        </section> */}

        <section className="contact8-s4-update" aria-label="Project flow">
  <div className="contact8-container-update">
    <div className="contact8-head-update contact8-head-invert-update">
      <span className="contact8-eyebrow-update">From idea to handover</span>
      <h2 className="contact8-h2-update contact8-h2-invert-update">Project Flow</h2>
      <div className="contact8-underline-update contact8-underline-invert-update" />
      <p className="contact8-p-update contact8-p-invert-update">
        A clear, elegant process designed to make every space feel planned, refined, and beautifully executed.
      </p>
    </div>

    <div className="contact8-steps-update">
      <div className="contact8-step-update">
        <div className="contact8-step-no-update">01</div>
        <div className="contact8-step-content-update">
          <div className="contact8-step-title-update">Discuss</div>
          <div className="contact8-step-sub-update">
            We understand your space, taste, lifestyle, requirements, and budget.
          </div>
        </div>
      </div>

      <div className="contact8-step-update">
        <div className="contact8-step-no-update">02</div>
        <div className="contact8-step-content-update">
          <div className="contact8-step-title-update">Design</div>
          <div className="contact8-step-sub-update">
            We shape the layout, materials, colours, finishes, and 3D concepts when needed.
          </div>
        </div>
      </div>

      <div className="contact8-step-update">
        <div className="contact8-step-no-update">03</div>
        <div className="contact8-step-content-update">
          <div className="contact8-step-title-update">Estimate</div>
          <div className="contact8-step-sub-update">
            You receive transparent cost options before the execution begins.
          </div>
        </div>
      </div>

      <div className="contact8-step-update">
        <div className="contact8-step-no-update">04</div>
        <div className="contact8-step-content-update">
          <div className="contact8-step-title-update">Execute</div>
          <div className="contact8-step-sub-update">
            Our team manages the site work with careful detailing and clean execution.
          </div>
        </div>
      </div>

      <div className="contact8-step-update">
        <div className="contact8-step-no-update">05</div>
        <div className="contact8-step-content-update">
          <div className="contact8-step-title-update">Handover</div>
          <div className="contact8-step-sub-update">
            Final finishing, quality checks, and handover after complete satisfaction.
          </div>
        </div>
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