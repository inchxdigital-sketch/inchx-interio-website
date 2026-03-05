import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();

  const isActive = useCallback(
    (path) => (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)),
    [location.pathname]
  );

  const handleLinkClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (y < 10) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
        setIsMobileOpen(false);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/about" },
      { name: "Contact Us", path: "/contact" },
    ],
    []
  );

  return (
    <>
      <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`} role="navigation" aria-label="Main">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={handleLinkClick} aria-label="Home">
            <img className="brand-logo1" src="/Images/logo31.jpeg" alt="Logo" />
          </Link>

          <div className="nav-links desktop-only" role="menubar" aria-label="Primary">
            {links.map((it) => (
              <Link
                key={it.name}
                to={it.path}
                onClick={handleLinkClick}
                className={`nav-link ${isActive(it.path) ? "active" : ""}`}
                role="menuitem"
                aria-current={isActive(it.path) ? "page" : undefined}
              >
                <span className="nav-link-label">{it.name}</span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="nav-burger mobile-only"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((s) => !s)}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="nav-glow" aria-hidden="true" />
      </nav>

      <div className={`mobile-sheet ${isMobileOpen ? "open" : ""}`} aria-hidden={!isMobileOpen}>
        <div className="mobile-sheet-head">
          <div className="mobile-title">Menu</div>
          <button type="button" className="mobile-close" aria-label="Close menu" onClick={() => setIsMobileOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="mobile-links">
          {links.map((it) => (
            <Link
              key={it.name}
              to={it.path}
              onClick={handleLinkClick}
              className={`mobile-link ${isActive(it.path) ? "active" : ""}`}
              aria-current={isActive(it.path) ? "page" : undefined}
            >
              <span className="mobile-link-label">{it.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`mobile-backdrop ${isMobileOpen ? "open" : ""}`}
        onClick={() => setIsMobileOpen(false)}
        role="button"
        tabIndex={-1}
        aria-label="Close menu backdrop"
      />
    </>
  );
}

export default Navbar;