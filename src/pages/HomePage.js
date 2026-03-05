import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaHome, FaBuilding, FaRegBuilding } from "react-icons/fa";

function HomePage() {
  const slides = Array.from({ length: 8 }, (_, i) => `/Images/interior${i + 1}.jpg`);

  return (
    <>
      <Navbar />
      <main className="home">

        <section className="hero-section">
          <div className="image-container">
            <img src="/Images/house1.jpg" alt="Admin Image 1" className="image1" />
            <img src="/Images/house2.jpg" alt="Admin Image 2" className="image2" />
          </div>

          <div className="text-container">
            <h6 className="small-text">KALKI'S</h6>
            <h1 className="crafted-text">Crafted By You</h1>
            <h1 className="built-text">Built By Us</h1>
            <h4 className="description-title">Excellence aat your door step</h4>
            <p className="description-text">
              From cozy corners to grand entrances , personalize every room to match your lifestyle.
            </p>
          </div>
        </section>

        <section className="services-sec" aria-label="Services we provide">
          <div className="services-inner">
            <div className="services-head">
              <h2 className="services-title">Services We Provide</h2>
              <div className="services-underline" />
              <p className="services-sub">Design that looks premium, planning that feels simple, execution that stays clean.</p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-1.jpg" alt="Interior designing" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Interior Designing</h3>
                  <p className="service-p">Layouts, colours, materials, and styling for homes and workspaces.</p>
                  <ul className="service-list">
                    <li>Concept to final look</li>
                    <li>Material selection</li>
                    <li>Functional layouts</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-2.jpg" alt="3D designing" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">3D Designing</h3>
                  <p className="service-p">Realistic views to visualize and finalize before execution.</p>
                  <ul className="service-list">
                    <li>3D views</li>
                    <li>Multiple revisions</li>
                    <li>Clarity before build</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-3.jpg" alt="Modular kitchens" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Modular Kitchens</h3>
                  <p className="service-p">Storage smart modules with clean fitting and premium finish.</p>
                  <ul className="service-list">
                    <li>Storage planning</li>
                    <li>Neat alignment</li>
                    <li>Easy maintenance</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-4.jpg" alt="Planning and execution" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Planning & Execution</h3>
                  <p className="service-p">Smooth process from measurement to installation and handover.</p>
                  <ul className="service-list">
                    <li>Site visit</li>
                    <li>Timeline planning</li>
                    <li>On site coordination</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-5.jpg" alt="Facade designing" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Facade Designing</h3>
                  <p className="service-p">Modern elevation concepts with balanced proportions and materials.</p>
                  <ul className="service-list">
                    <li>Elevation concepts</li>
                    <li>Material combinations</li>
                    <li>Day and night look</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-6.jpg" alt="Ceiling and lighting" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Ceiling & Lighting</h3>
                  <p className="service-p">False ceiling design with lighting placement for warm ambience.</p>
                  <ul className="service-list">
                    <li>Ceiling design</li>
                    <li>Lighting layout</li>
                    <li>Clean finishing</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="hero" aria-label="Main banner">
          <img className="hero-img" src="/Images/main-banner3.jpg" alt="Kalki's Inchx Interio banner" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <img className="hero-logo" src="/Images/logo31.jpeg" alt="Kalki's Inchx Interio logo" />
            </div>

            <h1 className="hero-title">
              Interiors That Feel
              <br />
              Like Home
            </h1>

            <p className="hero-subtitle">
              From concept to finish, we design spaces that look premium and live better.

              Smart layouts, elegant materials, warm lighting, and clean <br />detailing.

              Made for your routine, your comfort, and your style.
            </p>
          </div>
        </section>



        <section className="split-banner-section" aria-label="Explore categories">
          <div className="split-banner-inner">
            <div className="split-head">
              <h2 className="split-title">Explore Our Interior Collections</h2>
              <div className="split-underline" />
              <p className="split-sub">
                Materials and finishes curated for modern homes, premium looks, and clean detailing.
              </p>
            </div>

            <div className="split-body">
              <div className="split-left">
                <img src="/Images/featured.jpg" alt="Featured interior collection" />
              </div>

              <div className="split-right">
                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right.jpg" alt="Luxury Living Room" />
                  </div>
                  <p className="split-right-text">Luxury Living Room</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right1.jpg" alt="Modular Kitchen" />
                  </div>
                  <p className="split-right-text">Modular Kitchen</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right2.jpg" alt="Facade Design" />
                  </div>
                  <p className="split-right-text">Facade Design</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right3.jpg" alt="Bed Room Design" />
                  </div>
                  <p className="split-right-text">Bed Room Design</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right4.jpg" alt="Ceiling Design" />
                  </div>
                  <p className="split-right-text">Ceiling Design</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right5.jpg" alt="Lighting design" />
                  </div>
                  <p className="split-right-text">Lighting design</p>
                </Link>
              </div>
            </div>
          </div>
        </section>




        <section className="home-part-grid" aria-label="Highlights">
          <div className="home-part-inner">
            <div className="home-part-card">
              <img src="/Images/grid7.jpg" alt="Interior designing" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">INTERIOR DESIGNING</h3>
              <Link to="/services" className="home-part-btn">View Details →</Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid10.jpg" alt="3D designing" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">3D DESIGNING</h3>
              <Link to="/services" className="home-part-btn">View Details →</Link>
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">MODULAR KITCHENS</h3>
              <Link to="/services" className="home-part-btn">View Details →</Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid8.jpg" alt="Modular kitchens" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">PLANNING & EXECUTION</h3>
              <Link to="/services" className="home-part-btn">View Details →</Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid9.jpg" alt="Planning and execution" className="home-part-img" />
            </div>
          </div>
        </section>







        <section className="visit-card" aria-label="Visiting card">
          <div className="visit-card-inner">
            <h2 className="visit-card-title">Kalki&apos;s Inchx Interio</h2>

            <div className="visit-card-body">
              <div className="visit-card-left">
                <div className="visit-card-brand">Interior designing, 3D designing, planning and execution</div>
                <div className="visit-card-tagline">Excellence at your door step, built with detail, comfort, and clean finishing.</div>

                <div className="visit-card-points">
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Space planning that improves flow and usability</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">3D designs to visualize before execution</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">Premium materials with neat detailing and alignment</span>
                  </div>
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">On time delivery with smooth coordination</span>
                  </div>
                </div>

                <div className="visit-card-footer">
                  <div className="visit-card-line">
                    <span className="visit-card-label">Phone</span>
                    <span className="visit-card-value">+91 93931 41224</span>
                  </div>
                  <div className="visit-card-line">
                    <span className="visit-card-label">Email</span>
                    <span className="visit-card-value">kalkinadh.g@gmail.com</span>
                  </div>
                  <div className="visit-card-line">
                    <span className="visit-card-label">Email</span>
                    <span className="visit-card-value">inchxinterio@gmail.com</span>
                  </div>
                  <div className="visit-card-line">
                    <span className="visit-card-label">Region</span>
                    <span className="visit-card-value">Andhra Pradesh, Telangana, Karnataka</span>
                  </div>
                </div>
              </div>

              <div className="visit-card-right" aria-label="Visiting card image">
                <img className="visit-card-img" src="/Images/visiting-card1.jpg" alt="Kalki's Inchx Interio visiting card" />
                <div className="visit-card-frame" />
              </div>
            </div>
          </div>
        </section>

        <section className="three-clock-section">
          <div className="three-clock-grid">
            <div className="three-clock-card">
              <img
                src="/Images/clock1.jpg"
                alt="Interior design service"
                className="three-clock-img"
              />
              <div className="three-clock-overlay" />
              <div className="three-clock-content">
                <h3 className="three-clock-title">Interior Designing</h3>
                <p className="three-clock-desc">
                  Thoughtful, elegant interiors tailored to your lifestyle, space, and budget.
                </p>
                <Link to="/services" className="three-clock-btn">Explore Services →</Link>
              </div>
            </div>

            <div className="three-clock-card three-clock-center">
              <img
                src="/Images/clock2.jpg"
                alt="Design showcase"
                className="three-clock-img"
              />
              <div className="three-clock-overlay" />
            </div>

            <div className="three-clock-card">
              <img
                src="/Images/clock3.jpg"
                alt="Execution and modular kitchen service"
                className="three-clock-img"
              />
              <div className="three-clock-overlay" />
              <div className="three-clock-content">
                <h3 className="three-clock-title">Planning & Execution</h3>
                <p className="three-clock-desc">
                  End to end execution with clear timelines, quality finishes, and zero chaos.
                </p>
                <Link to="/contact" className="three-clock-btn">Get a Quote →</Link>
              </div>
            </div>
          </div>
        </section>


        <section className="signature-sec">
          <div className="signature-inner">
            <div className="signature-head">
              <p className="signature-kicker">INCHX INTERIO</p>
              <h2 className="signature-title">Design. Detail. Delivery.</h2>
              <p className="signature-sub">
                From concept to execution, we craft interiors that feel premium, practical, and truly yours.
              </p>
            </div>

            <div className="signature-grid">
              <article className="signature-card">
                <div className="signature-media">
                  <img src="/Images/services-1.jpg" alt="Interior designing" />
                  <div className="signature-overlay" />
                  <div className="signature-chip">Interior Designing</div>
                </div>
                <div className="signature-body">
                  <h3 className="signature-h">Spaces that feel right</h3>
                  <p className="signature-p">
                    Layouts, materials, lighting, and styling designed around your daily life and taste.
                  </p>
                  <ul className="signature-list">
                    <li>Living, bedrooms, and pooja rooms</li>
                    <li>False ceiling and lighting plan</li>
                    <li>Color palette and material selection</li>
                  </ul>
                </div>
              </article>

              <article className="signature-card signature-featured">
                <div className="signature-media">
                  <img src="/Images/final2.jpg" alt="Premium interior showcase" />
                  <div className="signature-overlay signature-overlay-strong" />
                  <div className="signature-featured-content">
                    <h3 className="signature-featured-title">Excellence at your doorstep</h3>
                    <p className="signature-featured-desc">
                      Clear planning, clean finishes, and on-time delivery across Andhra Pradesh, Telangana, and Karnataka.
                    </p>
                  </div>
                </div>
              </article>

              <article className="signature-card">
                <div className="signature-media">
                  <img src="/Images/services-5.jpg" alt="Planning and execution" />
                  <div className="signature-overlay" />
                  <div className="signature-chip">Planning & Execution</div>
                </div>
                <div className="signature-body">
                  <h3 className="signature-h">Smooth execution, zero stress</h3>
                  <p className="signature-p">
                    We manage vendors, timelines, and finishing quality, so you get a perfect handover.
                  </p>
                  <ul className="signature-list">
                    <li>Site measurement and project plan</li>
                    <li>Work schedule with milestones</li>
                    <li>Final inspection and finishing checks</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="grid-section" aria-label="Highlights grid">
          <div className="grid-wrap">
            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid1.jpg" alt="Custom interior finishes" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Premium Finishes</h4>
              <p className="grid-copy">
                Clean lines, rich textures, and flawless fitting, designed to elevate every corner of your home.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid2.jpg" alt="Material selection and styling" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Smart Selection</h4>
              <p className="grid-copy">
                We help you choose the right materials and colours for your space, lifestyle, and budget.
              </p>
            </div>

            <div className="grid-item grid-title">
              <h2 className="grid-title-text">
                Kalki's <br />
                Inchx <br />
                Interio
              </h2>
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">On Time Delivery</h4>
              <p className="grid-copy">
                From planning to installation, we keep it smooth and on schedule, without last minute surprises.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid3.jpg" alt="Detailed workmanship" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Detail Driven</h4>
              <p className="grid-copy">
                Perfect edges, balanced layouts, and finishing touches that make your interiors look complete.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid4.jpg" alt="Modern interior styling" />
            </div>
          </div>
        </section>

        <section className="choose" aria-label="Why choose us">
          <div className="choose-inner">
            <div className="choose-grid">
              <div className="choose-left">
                <div className="choose-mosaic">
                  <div className="choose-col choose-col-split">
                    <div className="choose-media">
                      <img src="/Images/why-choose4.jpg" alt="Premium finish details" />
                    </div>
                    <div className="choose-media">
                      <img src="/Images/why-choose5.jpg" alt="Modern interior styling" />
                    </div>
                  </div>

                  <div className="choose-col">
                    <div className="choose-media choose-media-tall">
                      <img src="/Images/why-choose6.jpg" alt="Trusted interior execution" />
                      <div className="choose-tag">Trusted Execution</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-right">
                <div className="choose-head">
                  <h2 className="choose-title">Why Choose Kalki&apos;s Inchx Interio</h2>
                  <div className="choose-underline" />
                  <p className="choose-desc">
                    Interiors should look premium and feel comfortable every day. <br />
                    We plan smart, execute clean, and finish with detail. <br />
                    Simple process, clear timelines, and honest guidance.
                  </p>
                </div>

                <ul className="choose-points">
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Space planning that improves flow and usability</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">3D designs so you can visualize before we build</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Premium materials with clean, skilled workmanship</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Neat finishing with attention to edges and alignment</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">On time delivery with smooth coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-band" aria-label="Theme banner">
          <img className="theme-band-img" src="/Images/theme.jpg" alt="Inchx Interio theme" />

          <h2 className="theme-band-title">INCHX INTERIO</h2>

          <div className="theme-band-left">
            <div className="theme-band-stack">
              Excellence <br /> At Your <br /> Doorstep
            </div>
            <p className="theme-band-desc">
              Interior designing, 3D design, modular kitchens, and end to end execution with premium finishing across Andhra Pradesh, Telangana, and Karnataka.
            </p>
          </div>

          <div className="theme-band-icons" aria-label="Design features">
            <FaHome />
            <FaBuilding />
            <FaRegBuilding />
          </div>
        </section>

        <section className="promise" aria-label="Why choose Inchx Interio">
          <div className="promise-inner">
            <header className="promise-head">
              <div className="promise-badge">Why Choose Us</div>
              <h2 className="promise-title">Premium finish, practical design, on-time delivery.</h2>
              <p className="promise-subtitle">
                Clean workmanship, trusted materials, and clear updates, from the first design to the final handover.
              </p>
            </header>

            <div className="promise-grid">
              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Design Support</h3>
                </div>
                <p className="promise-card-text">
                  Practical design decisions that look premium and work perfectly for everyday living.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Space planning and layout</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Color and material matching</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Lighting and finishing ideas</span>
                  </div>
                </div>
              </article>

              <article className="promise-card promise-card-featured">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Quality First</h3>
                </div>
                <p className="promise-card-text">
                  Strong materials and neat execution, so your interiors stay beautiful and last longer.
                </p>
                <div className="promise-metrics">
                  <div className="promise-metric">
                    <div className="promise-metric-value">A+</div>
                    <div className="promise-metric-label">Finish</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">0</div>
                    <div className="promise-metric-label">Shortcuts</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">100%</div>
                    <div className="promise-metric-label">Support</div>
                  </div>
                </div>
              </article>

              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">On-Time Delivery</h3>
                </div>
                <p className="promise-card-text">
                  Clear timelines and regular updates to keep the work smooth and stress-free.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Transparent schedules</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Quick update sharing</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Clean handover process</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-hero" aria-label="Call to action banner">
          <img className="cta-hero-img" src="/Images/main-banner2.jpg" alt="Inchx Interio banner" />
          <div className="cta-hero-overlay" />
          <div className="cta-hero-content">
            <h2 className="cta-hero-title">Excellence at Your Doorstep</h2>
            <p className="cta-hero-subtitle">Premium interiors, clean execution, and support you can count on.</p>

            <div className="cta-hero-actions">
              <Link to="/contact" className="cta-btn">
                <span>Get a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>

              <Link to="/services" className="cta-btn cta-btn-secondary">
                <span>View Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
