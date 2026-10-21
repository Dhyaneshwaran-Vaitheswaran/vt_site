import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, MessageSquare, ShoppingBag, ShieldCheck, FileCheck, Layers, Sliders, ChevronRight, Printer, Truck } from 'lucide-react';
import { FABRICS } from '../data/fabrics';

export const FabricDetail = ({ fabric, onBack, onAddSwatch, isSwatchAdded, onOpenRFQ, onSelectFabric }) => {
  if (!fabric) return null;

  const relatedFabrics = FABRICS.filter(f => f.id !== fabric.id && (f.category === fabric.category || f.fiber.includes('Cotton'))).slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `Hello Vasanthaa Textiless,\n\nI am inquiring about *${fabric.name}* (${fabric.weave}).\n` +
      `• Weight: ${fabric.gsm}\n` +
      `• Width: ${fabric.width}\n` +
      `• Standard Bulk MOQ: ${fabric.moqBulk}\n\n` +
      `Could you provide current mill pricing and sample lead times?`
    );
    window.open(`https://wa.me/919786222580?text=${msg}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>

      {/* Breadcrumb Bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '0.875rem 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748B' }}>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#0A0A0A',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: 0
            }}
          >
            <ArrowLeft size={16} /> Back to Catalog
          </button>
          <span>/</span>
          <span>{fabric.category}</span>
          <span>/</span>
          <span style={{ color: '#C51E3A', fontWeight: 600 }}>{fabric.name}</span>
        </div>
      </div>

      {/* Main Fabric Spec Sheet */}
      <section style={{ paddingTop: '2.5rem' }}>
        <div className="container">

          <div className="detail-grid-responsive">

            {/* Left Column: Authentic Fabric Swatch Media */}
            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                border: '1px solid #E2E8F0',
                position: 'relative',
                marginBottom: '1.5rem'
              }}>
                <img
                  src={fabric.image}
                  alt={`${fabric.name} high-res woven fabric swatch`}
                  className="detail-img-responsive"
                  width="1200"
                  height="896"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {fabric.badge && (
                    <span className="badge badge-gold">{fabric.badge}</span>
                  )}
                  <span className="badge badge-navy" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
                    {fabric.weave}
                  </span>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <img src="/images/vt-monogram.svg" alt="VT" style={{ width: '14px', height: '14px' }} />
                  <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.06em' }}>
                    VT MILL CERTIFIED
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                <button
                  onClick={() => onOpenRFQ(fabric)}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  <ArrowUpRight size={18} /> Request Bulk Quotation (Factory-Direct)
                </button>

                <div className="detail-sub-btn-grid">
                  <button
                    onClick={() => onAddSwatch(fabric)}
                    className="btn btn-outline-navy"
                    style={{
                      backgroundColor: isSwatchAdded ? '#DCFCE7' : 'transparent',
                      borderColor: isSwatchAdded ? '#15803D' : 'var(--color-primary-navy)',
                      color: isSwatchAdded ? '#15803D' : 'var(--color-primary-navy)',
                      width: '100%',
                      padding: '0.75rem 0.5rem',
                      fontSize: '0.85rem'
                    }}
                  >
                    {isSwatchAdded ? <Check size={16} /> : <ShoppingBag size={16} />}
                    <span>{isSwatchAdded ? 'Swatch Added' : 'Add to Cart'}</span>
                  </button>

                  <button
                    onClick={handleWhatsAppInquiry}
                    className="btn btn-whatsapp"
                    style={{ width: '100%', padding: '0.75rem 0.5rem', fontSize: '0.85rem' }}
                  >
                    <MessageSquare size={16} /> WhatsApp Inquiry
                  </button>
                </div>

                <button
                  onClick={() => window.print()}
                  className="btn btn-outline-navy"
                  style={{ width: '100%', fontSize: '0.85rem', gap: '0.5rem', justifyContent: 'center' }}
                >
                  <Printer size={15} /> Print / Export Technical Data Sheet (PDF)
                </button>
              </div>

              {/* Quality Guarantee Box */}
              <div style={{
                marginTop: '1.75rem',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}>
                <ShieldCheck size={22} color="#15803D" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <div style={{ fontSize: '0.8125rem', color: '#475569', lineHeight: '1.6' }}>
                  <strong style={{ color: '#0A0A0A', display: 'block', marginBottom: '0.2rem' }}>
                    Certified ASTM D5430 4-Point Inspection
                  </strong>
                  Every roll of this fabric is verified on illuminated light tables in Erode. We guarantee &lt; 2.5% shrinkage, zero color bleeding, and roll-by-roll GSM consistency.
                </div>
              </div>

            </div>

            {/* Right Column: Full Technical Spec Sheet */}
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#C51E3A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {fabric.category}
              </div>

              <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', color: '#0A0A0A' }}>
                {fabric.name}
              </h1>

              <p style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.0625rem)', color: '#64748B', lineHeight: '1.7', marginBottom: '2rem' }}>
                {fabric.description}
              </p>

              {/* Specification Table */}
              <h3 style={{ fontSize: '1.15rem', color: '#0A0A0A', marginBottom: '0.5rem' }}>
                Technical Specifications & Weave Architecture
              </h3>

              <div className="table-responsive">
                <table className="spec-table">
                  <tbody>
                    <tr>
                      <td>Fiber Composition</td>
                      <td><strong>{fabric.fiber}</strong></td>
                    </tr>
                    <tr>
                      <td>Weave Construction</td>
                      <td>{fabric.weave}</td>
                    </tr>
                    <tr>
                      <td>Weight (GSM)</td>
                      <td><strong style={{ color: '#C51E3A' }}>{fabric.gsm}</strong></td>
                    </tr>
                    <tr>
                      <td>Yarn Count / Construction</td>
                      <td>{fabric.yarnCount}</td>
                    </tr>
                    <tr>
                      <td>Finished Usable Width</td>
                      <td>{fabric.width}</td>
                    </tr>
                    <tr>
                      <td>Available Finish Treatments</td>
                      <td>{fabric.finish}</td>
                    </tr>
                    <tr>
                      <td>Sampling / Prototype MOQ</td>
                      <td>{fabric.moqSample}</td>
                    </tr>
                    <tr>
                      <td>Production Bulk MOQ</td>
                      <td><strong>{fabric.moqBulk}</strong></td>
                    </tr>
                    <tr>
                      <td>Estimated Lead Time</td>
                      <td>{fabric.leadTime} (Lab-dips in 3-5 days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', color: '#0A0A0A', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Key Performance Characteristics
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {fabric.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#334155' }}>
                      <Check size={16} color="#15803D" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Garment Applications */}
              <div>
                <h4 style={{ fontSize: '1rem', color: '#0A0A0A', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recommended Apparel Applications
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {fabric.applications.map((app, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #CBD5E1',
                        borderRadius: '6px',
                        padding: '0.4rem 0.85rem',
                        fontSize: '0.8125rem',
                        color: '#0A0A0A',
                        fontWeight: 600
                      }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Export Dispatch & Commercial Logistics */}
              <div style={{
                marginTop: '2.5rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '1.25rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
              }}>
                <h4 style={{ fontSize: '0.95rem', color: '#0A0A0A', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <Truck size={17} color="#C51E3A" /> Global Export Logistics & Mill Standards
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem', fontSize: '0.8125rem' }}>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Container Seaports</span>
                    <strong style={{ color: '#0A0A0A' }}>Tuticorin VOC (~340 km) / Chennai (~400 km)</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Air Cargo Port</span>
                    <strong style={{ color: '#0A0A0A' }}>Coimbatore CJB Airport (95 km)</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Export Packaging</span>
                    <strong style={{ color: '#0A0A0A' }}>Double Poly Roll + Moisture Barrier</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B', display: 'block', marginBottom: '0.2rem' }}>Lab Fastness Rating</span>
                    <strong style={{ color: '#15803D' }}>ISO 105 Grade 4-5 • Shrinkage &lt; 2.5%</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Technical Sourcing & Procurement FAQs */}
          {fabric.faqs && fabric.faqs.length > 0 && (
            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '3rem', marginTop: '3rem', marginBottom: '2.5rem' }}>
              <div style={{ maxWidth: '840px' }}>
                <span className="badge badge-red" style={{ marginBottom: '0.75rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
                  TECHNICAL SPECIFICATION & BUYER FAQS
                </span>
                <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#0A0A0A', marginBottom: '1.5rem', fontWeight: 800 }}>
                  Frequently Asked Questions About {fabric.name}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {fabric.faqs.map((faq, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        backgroundColor: '#FAFAFA',
                        border: '1px solid #E4E4E7',
                        borderRadius: '12px',
                        padding: '1.25rem 1.5rem'
                      }}
                    >
                      <h4 style={{ fontSize: '1rem', color: '#0A0A0A', fontWeight: 700, marginBottom: '0.5rem' }}>
                        {faq.q}
                      </h4>
                      <p style={{ fontSize: '0.925rem', color: '#52525B', lineHeight: '1.7', margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Related Fabrics Section */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '3.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', color: '#0A0A0A' }}>
                Complementary Fabric Substrates
              </h3>
              <button
                onClick={onBack}
                style={{ background: 'none', border: 'none', color: '#C51E3A', fontWeight: 600, cursor: 'pointer' }}
              >
                View Full Catalog →
              </button>
            </div>

            <div className="grid-3">
              {relatedFabrics.map(rel => (
                <div
                  key={rel.id}
                  className="b2b-card"
                  style={{ padding: '1.25rem', cursor: 'pointer' }}
                  onClick={() => onSelectFabric(rel)}
                >
                  <img
                    src={rel.image}
                    alt={rel.name}
                    style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#C51E3A', fontWeight: 700, textTransform: 'uppercase' }}>
                    {rel.category}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.35rem' }}>
                    {rel.name}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: '#64748B', marginBottom: '0.75rem' }}>
                    {rel.weave} • {rel.gsm}
                  </p>
                  <div style={{ color: '#0A0A0A', fontSize: '0.8125rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    Inspect Technical Sheet <ChevronRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

