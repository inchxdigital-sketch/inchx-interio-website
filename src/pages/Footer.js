import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => setOpenIndex(openIndex === index ? null : index);

  const quickLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Products", to: "/products" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  const services = useMemo(
    () => ["Interior Designing", "3D Designing", "Modular Kitchens", "Planning & Execution", "Facade Designing"],
    []
  );

  const locations = useMemo(() => ["Andhra Pradesh", "Telangana", "Karnataka"], []);

  const social = useMemo(
    () => [{ label: "Instagram", href: "https://www.instagram.com/inchx_interio", icon: <FaInstagram /> }],
    []
  );

  const address = "Andhra Pradesh, Telangana, Karnataka";

  const mobileSections = useMemo(
    () => [
      { title: "Quick Links", type: "links", items: quickLinks },
      { title: "Services", type: "text", items: services },
      { title: "Locations", type: "locations", items: locations },
      {
        title: "Contact",
        type: "contact",
        items: [
          { icon: <FaPhoneAlt />, label: "+91 9393141224", href: "tel:+919393141224" },
          { icon: <FaEnvelope />, label: "kalkinadh.g@gmail.com", href: "mailto:kalkinadh.g@gmail.com" },
          { icon: <FaEnvelope />, label: "inchxinterio@gmail.com", href: "mailto:inchxinterio@gmail.com" },
          { icon: <FaMapMarkerAlt />, label: address, href: "https://maps.google.com/?q=Andhra%20Pradesh" },
        ],
      },
    ],
    [address, quickLinks, services, locations]
  );

  return (
    <footer className="footer-final">
      <div className="footer-shell-final">
        <div className="footer-desktop-final">
          <div className="footer-col-final footer-brand-final">
            <div className="brand-stack-final">
              <img className="brand-logo3-final" src="/Images/logo31.jpeg" alt="Kalki's Inchx Interio" />
              <div className="brand-text-final">
                <h2 className="brand-title-final">KALKI&apos;S INCHX INTERIO</h2>
                <p className="brand-subtitle-final">Excellence at your door step</p>
              </div>
            </div>

            <div className="brand-owner-final">
              <div className="owner-badge-final">Managing Partner</div>
              <div className="owner-name-final">KALKINADH ONENESS (KANNA)</div>
            </div>

            <div className="brand-contact-final">
              <a className="footer-link-final" href="tel:+919393141224">
                <FaPhoneAlt />
                <span>+91 9393141224</span>
              </a>
              <a className="footer-link-final" href="mailto:kalkinadh.g@gmail.com">
                <FaEnvelope />
                <span>kalkinadh.g@gmail.com</span>
              </a>
              <a className="footer-link-final" href="mailto:inchxinterio@gmail.com">
                <FaEnvelope />
                <span>inchxinterio@gmail.com</span>
              </a>
              <a
                className="footer-link-final"
                href="https://maps.google.com/?q=Andhra%20Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt />
                <span>{address}</span>
              </a>
            </div>

            <div className="brand-social-final">
              {social.map((s) => (
                <a
                  key={s.label}
                  className="social-btn-final"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Quick Links</h3>
            <ul className="footer-list-final">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link className="footer-btn-final" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Services</h3>
            <ul className="footer-list-final">
              {services.map((t) => (
                <li key={t}>
                  <span className="footer-text-final">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Locations</h3>
            <ul className="footer-list-final">
              {locations.map((loc) => (
                <li key={loc}>
                  <span className="footer-text-final">{loc}</span>
                </li>
              ))}
              <li>
                <a
                  className="footer-btn-final footer-more-final"
                  href="https://maps.google.com/?q=Andhra%20Pradesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Map
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">What we do</h3>
            <div className="footer-card-final">
              <div className="card-line-final">
                <span className="dot-final" />
                <span>Complete home interiors with premium finishes</span>
              </div>
              <div className="card-line-final">
                <span className="dot-final" />
                <span>3D designs that match your taste and space</span>
              </div>
              <div className="card-line-final">
                <span className="dot-final" />
                <span>Planning to execution with on time delivery</span>
              </div>
              <div className="card-line-final">
                <span className="dot-final" />
                <span>Serving Andhra Pradesh, Telangana, Karnataka</span>
              </div>
              <div className="card-accent-final" />
            </div>

            <div className="footer-note-final">
              <div className="note-pill-final">INCHX_INTERIO</div>
              <div className="note-sub-final">Let’s design a space you’ll love to live in.</div>
            </div>
          </div>
        </div>

        <div className="footer-mobile-final">
          <div className="brand-stack-final brand-stack-mobile-final">
            <img className="brand-logo3-final" src="/Images/logo31.jpeg" alt="Kalki's Inchx Interio" />
            <div className="brand-text-final">
              <div className="brand-title-sm-final">KALKI&apos;S INCHX INTERIO</div>
              <div className="brand-subtitle-sm-final">Excellence at your door step</div>
            </div>
          </div>

          <div className="mobile-owner-final">
            <div className="owner-badge-final">Managing Partner</div>
            <div className="owner-name-final">KALKINADH ONENESS (KANNA)</div>
          </div>

          <div className="mobile-accordion-final">
            {mobileSections.map((sec, idx) => (
              <div className="acc-sec-final" key={sec.title}>
                <button
                  type="button"
                  className="acc-head-final"
                  onClick={() => toggleSection(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span>{sec.title}</span>
                  <span className="acc-icon-final">{openIndex === idx ? "−" : "+"}</span>
                </button>

                <div className={`acc-body-final ${openIndex === idx ? "open" : ""}`}>
                  {sec.type === "links" && (
                    <ul className="footer-list-final">
                      {sec.items.map((l) => (
                        <li key={l.label}>
                          <Link className="footer-btn-final" to={l.to} onClick={() => setOpenIndex(null)}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "text" && (
                    <ul className="footer-list-final">
                      {sec.items.map((t) => (
                        <li key={t}>
                          <span className="footer-text-final">{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "locations" && (
                    <ul className="footer-list-final">
                      {sec.items.map((loc) => (
                        <li key={loc}>
                          <span className="footer-text-final">{loc}</span>
                        </li>
                      ))}
                      <li>
                        <a
                          className="footer-btn-final footer-more-final"
                          href="https://maps.google.com/?q=Andhra%20Pradesh"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setOpenIndex(null)}
                        >
                          View on Map
                        </a>
                      </li>
                    </ul>
                  )}

                  {sec.type === "contact" && (
                    <div className="contact-stack-final">
                      {sec.items.map((c, i) => (
                        <a
                          key={i}
                          className="footer-link-final"
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                        >
                          {c.icon}
                          <span>{c.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="brand-social-final mobile-social-final">
            {social.map((s) => (
              <a
                key={s.label}
                className="social-btn-final"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom-final">
          <div className="footer-bottom-left-final">
            <span className="mini-dot-final" />
            <span>© {new Date().getFullYear()} KALKI&apos;S INCHX INTERIO</span>
          </div>

          <div className="footer-bottom-right-final">
            <span className="tag-final tag-gold-final">Andhra Pradesh</span>
            <span className="tag-final">Telangana</span>
            <span className="tag-final">Karnataka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;