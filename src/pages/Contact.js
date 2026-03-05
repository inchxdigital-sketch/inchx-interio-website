import React, { useRef, useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [phone, setPhone] = useState("");

  const mapLink = "https://maps.google.com/?q=Andhra%20Pradesh";
  const address = "Andhra Pradesh • Telangana • Karnataka";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent("Andhra Pradesh")}&output=embed`;

  const services = [
    "Interior Designing",
    "3D Designing",
    "Modular Kitchens",
    "Planning & Execution",
    "Facade Designing",
  ];

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const now = new Date();
    const submittedAt = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const timeInput = formRef.current?.querySelector('input[name="time"]');
    const sourceInput = formRef.current?.querySelector('input[name="source"]');
    const submittedAtInput = formRef.current?.querySelector('input[name="submitted_at"]');

    if (timeInput) timeInput.value = submittedAt;
    if (sourceInput) sourceInput.value = "Contact Page";
    if (submittedAtInput) submittedAtInput.value = submittedAt;

    setLoading(true);

    emailjs
      .sendForm("service_xj6kp6o", "template_gvzo194", formRef.current, "A3f67NO9h5O9f35Ls")
      .then(
        () => {
          setLoading(false);
          setPopupVisible(true);
          setPhone("");
          formRef.current?.reset();
        },
        () => {
          setLoading(false);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div>
      <Navbar />

      <main className="contact8" id="contact">
        <section className="contact8-hero" aria-label="Contact hero">
          <img className="contact8-hero-img" src="/Images/contact1.jpg" alt="Contact Kalki's INCHX INTERIO" />
          <div className="contact8-hero-overlay" />
          <div className="contact8-hero-content">
            <div className="contact8-hero-pill">KALKI&apos;S INCHX INTERIO</div>
            <h1 className="contact8-hero-title">Contact</h1>
            <p className="contact8-hero-sub">
              Excellence at your door step. Share your requirement, we will guide you clearly from design to finishing.
            </p>
            <div className="contact8-hero-badges" aria-label="Service regions">
              <span className="contact8-badge">Andhra Pradesh</span>
              <span className="contact8-badge">Telangana</span>
              <span className="contact8-badge">Karnataka</span>
            </div>
          </div>
        </section>

        <section className="contact8-s1" aria-label="Quick contact">
          <div className="contact8-container">
            <div className="contact8-head">
              <h2 className="contact8-h2">Quick Contact</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">Call, email, or message us. We respond fast and keep it simple.</p>
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

              <a className="contact8-card" href="https://instagram.com/inchx_interio" target="_blank" rel="noreferrer" aria-label="Instagram">
                <div className="contact8-card-kicker">Instagram</div>
                <div className="contact8-card-main">@inchx_interio</div>
                <div className="contact8-card-sub">Tap to open</div>
              </a>
            </div>
          </div>
        </section>

        <section className="contact8-s9" aria-label="Send message and map">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <h2 className="contact8-h2 contact8-h2-invert">Send a Message</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">Tell us what you need. We will contact you quickly.</p>
            </div>

            <div className="contact8-formmap">
              <div className="contact8-formwrap">
                <form ref={formRef} onSubmit={handleSubmit} className="contact8-form">
                  <input type="hidden" name="time" />
                  <input type="hidden" name="source" />
                  <input type="hidden" name="submitted_at" />

                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Name</label>
                      <input className="contact8-input" name="name" type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Phone</label>
                      <input
                        className="contact8-input"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter 10 digit mobile number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Email</label>
                      <input className="contact8-input" name="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Subject</label>
                      <input className="contact8-input" name="title" type="text" placeholder="Eg: Modular kitchen design" required />
                    </div>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Service</label>
                    <select className="contact8-input" name="category" defaultValue="" required>
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Message</label>
                    <textarea className="contact8-textarea" name="message" rows="5" placeholder="Tell us your requirement" required />
                  </div>

                  <button type="submit" className="contact8-submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>

                {popupVisible && (
                  <div className="contact8-popup">
                    <div className="contact8-popup-inner">
                      <h3 className="contact8-popup-title">Submitted Successfully</h3>
                      <p className="contact8-popup-text">Thank you. We will contact you soon.</p>
                      <button className="contact8-popup-btn" onClick={() => setPopupVisible(false)}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

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
          </div>
        </section>

        <section className="contact8-s2" aria-label="Service coverage">
          <div className="contact8-container">
            <div className="contact8-s2-grid">
              <div className="contact8-s2-left">
                <h2 className="contact8-h2 contact8-h2-invert">What We Do</h2>
                <div className="contact8-underline contact8-underline-invert" />
                <p className="contact8-p contact8-p-invert">
                  Interior work that looks premium and stays practical. Clear planning, neat execution, and finishing that feels rich.
                </p>

                <div className="contact8-tags">
                  <span className="contact8-tag">Interior Designing</span>
                  <span className="contact8-tag">3D Designing</span>
                  <span className="contact8-tag">Modular Kitchens</span>
                  <span className="contact8-tag">Planning & Execution</span>
                  <span className="contact8-tag">Facade Designing</span>
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
                    <div className="contact8-tile-top">Clean Execution</div>
                    <div className="contact8-tile-sub">Neat edges and tidy site handling</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Premium Finish</div>
                    <div className="contact8-tile-sub">Materials and details that last</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Clear Updates</div>
                    <div className="contact8-tile-sub">Timely progress and next steps</div>
                  </div>
                  <div className="contact8-tile">
                    <div className="contact8-tile-top">Custom Design</div>
                    <div className="contact8-tile-sub">Made to match your taste and space</div>
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
                  Led by <span className="contact8-strong">Kalkinadh Oneness (Kanna)</span>. Reach us anytime for a quick quote or consultation.
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

              <div className="contact8-s3-media" aria-label="Office photo">
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
                <div className="contact8-step-sub">Needs, style, and budget.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">02</div>
                <div className="contact8-step-title">Design</div>
                <div className="contact8-step-sub">Layout and 3D design when needed.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">03</div>
                <div className="contact8-step-title">Estimate</div>
                <div className="contact8-step-sub">Clear cost options and guidance.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">04</div>
                <div className="contact8-step-title">Execute</div>
                <div className="contact8-step-sub">Neat work and regular updates.</div>
              </div>
              <div className="contact8-step">
                <div className="contact8-step-no">05</div>
                <div className="contact8-step-title">Handover</div>
                <div className="contact8-step-sub">Final checks and finishing.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s8" aria-label="Final CTA">
          <div className="contact8-container">
            <div className="contact8-final">
              <div className="contact8-final-left">
                <h2 className="contact8-final-title">Let’s Start Your Project</h2>
                <p className="contact8-final-sub">Call now for quick guidance and the next steps.</p>
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