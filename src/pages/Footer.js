import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [openSections, setOpenSections] = useState({
    interiors: false,
    finishes: false,
    furnishings: false,
    designIdeas: false,
    magazine: false,
    tv: false
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const offerings = [
    {
      key: "interiors",
      title: "Interiors",
      items: [
        "Modular Interiors",
        "Full Home Interiors",
        "Luxury Interiors",
        "Livspace Kitchen",
        "Livspace Wardrobe",
        "Home Interior Price Calculator",
        "Modular Kitchen Price",
        "Wardrobe Price Calculator"
      ]
    },
    {
      key: "finishes",
      title: "Finishes",
      items: ["Handles", "Kitchen Cabinets", "Wardrobe Cabinets"]
    },
    {
      key: "furnishings",
      title: "Furnishings",
      items: ["Curtains", "Blinds", "Wallpapers", "Bedsheets & Comforters"]
    }
  ];

  const inspired = [
    {
      key: "designIdeas",
      title: "Design Ideas",
      items: [
        "Kitchen Designs",
        "Living Room Designs",
        "Bedroom Designs",
        "Kids Room Designs",
        "Wardrobe Designs",
        "Pooja Room Designs",
        "Dining Room Designs",
        "Foyer Room Designs",
        "Bathroom Designs",
        "Guest Bedroom Designs",
        "Home Office Designs",
        "Balcony Designs",
        "TV Unit Designs",
        "Modular Kitchen",
        "False Ceiling Designs",
        "Homes by Livspace",
        "Window Designs",
        "Flooring Designs",
        "Wall Decor Designs",
        "Wall Paint Designs",
        "Home Wallpaper Designs",
        "Tile Designs",
        "Study Room Designs",
        "Kitchen Sinks",
        "Space Saving Designs"
      ]
    },
    {
      key: "magazine",
      title: "Magazine",
      items: [
        "Room Ideas",
        "Decor & Inspiration",
        "Ceiling Design",
        "Furniture Ideas",
        "Home Decor",
        "Lighting Ideas",
        "Wall Design Ideas",
        "Expert Advice",
        "Interior Advice",
        "Vastu Tips",
        "Home Organisation",
        "Materials Guide",
        "Home Renovation Ideas"
      ]
    },
    {
      key: "tv",
      title: "Livspace TV",
      items: [
        "1BHK",
        "2BHK",
        "3BHK",
        "4BHK",
        "Kitchen Designs",
        "Bedroom Designs",
        "Living Room Designs",
        "Wardrobe Designs",
        "Design Inspiration",
        "Expert Advice",
        "Vastu Tips"
      ]
    }
  ];

  const company = [
    "How It Works",
    "Policies",
    "Terms and Conditions",
    "About Us",
    "Store Locator",
    "Privacy",
    "Own a Franchise",
    "Interior Designer",
    "Our Locations"
  ];

  return (
    <footer className="footer-final">
      <div className="footer-shell-final">
        <div className="footer-grid-final">
          <div className="footer-col-final footer-brand-final">
            <a href="/" className="footer-brand-link-final" aria-label="InchX Interio Home">
              <img className="brand-logo3-final" src="/Images/logo31.jpeg" alt="InchX Interio Logo" />
              <span className="brand-text-wrap-final">
                <span className="brand-title-final">InchX Interio</span>
                <span className="brand-subtitle-final">Excellence at your door step</span>
              </span>
            </a>

            <div className="brand-social-final" aria-label="Social media links">
              <a href="#" className="social-btn-final" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-btn-final" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-btn-final" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-btn-final" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>

            
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Offerings</h3>

            <div className="footer-dropdown-stack-final">
              {offerings.map((section) => (
                <div className="footer-drop-final" key={section.key}>
                  <button
                    type="button"
                    className="footer-drop-head-final"
                    onClick={() => toggleSection(section.key)}
                    aria-expanded={openSections[section.key]}
                  >
                    <span>{section.title}</span>
                    {openSections[section.key] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  <div className={`footer-drop-body-final ${openSections[section.key] ? "open" : ""}`}>
                    {section.items.map((item) => (
                      <a href="#" className="footer-link-final" key={item}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Get Inspired</h3>

            <div className="footer-dropdown-stack-final">
              {inspired.map((section) => (
                <div className="footer-drop-final" key={section.key}>
                  <button
                    type="button"
                    className="footer-drop-head-final"
                    onClick={() => toggleSection(section.key)}
                    aria-expanded={openSections[section.key]}
                  >
                    <span>{section.title}</span>
                    {openSections[section.key] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  <div className={`footer-drop-body-final ${openSections[section.key] ? "open" : ""}`}>
                    {section.items.map((item) => (
                      <a href="#" className="footer-link-final" key={item}>
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Company</h3>

            <div className="footer-simple-list-final">
              {company.map((item) => (
                <a href="#" className="footer-link-final" key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Contact Us</h3>

            <div className="contact-stack-final">
              <a href="tel:+919393141224" className="contact-link-final">
                <FaPhoneAlt />
                <span>+91 93931 41224</span>
              </a>

              <a href="mailto:kalkinadh.g@gmail.com" className="contact-link-final">
                <FaEnvelope />
                <span>kalkinadh.g@gmail.com</span>
              </a>

              <a href="mailto:inchxinterio@gmail.com" className="contact-link-final">
                <FaEnvelope />
                <span>inchxinterio@gmail.com</span>
              </a>

              <div className="contact-link-final contact-text-final">
                <FaMapMarkerAlt />
                <span>Andhra Pradesh, Telangana, Karnataka</span>
              </div>
            </div>

            <div className="contact-card-final">
              <span className="contact-card-title-final">Interior Designing</span>
              <span className="contact-card-text-final">Modular kitchens, 3D designing, planning and execution.</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-final">
          <p>© {new Date().getFullYear()} InchX Interio. All rights reserved.</p>

          <div className="footer-bottom-links-final">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;