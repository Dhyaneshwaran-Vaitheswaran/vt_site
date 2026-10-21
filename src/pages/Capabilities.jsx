import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Factory, MessageSquare, Layers, Cpu, Droplet, Scissors, Award } from 'lucide-react';
import { CAPABILITIES, GARMENTING_COORDINATION } from '../data/capabilities';

export const Capabilities = ({ onOpenRFQ }) => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>

      {/* Header Banner — Deep Black & Bold Red */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
        borderBottom: '1px solid #27272A'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="badge badge-red" style={{ marginBottom: '1rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
              4-STAGE FABRIC PIPELINE & GARMENTING
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Precision Sourcing & Manufacturing Coordination Across Erode
            </h1>
            <p style={{ color: '#D4D4D8', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We act as the single operational bridge between your apparel brand and South India's premier shuttleless weaving, dyeing, and finishing infrastructure. We engineer the weave structure, allocate specialized rapier/air-jet looms, supervise eco-compliant wet processing, and enforce strict ASTM 4-point quality inspection.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary btn-lg"
              >
                <ArrowUpRight size={18} /> Request Sourcing Consultation
              </button>
              <a
                href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20learn%20more%20about%20your%20sourcing%20coordination%20capabilities."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} /> WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Coordinated Stages Deep-Dive */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container">

          <div className="section-header">
            <span className="section-kicker">STAGE-BY-STAGE EXECUTION</span>
            <h2 className="section-title">Coordinated Operations & Technical Scope</h2>
            <p className="section-desc">
              Every production order is tracked through strict milestone gates from precision loom orchestration to final ASTM roll packaging in Erode.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 4vw, 4rem)' }}>
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.step}
                className="b2b-card two-col-layout-responsive"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7' }}
              >
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-red" style={{ backgroundColor: '#FEF2F2', color: '#C51E3A' }}>STAGE {cap.step}</span>
                    <span style={{ fontSize: '0.875rem', color: '#52525B', fontWeight: 600 }}>{cap.subtitle}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#0A0A0A', marginBottom: '1rem', fontWeight: 800 }}>
                    {cap.title}
                  </h3>

                  <p style={{ color: '#52525B', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)', lineHeight: '1.75', marginBottom: '1.75rem' }}>
                    {cap.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {cap.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle2 size={18} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span style={{ color: '#18181B', fontSize: '0.925rem', fontWeight: 500 }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenRFQ(null)}
                    className="btn btn-outline-dark"
                  >
                    Specify Requirements for this Stage →
                  </button>
                </div>

                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  <img
                    src={cap.image}
                    alt={cap.imageAlt || cap.title}
                    loading="lazy"
                    decoding="async"
                    width="1376"
                    height="768"
                    style={{
                      width: '100%',
                      height: 'clamp(260px, 35vw, 360px)',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.06)',
                      border: '1px solid #E4E4E7'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Downstream Garmenting Coordination */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E4E4E7' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">VALUE-ADDED SERVICES</span>
            <h2 className="section-title">{GARMENTING_COORDINATION.title}</h2>
            <p className="section-desc">
              {GARMENTING_COORDINATION.description}
            </p>
          </div>

          {/* Garmenting Coordination Facility Banner */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            marginBottom: '3rem',
            boxShadow: '0 16px 36px rgba(0,0,0,0.08)',
            border: '1px solid #E4E4E7',
            maxHeight: '400px'
          }}>
            <img
              src={GARMENTING_COORDINATION.image}
              alt={GARMENTING_COORDINATION.imageAlt}
              loading="lazy"
              decoding="async"
              width="1376"
              height="768"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {GARMENTING_COORDINATION.categories.map((cat, i) => (
              <div key={i} className="b2b-card" style={{ borderTop: '3px solid #C51E3A', padding: '2rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '10px',
                  backgroundColor: '#FEF2F2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  <Scissors size={22} color="#C51E3A" />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#0A0A0A', marginBottom: '0.65rem', fontWeight: 700 }}>
                  {cat.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7', margin: 0 }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
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
