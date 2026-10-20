import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, Building2, Globe, Clock, Sliders, MessageSquare, Award, FileText } from 'lucide-react';
import { FABRICS, CATEGORIES } from '../data/fabrics';
import { CAPABILITIES } from '../data/capabilities';
import { FabricCard } from '../components/FabricCard';

export const Home = ({ setActivePage, onSelectFabric, onAddSwatch, swatches, onOpenRFQ }) => {
  const [activeCategory, setActiveCategory] = useState("All Fabrics");
  const [activeCapabilityStep, setActiveCapabilityStep] = useState(0);

  const filteredFabrics = activeCategory === "All Fabrics" 
    ? FABRICS.slice(0, 6) 
    : FABRICS.filter(f => f.category === activeCategory).slice(0, 6);

  return (
    <div>
      
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="hero-section-responsive">
        {/* Subtle grid pattern background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.07,
          backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid-layout">
            
            {/* Left Hero Content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">ESTABLISHED 1998 • ERODE FORT</span>
                <span className="badge badge-live">Accepting 2026/2027 Bulk Orders</span>
              </div>

              <h1 style={{
                color: '#FFFFFF',
                fontSize: 'clamp(2rem, 4.5vw, 3.6rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}>
                End-to-End Woven Fabric Sourcing & Production Coordination.
              </h1>

              <p style={{
                color: '#CBD5E1',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: 1.7,
                marginBottom: '1.75rem',
                maxWidth: '560px'
              }}>
                Centralized textile sourcing and woven fabric production partner in Erode, Tamil Nadu. We coordinate specialized yarn procurement, high-speed airjet/rapier weaving, custom dyeing, printing, and specialty finishing for global apparel brands, buying houses, and garment exporters.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <button
                  onClick={() => onOpenRFQ(null)}
                  className="btn btn-primary btn-lg"
                >
                  <ArrowUpRight size={18} /> Request Bulk Quotation
                </button>
                <button
                  onClick={() => { setActivePage('catalog'); window.scrollTo(0,0); }}
                  className="btn btn-outline-light btn-lg"
                >
                  Explore Woven Catalog <ArrowRight size={18} />
                </button>
              </div>

              {/* Key Trust Stats Bar */}
              <div className="stats-grid-responsive">
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#D4AF37' }}>
                    1998
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    Founded in Erode, TN
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#FFFFFF' }}>
                    2M+ Meters
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    Coordinated Annually
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#D4AF37' }}>
                    ₹20Cr+
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    Annual Trade Volume
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 800, color: '#FFFFFF' }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                    ASTM 4-Point QC
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
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
                  backgroundColor: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
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
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}>
                  <div>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      CENTRALIZED SOURCING DESK
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Erode Textile Corridor Hub
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                      Airjet & Rapier Weaving • ZLD Dyeing
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919786222580"
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

      {/* Value Pillars Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-kicker">WHY APPAREL LABELS PARTNER WITH US</span>
            <h2 className="section-title">Centralized Coordination. Zero Multi-Vendor Friction.</h2>
            <p className="section-desc">
              Managing spinning mills, weavers, process houses, and testing labs independently introduces costly delays and quality finger-pointing. Vasanthaa Textiless unifies every stage under a single contract with total accountability.
            </p>
          </div>

          <div className="grid-4">
            
            <div className="b2b-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: 'rgba(194, 94, 46, 0.1)',
                color: '#C51E3A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Building2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                Single Point of Contact
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                One commercial invoice, one transparent milestone schedule, and one dedicated sourcing coordinator overseeing spinning, weaving, and wet processing.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                color: '#B8860B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                ASTM 4-Point Inspection
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                Every roll is inspected on our central light tables in Erode Fort. We certify GSM, cuttable width, shrinkage tolerances, and shade continuity roll-by-roll.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: 'rgba(15, 23, 42, 0.08)',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Sliders size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                Agile Scaling & Sampling
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                Prototype development from 100m feeler cuts through to 50,000m multi-container bulk runs. Rapid lab-dip turnaround within 3 to 5 business days.
              </p>
            </div>

            <div className="b2b-card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                color: '#15803D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#0F172A' }}>
                Strict Confidentiality
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                Your custom weave dobby drafts, bespoke colorways, and proprietary finishes are safeguarded with strict non-disclosure across all partner facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Fabric Catalog Showcase */}
      <section className="section-padding" style={{ backgroundColor: '#FBF9F5' }}>
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
            gap: '0.5rem',
            marginBottom: '3rem'
          }}>
            {CATEGORIES.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#C51E3A' : 'rgba(15, 23, 42, 0.12)',
                  backgroundColor: activeCategory === cat ? '#C51E3A' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#1E293B',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Fabric Grid */}
          <div className="grid-3" style={{ marginBottom: '3rem' }}>
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
              onClick={() => { setActivePage('catalog'); window.scrollTo(0,0); }}
              className="btn btn-navy btn-lg"
            >
              View All 12+ Signature Fabrics with Full Technical Sheets <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* The 5-Stage Production Orchestration */}
      <section className="section-padding" style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
        <div className="container">
          
          <div className="section-header">
            <span className="section-kicker" style={{ color: '#D4AF37' }}>THE VASANTHAA SYSTEM</span>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              How We Coordinate End-to-End Production
            </h2>
            <p className="section-desc" style={{ color: '#94A3B8' }}>
              A disciplined, milestone-tracked manufacturing pipeline executed through our verified mill network in Erode and surrounding textile corridors.
            </p>
          </div>

          {/* Pipeline Interactive Tabs */}
          <div className="pipeline-tabs-grid">
            {CAPABILITIES.map((cap, idx) => (
              <button
                key={cap.step}
                onClick={() => setActiveCapabilityStep(idx)}
                style={{
                  padding: '1rem 0.875rem',
                  borderRadius: '12px',
                  border: '1px solid',
                  borderColor: activeCapabilityStep === idx ? '#C51E3A' : 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: activeCapabilityStep === idx ? '#1E293B' : 'rgba(255, 255, 255, 0.03)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 200ms ease'
                }}
              >
                <div style={{ fontFamily: 'Space Grotesk, monospace', fontSize: '0.75rem', color: activeCapabilityStep === idx ? '#C51E3A' : '#94A3B8', fontWeight: 700, marginBottom: '0.2rem' }}>
                  STAGE {cap.step}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#FFFFFF' }}>
                  {cap.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Display */}
          <div className="stage-box-responsive">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">STAGE {CAPABILITIES[activeCapabilityStep].step}</span>
                <span style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 600 }}>
                  {CAPABILITIES[activeCapabilityStep].subtitle}
                </span>
              </div>

              <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>
                {CAPABILITIES[activeCapabilityStep].title}
              </h3>

              <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.9rem, 1.6vw, 1rem)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {CAPABILITIES[activeCapabilityStep].description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                {CAPABILITIES[activeCapabilityStep].highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={18} color="#22C55E" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>{h}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                Inquire on this Production Stage <ArrowRight size={16} />
              </button>
            </div>

            <div>
              <img
                src={activeCapabilityStep === 0 ? "/images/yarn-cones.webp" : activeCapabilityStep === 4 ? "/images/fabric-inspection.webp" : "/images/hero-craft.webp"}
                alt={CAPABILITIES[activeCapabilityStep].title}
                className="stage-img-responsive"
                width="800"
                height="600"
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge badge-terracotta">DOMESTIC EXPORTERS & BRANDS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)', marginBottom: '0.875rem', color: '#0F172A' }}>
                Fast Logistics & Rapid Sampling Across India
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                Directly serving garment export hubs in Tirupur, Bengaluru, Surat, Mumbai, and Delhi-NCR. We offer clear GST invoicing, 48-hour prototype yardage dispatch, and overnight road transport from Erode.
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem', fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>GST Compliant:</strong> Seamless input tax credit invoicing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Express Sampling:</strong> 20m - 50m sample rolls dispatched in 7 days</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
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
            <div className="b2b-card b2b-card-buyer" style={{ borderLeft: '4px solid #D4AF37' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge badge-gold">INTERNATIONAL BUYERS</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)', marginBottom: '0.875rem', color: '#0F172A' }}>
                Export Packaging, Lab Dips & Port Delivery
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem', fontSize: '0.9375rem' }}>
                Supplying apparel labels across Europe, the Middle East, UK, and the Americas. Full FOB/CIF support via Chennai, Tuticorin, and Kochi seaports with comprehensive laboratory test certificates.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem', fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#B8860B" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Spectrophotometer Lab Dips:</strong> Pantone TCX 3-way strike-offs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#B8860B" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>Export Roll Packaging:</strong> Double poly moisture wrap & tubes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: '#1E293B' }}>
                  <CheckCircle2 size={16} color="#B8860B" style={{ flexShrink: 0, marginTop: '0.2rem' }} /> <span><strong>FOB / CIF Shipping:</strong> Complete customs documentation & packing lists</span>
                </li>
              </ul>

              <a
                href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20we%20are%20an%20international%20buyer%20interested%20in%20bulk%20fabric%20sourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageSquare size={16} /> International Desk on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Quality Assurance Spotlight */}
      <section className="section-padding" style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
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
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid #E2E8F0'
                }}
              />
            </div>

            <div>
              <span className="section-kicker">INDEPENDENT IN-HOUSE VERIFICATION</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', marginBottom: '1rem', color: '#0F172A' }}>
                ASTM D5430 4-Point Inspection on Every Roll
              </h2>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
                We believe trust is built on verifiable measurements. When fabric arrives from weaving and dyeing partners, our central quality inspection team inspects each roll over continuous illumination tables.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', marginBottom: '1.75rem' }}>
                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ display: 'block', color: '#C51E3A', fontSize: '1.05rem' }}>&lt; 2.5%</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Residual Shrinkage</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ display: 'block', color: '#0F172A', fontSize: '1.05rem' }}>Grade 4+</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Color Fastness</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ display: 'block', color: '#0F172A', fontSize: '1.05rem' }}>± 3% GSM</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Weight Tolerance</span>
                </div>

                <div style={{ backgroundColor: '#FFFFFF', padding: '0.85rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                  <strong style={{ display: 'block', color: '#D4AF37', fontSize: '1.05rem' }}>100% Zero</strong>
                  <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Severe Defect Allowance</span>
                </div>
              </div>

              <button
                onClick={() => { setActivePage('quality'); window.scrollTo(0,0); }}
                className="btn btn-outline-navy"
              >
                Review Full QA Testing Protocols <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section style={{ backgroundColor: '#C51E3A', color: '#FFFFFF', padding: 'clamp(2.5rem, 5vw, 4rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', marginBottom: '0.875rem' }}>
            Ready to Streamline Your Textile Sourcing?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', maxWidth: '650px', margin: '0 auto 1.75rem auto', lineHeight: '1.7' }}>
            Connect with our Erode sourcing headquarters. We will analyze your fabric reference, provide sample swatches, and quote volume-tiered factory prices within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-navy btn-lg"
              style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}
            >
              Request Custom Quote
            </button>
            <a
              href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20discuss%20a%20fabric%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={18} /> Chat with Sourcing Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
