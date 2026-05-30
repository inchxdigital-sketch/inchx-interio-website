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

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const links = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/about" },
      { name: "Contact Us", path: "/contact" }
    ],
    []
  );

  return (
    <>
      <nav className={`navbar ${hidden ? "navbar-hidden" : ""}`} role="navigation" aria-label="Main">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={handleLinkClick} aria-label="InchX Interio Home">
            <img className="brand-logo1" src="/Images/logo31.jpeg" alt="InchX Interio Logo" />
            <span className="brand-copy">
              <span className="brand-name">InchX Interio</span>
              <span className="brand-tagline">Excellence at your door step</span>
            </span>
          </Link>

          <div className="nav-links desktop-only" role="menubar" aria-label="Primary">
            {links.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`nav-link ${active ? "active" : ""}`}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="nav-burger mobile-only"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((state) => !state)}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className={`mobile-backdrop ${isMobileOpen ? "open" : ""}`} onClick={() => setIsMobileOpen(false)} />

      <div className={`mobile-sheet ${isMobileOpen ? "open" : ""}`} aria-hidden={!isMobileOpen}>
        <div className="mobile-sheet-head">
          <Link to="/" className="mobile-brand" onClick={handleLinkClick} aria-label="InchX Interio Home">
            <img className="mobile-brand-logo" src="/Images/logo31.jpeg" alt="InchX Interio Logo" />
            <span>InchX Interio</span>
          </Link>

          <button type="button" className="mobile-close" aria-label="Close menu" onClick={() => setIsMobileOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="mobile-links">
          {links.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`mobile-link ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;