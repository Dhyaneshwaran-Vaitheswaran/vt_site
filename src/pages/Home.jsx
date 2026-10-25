import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Building2, Globe, Clock, Sliders, MessageSquare, Award, FileText, Sparkles } from 'lucide-react';
import { FABRICS, CATEGORIES } from '../data/fabrics';
import { CAPABILITIES } from '../data/capabilities';
import { FabricCard } from '../components/FabricCard';
import { IshaShowcase } from '../components/IshaShowcase';

export const Home = ({ setActivePage, onSelectFabric, onAddSwatch, swatches, onOpenRFQ }) => {
  const [activeCategory, setActiveCategory] = useState("All Fabrics");
  const [activeCapabilityStep, setActiveCapabilityStep] = useState(0);

  const filteredFabrics = activeCategory === "All Fabrics"
    ? FABRICS.slice(0, 6)
    : FABRICS.filter(f => f.category === activeCategory).slice(0, 6);

  const marqueeItems = [
    { text: "10+ Years Main Supplier to Isha", bold: "Flagship Partner" },
    { text: "Zero Liquid Discharge (ZLD) Eco-Dyeing", bold: "100% Compliant" },
    { text: "ASTM D5430 4-Point Inspection", bold: "Roll-by-Roll QC" },
    { text: "Airjet & Rapier Shuttleless Weaving", bold: "100,000+ Mtrs/Mo" },
    { text: "Pure Cotton Dhotis, Kurtas & Bags", bold: "Downstream OEM" },
    { text: "Central Sourcing Desk in Erode", bold: "Estd. 1998" }
  ];

  return (
    <div>

      {/* Hero Section — Pure Black & Red Aesthetic */}
      <section className="hero-section-responsive">
        {/* Subtle grid pattern background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.05,
          backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid-layout">

            {/* Left Hero Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <span className="badge badge-red" style={{ backgroundColor: '#FEF2F2', color: '#C51E3A', border: '1px solid rgba(197, 30, 58, 0.3)' }}>
                  ESTABLISHED 1998 • ERODE
                </span>
              </div>

              <h1 style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2.1rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem'
              }}>
                End-to-End Woven Fabric Sourcing & Production Coordination.
              </h1>

              <p style={{
                color: '#D4D4D8',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '580px'
              }}>
                Centralized textile sourcing and woven fabric production partner in Erode, Tamil Nadu. We coordinate high-speed airjet/rapier weaving, custom dyeing, printing, specialty finishing, and downstream garmenting for global apparel brands and domestic manufacturers.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <button
                  onClick={() => onOpenRFQ(null)}
                  className="btn btn-primary btn-lg"
                >
                  <ArrowUpRight size={18} /> Request Bulk Quotation
                </button>
                <button
                  onClick={() => { setActivePage('catalog'); window.scrollTo(0, 0); }}
                  className="btn btn-outline-light btn-lg"
                >
                  Explore Woven Catalog <ArrowRight size={18} />
                </button>
              </div>

              {/* Official Flagship Client Trust Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '0.55rem 1.15rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                marginBottom: '2rem',
                width: 'fit-content'
              }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  padding: '3px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.25)'
                }}>
                  <img src="/images/isha-logo.png" alt="Isha" style={{ height: '24px', width: 'auto', display: 'block' }} />
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#D4D4D8' }}>
                  <strong style={{ color: '#FFFFFF' }}>Main Supplier to Isha</strong> for 10+ Years • Dhotis, Kurtas, Bags & Garments
                </div>
              </div>

              {/* Key Trust Stats Bar — Clean Sans-Serif Numbers */}
              <div className="stats-grid-responsive">
                <div>
                  <div style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 800, color: '#C51E3A', lineHeight: 1.1 }}>
                    1998
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A1A1AA', marginTop: '0.25rem' }}>
                    Founded in Erode, TN
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                    2M+ Meters
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A1A1AA', marginTop: '0.25rem' }}>
                    Coordinated Annually
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 800, color: '#C51E3A', lineHeight: 1.1 }}>
                    10+ Years
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A1A1AA', marginTop: '0.25rem' }}>
                    Main Supplier to Isha
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1 }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#A1A1AA', marginTop: '0.25rem' }}>
                    ASTM 4-Point QC
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
                border: '1px solid #27272A',
                position: 'relative'
              }}>
                <img
                  src="/images/hero-craft.webp"
                  alt="Vasanthaa Textiless authentic twill and dobby woven fabric craftsmanship"
                  className="hero-img-responsive"
                  width="1376"
                  height="768"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />

                {/* Official VT Trademark Stamp */}
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  backgroundColor: 'rgba(10, 10, 10, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(197, 30, 58, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.35)'
                }}>
                  <img src="/images/vt-monogram.svg" alt="VT" style={{ width: '18px', height: '18px' }} />
                  <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.08em' }}>
                    VT TRADEMARK
                  </span>
                </div>

                {/* Overlay Card Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(10, 10, 10, 0.92)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  border: '1px solid #27272A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#C51E3A', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      CENTRALIZED SOURCING DESK
                    </div>
                    <div style={{ fontSize: '0.975rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Erode Textile Corridor Hub
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#A1A1AA' }}>
                      Airjet & Rapier Weaving • ZLD Eco-Dyeing
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919842222580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                  >
                    <MessageSquare size={14} /> Quick Chat
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Banner Animation: Continuous Smooth Marquee Ticker */}
      <div className="marquee-banner" aria-label="Key Capabilities Ticker">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="marquee-item">
              <span className="marquee-star">✦</span>
              <span><strong>{item.bold}:</strong> {item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flagship Social Proof: 10+ Years Main Supplier to Isha */}
      <IshaShowcase onOpenRFQ={onOpenRFQ} />

      {/* Value Pillars Section — Spacious & Clean */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #E4E4E7', borderBottom: '1px solid #E4E4E7' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-kicker">WHY INDUSTRY LABELS PARTNER WITH US</span>
            <h2 className="section-title">Centralized Coordination. Zero Multi-Vendor Friction.</h2>
            <p className="section-desc">
              Managing weavers, process houses, and testing labs independently introduces costly delays and quality finger-pointing. Vasanthaa Textiless unifies every stage under a single contract with total accountability.
            </p>
          </div>

          <div className="grid-4">

            <div className="b2b-card" style={{ borderTop: '3px solid #C51E3A' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#FEF2F2',
                color: '#C51E3A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Building2 size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem', color: '#0A0A0A', fontWeight: 700 }}>
                Single Point of Contact
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7' }}>
                One commercial invoice, one transparent milestone schedule, and one dedicated sourcing coordinator overseeing weaving, processing, and finishing.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '3px solid #0A0A0A' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#F4F4F5',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem', color: '#0A0A0A', fontWeight: 700 }}>
                ASTM 4-Point Inspection
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7' }}>
                Every roll is inspected on our central light tables in Erode. We certify GSM, cuttable width, shrinkage tolerances, and shade continuity roll-by-roll.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '3px solid #C51E3A' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#FEF2F2',
                color: '#C51E3A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Sliders size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem', color: '#0A0A0A', fontWeight: 700 }}>
                Agile Scaling & Sampling
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7' }}>
                Prototype development from 100m feeler cuts through to 50,000m multi-container bulk runs. Rapid lab-dip turnaround within 3 to 5 business days.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '3px solid #0A0A0A' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                backgroundColor: '#F4F4F5',
                color: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Globe size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.65rem', color: '#0A0A0A', fontWeight: 700 }}>
                Strict Confidentiality
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7' }}>
                Your custom weave dobby drafts, bespoke colorways, and proprietary finishes are safeguarded with strict non-disclosure across all partner facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Fabric Catalog Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-kicker">ENGINEERED WOVEN TEXTILES</span>
            <h2 className="section-title">Specialty Fabric Catalog</h2>
            <p className="section-desc">
              From heavy-duty cotton drills and fluid viscose to breathable double gauzes and certified organic cottons, explore our core coordinated product lines.
            </p>
          </div>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3.5rem'
          }}>
            {CATEGORIES.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  border: '1.5px solid',
                  borderColor: activeCategory === cat ? '#C51E3A' : '#E4E4E7',
                  backgroundColor: activeCategory === cat ? '#C51E3A' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#18181B',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fabric Grid */}
          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {filteredFabrics.map(fabric => (
              <FabricCard
                key={fabric.id}
                fabric={fabric}
                onSelectFabric={onSelectFabric}
                onAddSwatch={onAddSwatch}
                isSwatchAdded={swatches.some(s => s.id === fabric.id)}
                onOpenRFQ={onOpenRFQ}
              />
            ))}
          </div>

          {/* View All Fabrics CTA */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => { setActivePage('catalog'); window.scrollTo(0, 0); }}
              className="btn btn-navy btn-lg"
            >
              View All 12+ Signature Fabrics with Full Technical Sheets <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Comprehensive Core Woven Fabrics & Apparel OEM Directory (Primary SEO Authority Cluster) */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #E4E4E7', borderBottom: '1px solid #E4E4E7' }}>
        <div className="container">

          <div className="section-header" style={{ maxWidth: '860px' }}>
            <span className="section-kicker">MANUFACTURING SPECIALIZATIONS • ERODE HUB</span>
            <h2 className="section-title">Woven Fabrics & Finished Garments Production Directory</h2>
            <p className="section-desc">
              Direct from South India's industrial textile corridor. Access certified technical specifications, yarn count schedules, GSM weights, and wholesale production minimums for domestic buyers and global exporters.
            </p>
          </div>

          {/* Fabrics Sub-Category Grid */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-red">CORE WOVEN FABRICS</span>
              <span style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: 600 }}>12 Specialty Weaves Engineered in Erode</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem'
            }}>
              {[
                { title: "Gada Fabric", sub: "Unbleached Greige Cotton (Kora Cloth)", gsm: "100 - 350 GSM", path: "/fabric/gada-greige-fabric", desc: "100% virgin cotton loomstate greige. Ideal substrate for dyeing, rotary printing, garment pocketing, and eco canvas sacks." },
                { title: "Dyed Woven Fabric", sub: "Reactive & Vat Piece Dyeing", gsm: "115 - 340 GSM", path: "/fabric/dyed-woven-fabric", desc: "Custom dyed cotton, linen, and viscose wovens processed in Zero Liquid Discharge (ZLD) plants with Delta E < 0.8 accuracy." },
                { title: "Print Poplin Fabric", sub: "100% Long-Staple Combed Cotton", gsm: "105 - 145 GSM", path: "/fabric/printed-poplin-fabric", desc: "High-density 40s/50s/60s poplin with rotary screen up to 12 colors or reactive digital printing. Pre-shrunk sanforization." },
                { title: "Double Gauze Fabric", sub: "Organic Crinkle Cotton Muslin", gsm: "120 - 155 GSM", path: "/fabric/double-gauze-fabric", desc: "Basted dual-layer gauze with breathable trapped air pockets. OEKO-TEX baby-safe for infant swaddles and resortwear." },
                { title: "Voil Fabric", sub: "Fine Cotton Voile & Sheer Mulmul", gsm: "65 - 95 GSM", path: "/fabric/cotton-voile-fabric", desc: "Featherweight 60s, 80s, and 100s/2 high-twist sheer cotton voile for summer dresses, tunics, stoles, and luxury scarves." },
                { title: "Cotton Canvas", sub: "Heavy Duck Canvas (8oz - 18oz)", gsm: "280 - 550 GSM", path: "/fabric/cotton-duck-canvas", desc: "Plied yarn heavy canvas basket weave. High puncture resistance with water-repellent finishes for tote bags, footwear, and jackets." },
                { title: "Cotton Drill", sub: "3/1 Warp-Faced Heavy Twill", gsm: "240 - 380 GSM", path: "/fabric/cotton-drill-fabric", desc: "Heavy industrial uniform fabric with steep diagonal ridges. Engineered for corporate workwear, factory boilersuits, and tenders." },
                { title: "Cotton Twill", sub: "2/1 & 3/1 Combed Chino Weaves", gsm: "180 - 320 GSM", path: "/fabric/cotton-twill-fabric", desc: "Signature combed cotton twills with velvety carbon peach finish. Ideal for casual chinos, trousers, overshirts, and blazers." },
                { title: "Dobby Woven Fabric", sub: "Geometric Textures & Micro-Reliefs", gsm: "135 - 240 GSM", path: "/fabric/dobby-woven-fabric", desc: "Multi-shaft electronic dobby weaving diamonds, honeycombs, and birds-eye patterns for luxury shirting and ethnic kurtas." },
                { title: "Woven Jacquard Fabric", sub: "Custom Engineered Motifs & Brocade", gsm: "160 - 360 GSM", path: "/fabric/woven-jacquard-fabric", desc: "Bespoke electronic jacquard weaving translating CAD artworks into floral, baroque, and geometric apparel brocades." },
                { title: "Flux Fabric", sub: "Pure European Flax Linen & Blends", gsm: "140 - 240 GSM", path: "/fabric/pure-flax-linen", desc: "Pure European flax linen (25s - 60s lea). Enzyme bio-washed for immediate buttery drape, moisture-wicking, and breathability." },
                { title: "White Fabric", sub: "Bleached Optical White & PFD / RFD", gsm: "105 - 300 GSM", path: "/fabric/optical-white-pfd-fabric", desc: "Pure optical white cottons and non-fluorescent PFD/RFD substrates engineered for garment dyehouses, shirting, and dhotis." }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className="b2b-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E4E4E7',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#C51E3A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.gsm}</span>
                      <ArrowUpRight size={14} color="#71717A" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.25rem 0' }}>{item.title}</h3>
                    <div style={{ fontSize: '0.8rem', color: '#71717A', fontWeight: 600, marginBottom: '0.65rem' }}>{item.sub}</div>
                    <p style={{ fontSize: '0.85rem', color: '#52525B', lineHeight: '1.55', margin: 0 }}>{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Garments Sub-Category Grid */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-black">OEM GARMENTS & FINISHED GOODS</span>
              <span style={{ fontSize: '0.875rem', color: '#71717A', fontWeight: 600 }}>5 Downstream Stitched Product Categories</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.25rem'
            }}>
              {[
                { title: "All Woven Shirts", sub: "Men's & Women's Tailored OEM", cap: "45,000 Pcs/Mo", path: "/garments/woven-shirts-manufacturer", desc: "Full-package formal dress shirts, casual camp collar resortwear, and corporate uniform shirts. Juki single-needle 14-16 SPI stitching." },
                { title: "Kurtha & Kurtha Pants", sub: "Cotton & Linen Ethnic Apparel", cap: "35,000 Sets/Mo", path: "/garments/kurta-garment-manufacturer", desc: "Woven cotton, linen dobby, and slub kurtas with matching tailored bottoms. Precision mandarin collars and clean concealed plackets." },
                { title: "Dhoti Garments & Veshtis", sub: "Zari Borders & Tailored Pants", cap: "60,000 Units/Mo", path: "/garments/traditional-dhoti-manufacturer", desc: "Pure cotton traditional single/double dhotis with gold and silver zari borders, alongside ready-to-wear tailored sadhana dhoti pants." },
                { title: "Cotton Bags & Totes", sub: "100% Eco-Friendly Canvas OEM", cap: "100,000 Bags/Mo", path: "/garments/cotton-canvas-tote-bags", desc: "Heavy duck canvas and greige cotton tote bags, Save Soil merchandise, and promotional bags. Reinforced X-box stitching tested to 20kg+." },
                { title: "All Garments Coordination", sub: "Full-Package Turnkey OEM", cap: "120,000 Units/Mo", path: "/garments/custom-woven-apparel-oem", desc: "Single-point apparel coordination across Tamil Nadu. We weave the fabric, dye lab-dips, manage cut-and-sew, and handle FOB export logistics." }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  className="b2b-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E4E4E7',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 200ms ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0A0A0A', backgroundColor: '#F4F4F5', padding: '0.2rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase' }}>{item.cap}</span>
                      <ArrowUpRight size={14} color="#71717A" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0A0A0A', margin: '0 0 0.25rem 0' }}>{item.title}</h3>
                    <div style={{ fontSize: '0.8rem', color: '#71717A', fontWeight: 600, marginBottom: '0.65rem' }}>{item.sub}</div>
                    <p style={{ fontSize: '0.85rem', color: '#52525B', lineHeight: '1.55', margin: 0 }}>{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* The 4-Stage Production Orchestration (Stage 1 Yarn Removed) */}
      <section className="section-padding" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-kicker" style={{ color: '#C51E3A' }}>THE VASANTHAA SYSTEM</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              How We Coordinate 4-Stage Fabric Production
            </h2>
            <p className="section-desc" style={{ color: '#A1A1AA' }}>
              A disciplined, milestone-tracked manufacturing pipeline executed through our verified mill network in Erode and surrounding textile corridors.
            </p>
          </div>

          {/* Pipeline Interactive Tabs (4 Stages) */}
          <div className="pipeline-tabs-grid">
            {CAPABILITIES.map((cap, idx) => (
              <button
                key={cap.step}
                onClick={() => setActiveCapabilityStep(idx)}
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: '14px',
                  border: '1.5px solid',
                  borderColor: activeCapabilityStep === idx ? '#C51E3A' : '#27272A',
                  backgroundColor: activeCapabilityStep === idx ? '#18181B' : '#121212',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 200ms ease'
                }}
              >
                <div style={{ fontFamily: 'Space Grotesk, monospace', fontSize: '0.75rem', color: activeCapabilityStep === idx ? '#C51E3A' : '#71717A', fontWeight: 800, marginBottom: '0.35rem' }}>
                  STAGE {cap.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#FFFFFF' }}>
                  {cap.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Display */}
          <div className="stage-box-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span className="badge badge-red" style={{ backgroundColor: '#FEF2F2', color: '#C51E3A' }}>STAGE {CAPABILITIES[activeCapabilityStep].step}</span>
                <span style={{ fontSize: '0.875rem', color: '#D4D4D8', fontWeight: 600 }}>
                  {CAPABILITIES[activeCapabilityStep].subtitle}
                </span>
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)', marginBottom: '1.15rem', fontWeight: 800 }}>
                {CAPABILITIES[activeCapabilityStep].title}
              </h3>

              <p style={{ color: '#D4D4D8', fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                {CAPABILITIES[activeCapabilityStep].description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {CAPABILITIES[activeCapabilityStep].highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#F4F4F5', fontSize: '0.925rem' }}>{h}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary btn-lg"
              >
                Inquire on this Production Stage <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <img
                src={CAPABILITIES[activeCapabilityStep].image}
                alt={CAPABILITIES[activeCapabilityStep].imageAlt || CAPABILITIES[activeCapabilityStep].title}
                className="stage-img-responsive"
                width="1376"
                height="768"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Tailored Buyer Pathways */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-kicker">COMMERCIAL PATHWAYS</span>
            <h2 className="section-title">Built for Industry Procurement Leaders</h2>
            <p className="section-desc">
              Whether you are an apparel exporter needing rapid sampling in Tirupur/Bengaluru or an overseas fashion brand specifying export containers, our operational workflows are tailored for your exact compliance needs.
            </p>
          </div>

          <div className="grid-2">

            {/* Domestic Exporters Card */}
            <div className="b2b-card b2b-card-buyer" style={{ borderLeft: '4px solid #C51E3A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                <span className="badge badge-red">DOMESTIC EXPORTERS & BRANDS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', marginBottom: '1rem', color: '#0A0A0A', fontWeight: 700 }}>
                Fast Logistics & Rapid Sampling Across India
              </h3>
              <p style={{ color: '#52525B', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Directly serving garment export hubs in Tirupur, Bengaluru, Surat, Mumbai, and Delhi-NCR. We offer clear GST invoicing, 48-hour prototype yardage dispatch, and overnight road transport from Erode.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>GST Compliant:</strong> Seamless input tax credit invoicing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Express Sampling:</strong> 20m - 50m sample rolls dispatched in 7 days</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Flexible Payment:</strong> Staged milestone terms for accredited manufacturers</span>
                </li>
              </ul>

              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-navy"
                style={{ width: '100%' }}
              >
                Inquire for Domestic Supply
              </button>
            </div>

            {/* International Brands Card */}
            <div className="b2b-card b2b-card-buyer" style={{ borderLeft: '4px solid #0A0A0A' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                <span className="badge badge-black">INTERNATIONAL BUYERS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)', marginBottom: '1rem', color: '#0A0A0A', fontWeight: 700 }}>
                Export Packaging, Lab Dips & Port Delivery
              </h3>
              <p style={{ color: '#52525B', lineHeight: '1.75', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                Supplying apparel labels across Europe, the Middle East, UK, and the Americas. Full FOB/CIF support via Chennai, Tuticorin, and Kochi seaports with comprehensive laboratory test certificates.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Spectrophotometer Lab Dips:</strong> Pantone TCX 3-way strike-offs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Export Roll Packaging:</strong> Double poly moisture wrap & tubes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#18181B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>FOB / CIF Shipping:</strong> Complete customs documentation & packing lists</span>
                </li>
              </ul>

              <a
                href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20we%20are%20an%20international%20buyer%20interested%20in%20bulk%20fabric%20sourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={16} /> International Desk on WhatsApp (+91 98422 22580)
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Quality Assurance Spotlight */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #E4E4E7' }}>
        <div className="container">
          <div className="two-col-layout-responsive">

            <div>
              <img
                src="/images/fabric-inspection.webp"
                alt="ASTM D5430 4-point textile inspection station in Erode"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  border: '1px solid #E4E4E7'
                }}
              />
            </div>

            <div>
              <span className="section-kicker">INDEPENDENT IN-HOUSE VERIFICATION</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.35rem)', marginBottom: '1.25rem', color: '#0A0A0A', fontWeight: 800 }}>
                ASTM D5430 4-Point Inspection on Every Roll
              </h2>
              <p style={{ color: '#52525B', lineHeight: '1.75', marginBottom: '1.75rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)' }}>
                We believe trust is built on verifiable measurements. When fabric arrives from weaving and dyeing partners, our central quality inspection team inspects each roll over continuous illumination tables.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '10px', border: '1px solid #E4E4E7' }}>
                  <strong style={{ display: 'block', color: '#C51E3A', fontSize: '1.15rem', fontWeight: 800 }}>&lt; 2.5%</strong>
                  <span style={{ fontSize: '0.8rem', color: '#52525B' }}>Residual Shrinkage</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '10px', border: '1px solid #E4E4E7' }}>
                  <strong style={{ display: 'block', color: '#0A0A0A', fontSize: '1.15rem', fontWeight: 800 }}>Grade 4+</strong>
                  <span style={{ fontSize: '0.8rem', color: '#52525B' }}>Color Fastness</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '10px', border: '1px solid #E4E4E7' }}>
                  <strong style={{ display: 'block', color: '#0A0A0A', fontSize: '1.15rem', fontWeight: 800 }}>± 3% GSM</strong>
                  <span style={{ fontSize: '0.8rem', color: '#52525B' }}>Weight Tolerance</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '1rem', borderRadius: '10px', border: '1px solid #E4E4E7' }}>
                  <strong style={{ display: 'block', color: '#C51E3A', fontSize: '1.15rem', fontWeight: 800 }}>100% Zero</strong>
                  <span style={{ fontSize: '0.8rem', color: '#52525B' }}>Severe Defect Allowance</span>
                </div>
              </div>

              <button
                onClick={() => { setActivePage('quality'); window.scrollTo(0, 0); }}
                className="btn btn-outline-dark"
              >
                Review Full QA Testing Protocols <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip — Bold Red Accent */}
      <section style={{ backgroundColor: '#C51E3A', color: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)', marginBottom: '1rem', fontWeight: 800 }}>
            Ready to Streamline Your Textile Sourcing?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: '1.75' }}>
            Connect with our Erode sourcing headquarters. We will analyze your fabric reference, provide sample swatches, and quote volume-tiered factory prices within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-navy btn-lg"
              style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', border: '1px solid #27272A' }}
            >
              Request Custom Quote
            </button>
            <a
              href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20discuss%20a%20fabric%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} /> Chat with Sourcing Desk (+91 98422 22580)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
