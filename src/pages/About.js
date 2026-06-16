import { useState } from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {

   const [showFullAbout, setShowFullAbout] = useState(false);

    const [expandedFounder, setExpandedFounder] = useState({
    kanna: false,
    hari: false,
  });

  const philosophyCards = [
  {
    number: "",
    title: "Crafting Unique Identities",
    icon: "/Images/copy1.jpg",
    text: "We believe every space and every client carries a distinct story. Our design philosophy begins with understanding these individual narratives and translating them into bespoke environments. Each project is thoughtfully crafted to reflect personality, purpose, and lifestyle, turning ideas into meaningful spatial expressions."
  },
  {
    number: "",
    title: "Evocative Experiences",
    icon: "/Images/copy2.jpg",
    text: "Our approach goes beyond visual aesthetics. We focus on creating immersive environments that engage the senses and emotions of those who inhabit them. Every detail is designed to evoke comfort, connection, and experience, ensuring that spaces leave a lasting emotional imprint."
  },
  {
    number: "",
    title: "Timelessness and Modernity",
    icon: "/Images/copy3.jpg",
    text: "We design with longevity in mind. Our spaces are rooted in timeless principles of proportion, harmony, and elegance, while embracing modern functionality and evolving lifestyles. The result is design that remains relevant, refined, and enduring across time."
  },
  {
    number: "",
    title: "Elevating Everyday Living",
    icon: "/Images/copy4.jpg",
    text: "At INCHX INTERIO, we believe luxury is not just appearance, it is experience, comfort, and detail. Through careful planning, refined materials, and precise execution, we elevate everyday spaces into environments that feel purposeful, elegant, and complete."
  }
];
  return (
    <div>
      <Navbar />

      <main className="about8">
        <section className="about-main-hero-image-section">
          <img
            src="/Images/about-main-hero-5.png"
            alt="About InchX Interio"
            className="about-main-hero-image"
          />
        </section>

        {/*<section className="about8-hero" aria-label="About hero">
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
        </section> */}

 

 
    <section className="about-simple-section" aria-label="About INCHX INTERIO">
      <div className="about-simple-inner">
        <header className="about-simple-head">
          <span className="about-simple-label">About INCHX INTERIO</span>
          <h2 className="about-simple-title">
            A young and dynamic interior design studio built on precision, creativity, and execution.
          </h2>
        </header>

        <div className="about-simple-highlights">
          <div className="about-simple-highlight">
            <span className="about-simple-highlight-value">2022</span>
            <span className="about-simple-highlight-text">Founded</span>
          </div>

          <div className="about-simple-highlight">
            <span className="about-simple-highlight-value">Global</span>
            <span className="about-simple-highlight-text">Design Exposure</span>
          </div>

          <div className="about-simple-highlight">
            <span className="about-simple-highlight-value">BNI</span>
            <span className="about-simple-highlight-text">Industry Association</span>
          </div>

          <div className="about-simple-highlight">
            <span className="about-simple-highlight-value">360°</span>
            <span className="about-simple-highlight-text">Design & Execution</span>
          </div>
        </div>

        <div className={`about-simple-content ${showFullAbout ? "is-expanded" : ""}`}>
          <p>
            Founded on 12th December 2022, INCHX INTERIO is a young and dynamic interior design and execution studio driven by ambition, precision, and creativity. Built on a shared vision between two passionate professionals, an Executive Diploma holder in Interior Designing and a Civil Engineer with international exposure in the United States, the studio brings together design sensibility and technical excellence under one roof.
          </p>

          <p>
            From the very beginning, INCHX INTERIO has focused on delivering thoughtfully crafted spaces that balance aesthetics, functionality, and structural integrity. With expertise across both commercial and domestic sectors, the studio has successfully executed a growing portfolio of projects that reflect innovation, attention to detail, and client-centric design solutions.
          </p>

          {!showFullAbout && (
            <div className="about-simple-fade">
              <button
                type="button"
                className="about-simple-read-btn"
                onClick={() => setShowFullAbout(true)}
                aria-expanded={showFullAbout}
              >
                Read More
                <span>→</span>
              </button>
            </div>
          )}

          {showFullAbout && (
            <div className="about-simple-more">
              <p>
                Working closely with interior vendors, contractors, and execution partners, the firm has built strong collaborations across the industry, enabling seamless delivery of turnkey and design-build projects. This collaborative ecosystem has allowed INCHX INTERIO to contribute to a diverse range of residential interiors, commercial spaces, and customized design executions with consistency and quality.
              </p>

              <p>
                As part of continuous learning and global exposure, the team has traveled to Dubai, China, Thailand, and other international destinations, exploring design innovation, materials, and architectural practices to bring global standards into local execution. These experiences help the studio understand diverse architectural styles, material innovations, and execution techniques, which are thoughtfully integrated into its projects.
              </p>

              <p>
                Over a short span, the studio has received appreciation from leading industry partners, including recognition from one of India&apos;s largest plywood companies with a strong international presence in Dubai. These acknowledgements stand as a testament to the firm&apos;s commitment to quality, reliability, and design excellence.
              </p>

              <p>
                INCHX INTERIO is also proudly associated with BNI, further strengthening its presence within the architecture and design community and enabling stronger industry collaboration and visibility.
              </p>

              <p>
                The founders have actively participated in several design, architecture, and entrepreneurship conferences across Mumbai, Bangalore, and Hyderabad, gaining valuable exposure to evolving global design trends, construction technologies, and innovative material applications. This continuous engagement with the industry has helped shape a forward-thinking and adaptable design approach.
              </p>

              <p>
                The journey of INCHX INTERIO as emerging entrepreneurs was further recognized when the founders were invited by GMR Deemed to be University on the occasion of World Entrepreneur Day, where they were honored as young entrepreneurs for their contribution to the design and construction field.
              </p>

              

              <p>
                INCHX INTERIO has also received multiple testimonials, appreciations, and acknowledgements from clients, vendors, and partner companies, reinforcing its dedication to delivering excellence in every project, from concept to completion.
              </p>

              <p>
                With a strong technical backbone led by a civil engineer based in the USA holding a master&apos;s degree and international experience, INCHX INTERIO blends global engineering standards with practical on-ground execution capabilities.
              </p>

              <p>
                At its core, INCHX INTERIO is committed to transforming spaces through intelligent planning, refined detailing, and uncompromising execution, creating environments that are not only visually compelling but also structurally efficient, functional, and enduring.
              </p>

              <div className="about-simple-actions">
                <button
                  type="button"
                  className="about-simple-read-btn about-simple-read-btn-light"
                  onClick={() => setShowFullAbout(false)}
                  aria-expanded={showFullAbout}
                >
                  Show Less
                  <span>↑</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>



 

    <section className="founders-update" aria-label="Founders of INCH X INTERIO">
      <div className="founders-inner-update">
        <header className="founders-head-update">
          <span className="founders-label-update">Leadership</span>
          <h2 className="founders-title-update">Meet the Founders</h2>
          <p className="founders-subtitle-update">
            The people behind INCHX INTERIO, bringing together design vision, technical strength, and execution excellence.
          </p>
        </header>

        <div className="founders-grid-update">
          <article className={`founder-card-update ${expandedFounder.kanna ? "is-expanded" : ""}`}>
            <div className="founder-image-wrap-update">
              <img
                src="/Images/kalki3.jpeg"
                alt="Kalkinadh Oneness Kanna"
                className="founder-image-update"
              />
            </div>

            <div className="founder-content-update">
              <span className="founder-tag-update">Founder & Principal Designer</span>
              <h3 className="founder-name-update">Kalkinadh Oneness (Kanna)</h3>

              <p className="founder-text-update">
                Kalkinadh Oneness (Kanna) is the Founder and Principal Designer of INCHX INTERIO, a design and execution studio dedicated to transforming ideas into thoughtfully crafted spaces that balance functionality, aesthetics, and precision.
              </p>

              <p className="founder-text-update">
                With a diverse academic background that includes a Bachelor&apos;s degree and an MBA, he brings a strong foundation in both business understanding and creative thinking. Driven by a passion for spatial design, he further pursued an Executive Diploma in Interior Designing, formally stepping into the field of interiors with a clear vision to build meaningful and experience-driven spaces.
              </p>

              {!expandedFounder.kanna && (
                <div className="founder-read-wrap-update">
                  <button
                    type="button"
                    className="founder-read-btn-update"
                    onClick={() =>
                      setExpandedFounder((prev) => ({
                        ...prev,
                        kanna: true,
                      }))
                    }
                    aria-expanded={expandedFounder.kanna}
                  >
                    Read More
                    <span>→</span>
                  </button>
                </div>
              )}

              {expandedFounder.kanna && (
                <div className="founder-more-update">
                  <p className="founder-text-update">
                    Kanna is deeply involved in every stage of the project journey, from initial client interaction and concept development to design execution and final handover. He is the key point of contact for clients, ensuring smooth communication, clarity, and accessibility throughout the entire process.
                  </p>

                  <p className="founder-text-update">
                    He plays a central role in translating client visions into reality, overseeing design direction, spatial planning, and the development of 2D layouts and 3D visualizations. His hands-on approach ensures that every project moves seamlessly from concept to execution with attention to detail and design intent.
                  </p>

                  <p className="founder-text-update">
                    Known for his client-centric approach, Kanna focuses on understanding each client&apos;s lifestyle, needs, and aspirations, shaping them into personalized design solutions. Through his leadership, INCHX INTERIO continues to deliver spaces that are visually refined, practical, functional, and aligned with the client&apos;s vision from concept to completion.
                  </p>

                  <div className="founder-action-update">
                    <button
                      type="button"
                      className="founder-read-btn-update founder-read-btn-light-update"
                      onClick={() =>
                        setExpandedFounder((prev) => ({
                          ...prev,
                          kanna: false,
                        }))
                      }
                      aria-expanded={expandedFounder.kanna}
                    >
                      Show Less
                      <span>↑</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </article>

          <article className={`founder-card-update ${expandedFounder.hari ? "is-expanded" : ""}`}>
            <div className="founder-image-wrap-update">
              <img
                src="/Images/hari.jpeg"
                alt="Hari Krishna Boddu"
                className="founder-image-update"
              />
            </div>

            <div className="founder-content-update">
              <span className="founder-tag-update">Co-Founder & Principal Engineer</span>
              <h3 className="founder-name-update">Hari Krishna Boddu</h3>

              <p className="founder-text-update">
                Hari Krishna Boddu is the Co-Founder of INCHX INTERIO, bringing strong technical expertise, international academic exposure, and execution-focused leadership to the studio. With a background in Civil Engineering, he strengthens the firm&apos;s foundation in construction, engineering precision, and project execution.
              </p>

              <p className="founder-text-update">
                He completed his Bachelor&apos;s degree in Civil Engineering in India, developing a solid understanding of structural systems, site execution, and construction methodologies. With a vision to expand his global perspective, he pursued his Master&apos;s degree at the University of Central Missouri, USA, where he gained advanced knowledge and exposure to international standards in engineering and project management.
              </p>

              {!expandedFounder.hari && (
                <div className="founder-read-wrap-update">
                  <button
                    type="button"
                    className="founder-read-btn-update"
                    onClick={() =>
                      setExpandedFounder((prev) => ({
                        ...prev,
                        hari: true,
                      }))
                    }
                    aria-expanded={expandedFounder.hari}
                  >
                    Read More
                    <span>→</span>
                  </button>
                </div>
              )}

              {expandedFounder.hari && (
                <div className="founder-more-update">
                  <p className="founder-text-update">
                    Currently working in the United States, he brings valuable global industry experience to INCHX INTERIO, contributing insights from real-world engineering practices and modern construction systems. His exposure to international projects allows the studio to integrate practical, scalable, and globally relevant execution methods into its design process.
                  </p>

                  <p className="founder-text-update">
                    Beyond engineering, he also supports the studio in digital presence, marketing direction, and brand development, helping strengthen client communication and outreach strategies. His involvement ensures that INCHX INTERIO maintains a modern, well-positioned, and digitally active identity.
                  </p>

                  <p className="founder-text-update">
                    With experience spanning from ground-level construction to international engineering environments, he brings a practical and solution-oriented mindset to every project. His focus on execution quality, technical accuracy, and real-world feasibility complements the studio&apos;s design vision.
                  </p>

                  <div className="founder-action-update">
                    <button
                      type="button"
                      className="founder-read-btn-update founder-read-btn-light-update"
                      onClick={() =>
                        setExpandedFounder((prev) => ({
                          ...prev,
                          hari: false,
                        }))
                      }
                      aria-expanded={expandedFounder.hari}
                    >
                      Show Less
                      <span>↑</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>


<section className="philosophy-update" aria-label="INCH X INTERIO philosophy">
  <div className="philosophy-inner-update">
    <header className="philosophy-head-update">
      <span className="philosophy-label-update">Philosophy</span>
      <h2 className="philosophy-title-update">Designs shaped by vision, function, and emotion.</h2>
      <p className="philosophy-subtitle-update">
        At INCHX INTERIO, our designs are more than spaces. They are stories crafted to resonate with those who experience them.
      </p>
    </header>

    <div className="philosophy-grid-update">
      {philosophyCards.map((card) => (
        <article className="philosophy-card-update" key={card.number}>
          <div className="philosophy-top-update">
            <img src={card.icon} alt={card.title} className="philosophy-icon-update" />
            <span className="philosophy-number-update">{card.number}</span>
          </div>

          <div className="philosophy-content-update">
            <h3 className="philosophy-card-title-update">{card.title}</h3>
            <p className="philosophy-card-text-update">{card.text}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>



        {/*<section className="about8-s1" aria-label="Who we are">
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
        </section> */}

        {/*<section className="about8-s2" aria-label="Signature promise">
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
        </section> */}

        {/*<section className="about8-s3" aria-label="Services snapshot">
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
        </section> */}

        {/*<section className="about8-s4" aria-label="Photo strip">
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
        </section> */}

        {/*<section className="about8-s5" aria-label="Contact">
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
        </section> */}

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