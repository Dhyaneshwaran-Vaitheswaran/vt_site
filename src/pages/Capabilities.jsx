import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Factory, MessageSquare, Layers, Cpu, Droplet, Scissors } from 'lucide-react';
import { CAPABILITIES, GARMENTING_COORDINATION } from '../data/capabilities';

export const Capabilities = ({ onOpenRFQ }) => {
  return (
    <div style={{ backgroundColor: '#FBF9F5', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <section style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '4.5rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>MANUFACTURING COORDINATION & SOURCING</span>
            <h1 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: '1.25rem' }}>
              Extensive Sourcing Capabilities Across the Entire Textile Lifecycle
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              We act as the single operational bridge between your apparel brand and South India's premier spinning, weaving, and wet-processing infrastructure. We engineer the fabric, allocate specialized looms, oversee chemical processing, and enforce strict quality standards.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> Request Sourcing Consultation
              </button>
              <a
                href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20learn%20more%20about%20your%20sourcing%20coordination%20capabilities."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Coordinated Stages Deep-Dive */}
      <section className="section-padding">
        <div className="container">
          
          <div className="section-header">
            <span className="section-kicker">STAGE-BY-STAGE EXECUTION</span>
            <h2 className="section-title">Coordinated Operations & Technical Scope</h2>
            <p className="section-desc">
              Every production order is tracked through strict milestone gates from greige yarn allocation to final roll packaging in Erode.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.step}
                className="b2b-card two-col-layout-responsive"
              >
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-terracotta">STAGE {cap.step}</span>
                    <span style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 600 }}>{cap.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#0F172A', marginBottom: '0.875rem' }}>
                    {cap.title}
                  </h3>

                  <p style={{ color: '#475569', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {cap.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    {cap.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle2 size={18} color="#15803D" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span style={{ color: '#1E293B', fontSize: '0.9rem', fontWeight: 500 }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenRFQ(null)}
                    className="btn btn-outline-navy btn-sm"
                  >
                    Specify Requirements for this Stage →
                  </button>
                </div>

                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  <img
                    src={idx === 0 ? "/images/yarn-cones.webp" : idx === 4 ? "/images/fabric-inspection.webp" : "/images/hero-craft.webp"}
                    alt={cap.title}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    style={{
                      width: '100%',
                      height: 'clamp(240px, 35vw, 340px)',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Downstream Garmenting Coordination */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">VALUE-ADDED SERVICES</span>
            <h2 className="section-title">{GARMENTING_COORDINATION.title}</h2>
            <p className="section-desc">
              {GARMENTING_COORDINATION.description}
            </p>
          </div>

          <div className="grid-4">
            {GARMENTING_COORDINATION.categories.map((cat, i) => (
              <div key={i} className="b2b-card" style={{ borderTop: '3px solid #C51E3A' }}>
                <Scissors size={24} color="#C51E3A" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                  {cat.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6' }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-lg"
            >
              Discuss Full Garment Manufacturing Coordination <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
