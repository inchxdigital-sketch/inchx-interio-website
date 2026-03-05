import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Products.css";

function Products() {
  const categories = useMemo(
    () => [
      {
        label: "Wallpapers",
        key: "wallpapers",
        sections: [
          {
            title: "",
            options: [
              { label: "Vinyl Wallpapers", key: "wallpapers-vinyl", images: ["wallpapers-vinyl1.jpg", "wallpapers-vinyl2.jpg", "wallpapers-vinyl3.jpg", "wallpapers-vinyl4.jpg"] },
              { label: "Non Woven Wallpapers", key: "wallpapers-non-woven", images: ["wallpapers-non-woven1.jpg", "wallpapers-non-woven2.jpg", "wallpapers-non-woven3.jpg", "wallpapers-non-woven4.jpg"] }
            ]
          },
          {
            title: "Customize Wallpapers",
            options: [
              { label: "Vinyl Matt/Glossy Wallpaper", key: "wallpapers-custom-vinyl-matt-glossy", images: ["wallpapers-custom-vinyl-matt-glossy1.jpg", "wallpapers-custom-vinyl-matt-glossy2.jpg", "wallpapers-custom-vinyl-matt-glossy3.jpg", "wallpapers-custom-vinyl-matt-glossy4.jpg"] },
              { label: "Non Woven Wallpaper", key: "wallpapers-custom-non-woven", images: ["wallpapers-custom-non-woven1.jpg", "wallpapers-custom-non-woven2.jpg", "wallpapers-custom-non-woven3.jpg", "wallpapers-custom-non-woven4.jpg"] },
              { label: "Royal Touch Wallpaper", key: "wallpapers-custom-royal-touch", images: ["wallpapers-custom-royal-touch1.jpg", "wallpapers-custom-royal-touch2.jpg", "wallpapers-custom-royal-touch3.jpg", "wallpapers-custom-royal-touch4.jpg"] },
              { label: "Canvas Wallpaper", key: "wallpapers-custom-canvas", images: ["wallpapers-custom-canvas1.jpg", "wallpapers-custom-canvas2.jpg", "wallpapers-custom-canvas3.jpg", "wallpapers-custom-canvas4.jpg"] },
              { label: "Sparkle Wall Fabric Wallpaper", key: "wallpapers-custom-sparkle-wall-fabric", images: ["wallpapers-custom-sparkle-wall-fabric1.jpg", "wallpapers-custom-sparkle-wall-fabric2.jpg", "wallpapers-custom-sparkle-wall-fabric3.jpg", "wallpapers-custom-sparkle-wall-fabric4.jpg"] },
              { label: "Metallic (Foil) Wallpaper", key: "wallpapers-custom-metallic-foil", images: ["wallpapers-custom-metallic-foil1.jpg", "wallpapers-custom-metallic-foil2.jpg", "wallpapers-custom-metallic-foil3.jpg", "wallpapers-custom-metallic-foil4.jpg"] }
            ]
          }
        ]
      },
      {
        label: "Curtains",
        key: "curtains",
        sections: [
          {
            title: "",
            options: [
              { label: "Track Curtains", key: "curtains-track", images: ["curtains-track1.jpg", "curtains-track2.jpg", "curtains-track3.jpg", "curtains-track4.jpg"] },
              { label: "Ring Curtains", key: "curtains-ring", images: ["curtains-ring1.jpg", "curtains-ring2.jpg", "curtains-ring3.jpg", "curtains-ring4.jpg"] },
              { label: "Motorized Curtains", key: "curtains-motorized", images: ["curtains-motorized1.jpg", "curtains-motorized2.jpg", "curtains-motorized3.jpg", "curtains-motorized4.jpg"] }
            ]
          }
        ]
      },
      {
        label: "Blinds",
        key: "blinds",
        sections: [
          {
            title: "Interior Blinds",
            options: [
              { label: "Roller Blinds", key: "blinds-roller", images: ["blinds-roller1.jpg", "blinds-roller2.jpg", "blinds-roller3.jpg", "blinds-roller4.jpg"] },
              { label: "Zebra Blinds", key: "blinds-zebra", images: ["blinds-zebra1.jpg", "blinds-zebra2.jpg", "blinds-zebra3.jpg", "blinds-zebra4.jpg"] },
              { label: "Wooden Blinds", key: "blinds-wooden", images: ["blinds-wooden1.jpg", "blinds-wooden2.jpg", "blinds-wooden3.jpg", "blinds-wooden4.jpg"] },
              { label: "Roman Blinds", key: "blinds-roman", images: ["blinds-roman1.jpg", "blinds-roman2.jpg", "blinds-roman3.jpg", "blinds-roman4.jpg"] },
              { label: "Venetian Blinds", key: "blinds-venetian", images: ["blinds-venetian1.jpg", "blinds-venetian2.jpg", "blinds-venetian3.jpg", "blinds-venetian4.jpg"] },
              { label: "Honeycomb Blinds", key: "blinds-honeycomb", images: ["blinds-honeycomb1.jpg", "blinds-honeycomb2.jpg", "blinds-honeycomb3.jpg", "blinds-honeycomb4.jpg"] },
              { label: "Vertical Blinds", key: "blinds-vertical", images: ["blinds-vertical1.jpg", "blinds-vertical2.jpg", "blinds-vertical3.jpg", "blinds-vertical4.jpg"] },
              { label: "Motorized Blinds", key: "blinds-motorized", images: ["blinds-motorized1.jpg", "blinds-motorized2.jpg", "blinds-motorized3.jpg", "blinds-motorized4.jpg"] }
            ]
          },
          {
            title: "Customize Blinds",
            options: [
              { label: "Roller", key: "blinds-custom-roller", images: ["blinds-custom-roller1.jpg", "blinds-custom-roller2.jpg", "blinds-custom-roller3.jpg", "blinds-custom-roller4.jpg"] },
              { label: "Zebra", key: "blinds-custom-zebra", images: ["blinds-zebra1.jpg", "blinds-zebra2.jpg", "blinds-zebra3.jpg", "blinds-zebra4.jpg"] },
              { label: "Wooden", key: "blinds-custom-wooden", images: ["blinds-wooden1.jpg", "blinds-wooden2.jpg", "blinds-wooden3.jpg", "blinds-wooden4.jpg"] }
            ]
          },
          {
            title: "Exterior Blinds",
            options: [{ label: "Chick/PVC Blinds", key: "blinds-chick-pvc", images: ["chick-blind1.webp", "chick-blind2.jpeg", "chick-blind3.jpg", "chick-blind4.jpeg"] }]
          }
        ]
      },
      {
        label: "Ceiling Panels",
        key: "ceiling-panels",
        sections: [{ title: "", options: [{ label: "Ceiling Panels", key: "ceiling-panels", images: ["ceiling-panel1.jpg", "ceiling-panel2.jpg", "ceiling-panel3.jpg", "ceiling-panel4.jpg"] }] }]
      },
      {
        label: "Pots",
        key: "pots",
        sections: [{ title: "", options: [{ label: "Pots", key: "pots", images: ["pot1.jpg", "pot2.jpg", "pot3.jpg", "pot4.jpg"] }] }]
      },
      {
        label: "Artifacts",
        key: "artifacts",
        sections: [{ title: "", options: [{ label: "Artifacts", key: "artifacts", images: ["artifacts1.jpg", "artifacts2.jpg", "artifacts3.jpg", "artifacts4.jpg"] }] }]
      },
      {
        label: "PU Panels",
        key: "pu-panels",
        sections: [{ title: "", options: [{ label: "PU Panels", key: "pu-panels", images: ["pu-panel1.jpg", "pu-panel2.jpg", "pu-panel3.jpg", "pu-panel4.jpg"] }] }]
      },
      {
        label: "Mosaic Tiles",
        key: "mosaic-tiles",
        sections: [{ title: "", options: [{ label: "Mosaic Tiles", key: "mosaic-tiles", images: ["mosaic-tiles1.webp", "mosaic-tiles2.webp", "mosaic-tiles3.webp", "mosaic-tiles4.webp"] }] }]
      },
      {
        label: "Laminated Flooring",
        key: "laminated-flooring",
        sections: [{ title: "", options: [{ label: "Laminated Flooring", key: "laminated-flooring", images: ["laminated-flooring1.jpg", "laminated-flooring2.jpg", "laminated-flooring3.jpg", "laminated-flooring4.jpg"] }] }]
      },
      {
        label: "Artificial Greenary Section",
        key: "artificial-greenary-section",
        sections: [
          {
            title: "Greenary Section",
            options: [
              { label: "Vertical Garden", key: "greenary-vertical-garden", images: ["greenary-vertical-garden1.jpg", "greenary-vertical-garden2.jpg", "greenary-vertical-garden3.jpg", "greenary-vertical-garden4.jpg"] },
              { label: "Artificial Grass", key: "greenary-artificial-grass", images: ["greenary-artificial-grass1.jpg", "greenary-artificial-grass2.jpg", "greenary-artificial-grass3.jpg", "greenary-artificial-grass4.jpg"] },
              { label: "Artificial Plants", key: "greenary-artificial-plants", images: ["greenary-artificial-plants1.jpg", "greenary-artificial-plants2.jpg", "greenary-artificial-plants3.jpg", "greenary-artificial-plants4.jpg"] },
              { label: "Creepers and Veils", key: "greenary-creepers-veils", images: ["greenary-creepers-veils1.jpg", "greenary-creepers-veils2.jpg", "greenary-creepers-veils3.jpg", "greenary-creepers-veils4.jpg"] }
            ]
          }
        ]
      },
      {
        label: "Bedsheets & Comforters",
        key: "bedsheets-comforters",
        sections: [{ title: "", options: [{ label: "Bedsheets & Comforters", key: "bedsheets-comforters", images: ["bedsheets-comforters1.jpg", "bedsheets-comforters2.jpg", "bedsheets-comforters3.jpg", "bedsheets-comforters4.jpg"] }] }]
      },
      {
        label: "Wall Murals",
        key: "wall-murals",
        sections: [{ title: "", options: [{ label: "Wall Murals", key: "wall-murals", images: ["wall-murals5.jpg", "wall-murals6.jpg", "wall-murals7.jpg", "wall-murals8.jpg"] }] }]
      },
      {
        label: "Balcony Cloth Hangers",
        key: "balcony-cloth-hangers",
        sections: [{ title: "", options: [{ label: "Balcony Cloth Hangers", key: "balcony-cloth-hangers", images: ["balcony-cloth-hangers6.jpg", "balcony-cloth-hangers7.jpg", "balcony-cloth-hangers8.jpg", "balcony-cloth-hangers5.jpg"] }] }]
      },
      {
        label: "Mosquito Mesh Doors",
        key: "mosquito-mesh-doors",
        sections: [{ title: "", options: [{ label: "Mosquito Mesh Doors", key: "mosquito-mesh-doors", images: ["mosquito-mesh-door1.jpg", "mosquito-mesh-door2.jpg", "mosquito-mesh-door3.jpg", "mosquito-mesh-door4.jpg"] }] }]
      },
      {
        label: "Carpets",
        key: "carpets",
        sections: [{ title: "", options: [{ label: "Carpets", key: "carpets", images: ["carpets1.jpg", "carpets2.jpg", "carpets3.jpg", "carpets4.jpg"] }] }]
      },
      {
        label: "Stools",
        key: "stools",
        sections: [{ title: "", options: [{ label: "Stools", key: "stools", images: ["stools1.jpg", "stools2.jpg", "stools3.jpg", "stools4.jpg"] }] }]
      }
    ],
    []
  );

  const allLabels = useMemo(() => categories.map((c) => c.label), [categories]);

  const [query, setQuery] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const [pickedByCategory, setPickedByCategory] = useState(() => {
    const init = {};
    categories.forEach((c) => {
      const first = c.sections?.[0]?.options?.[0];
      if (first) init[c.key] = first.key;
    });
    return init;
  });

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLabels.slice(0, 8);
    return allLabels.filter((x) => x.toLowerCase().includes(q)).slice(0, 8);
  }, [allLabels, query]);

  const handlePick = (label) => {
    setSelectedLabel(label);
    setQuery(label);
  };

  const clearAll = () => {
    setSelectedLabel("");
    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) handlePick(suggestions[0]);
  };

  const showing = useMemo(() => {
    if (!selectedLabel) return categories;
    return categories.filter((c) => c.label === selectedLabel);
  }, [categories, selectedLabel]);

  const pickOption = (catKey, optionKey) => {
    setPickedByCategory((prev) => ({ ...prev, [catKey]: optionKey }));
  };

  const getActiveImages = (cat) => {
    const activeKey = pickedByCategory[cat.key] || cat.sections?.[0]?.options?.[0]?.key;
    for (const sec of cat.sections || []) {
      for (const opt of sec.options || []) {
        if (opt.key === activeKey) return opt.images || [];
      }
    }
    return cat.sections?.[0]?.options?.[0]?.images || [];
  };

  return (
    <>
      <Navbar />

      <main className="products-page" aria-label="Products page">
        <section className="products-search" aria-label="Product search">
          <div className="products-search-inner">
            <div className="products-search-head">
              <h1 className="products-search-title">Products</h1>
              <p className="products-search-sub">Search and pick a category to view related products.</p>
            </div>

            <form className="products-searchbar" onSubmit={onSubmit} role="search" aria-label="Search products">
              <div className="products-search-inputwrap">
                <input
                  className="products-search-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, like Wallpapers, Blinds..."
                  aria-label="Search"
                  autoComplete="off"
                />
              </div>

              <div className="products-search-actions">
                <button className="products-search-btn" type="submit">
                  Search
                </button>
                <button className="products-clear-btn" type="button" onClick={clearAll} disabled={!selectedLabel && !query}>
                  Clear
                </button>
              </div>
            </form>

            {suggestions.length > 0 && (
              <div className="products-suggest" role="listbox" aria-label="Suggestions">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={`products-suggest-item ${selectedLabel === s ? "active" : ""}`}
                    onClick={() => handlePick(s)}
                    role="option"
                    aria-selected={selectedLabel === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="products-options" aria-label="All categories">
              {allLabels.map((it) => (
                <button key={it} type="button" className={`products-chip ${selectedLabel === it ? "active" : ""}`} onClick={() => handlePick(it)}>
                  {it}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="products-gallery" aria-label="Product gallery">
          <div className="products-gallery-inner">
            <div className="products-grid">
              {showing.map((cat) => {
                const activeImages = getActiveImages(cat);
                const activeKey = pickedByCategory[cat.key] || cat.sections?.[0]?.options?.[0]?.key;

                return (
                  <article key={cat.key} className="products-row" aria-label={cat.label}>
                    <div className="products-cat">
                      <div className="products-cat-top">
                        <div className="products-cat-name">{cat.label}</div>
                        <div className="products-cat-arrow" aria-hidden="true">
                          →
                        </div>
                      </div>

                      <div className="products-cat-body">
                        {(cat.sections || []).map((sec) => (
                          <div key={`${cat.key}-${sec.title || "main"}`} className="products-variant-section">
                            {sec.title ? <div className="products-variant-title">{sec.title}</div> : null}

                            <div className="products-variant-list">
                              {(sec.options || []).map((opt) => (
                                <button
                                  key={opt.key}
                                  type="button"
                                  className={`products-variant-btn ${activeKey === opt.key ? "active" : ""}`}
                                  onClick={() => pickOption(cat.key, opt.key)}
                                >
                                  {opt.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {activeImages.map((img) => (
                      <div key={img} className="products-imgcard">
                        <img src={`/Images/products/${img}`} alt={`${cat.label}`} loading="lazy" />
                        <div className="products-imgshine" />
                      </div>
                    ))}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Products;
