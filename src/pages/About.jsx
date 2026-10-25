import React from 'react';
import { Award, ShieldCheck, MapPin, Building, Users, Clock, ArrowUpRight, MessageSquare, ArrowRight, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export const About = ({ onOpenRFQ }) => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>

      {/* Header Banner — Pure Black & Bold Red */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
        borderBottom: '1px solid #27272A'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="badge badge-red" style={{ marginBottom: '1rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
              COMPANY PROFILE & 28-YEAR HERITAGE
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Weaving Trust & Operational Excellence Since 1998
            </h1>
            <p style={{ color: '#D4D4D8', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Founded in Erode by Mr. Vaitheswaran, Vasanthaa Textiless has evolved over nearly three decades into a trusted woven textile sourcing, production coordination, and finished apparel supply partner. Proud main supplier to Isha for over 10 consecutive years.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary btn-lg"
              >
                <ArrowUpRight size={18} /> Partner with Vasanthaa
              </button>
              <a
                href="https://wa.me/919842222580?text=Hello%20Mr.%20Vaitheswaran%20and%20Vasanthaa%20Textiless%20team,%20I%20would%20like%20to%20introduce%20our%20apparel%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} /> Connect with Founder Desk (+91 98422 22580)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Evolution Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA', borderBottom: '1px solid #E4E4E7' }}>
        <div className="container">
          <div className="two-col-layout-responsive">

            <div>
              <span className="section-kicker">OUR ORIGINS</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.35rem)', color: '#0A0A0A', marginBottom: '1.25rem', fontWeight: 800 }}>
                From Erode to Global & Spiritual Supply Chains
              </h2>

              <p style={{ color: '#52525B', lineHeight: '1.8', marginBottom: '1.25rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)' }}>
                In 1998, <strong>Mr. Vaitheswaran</strong> established Vasanthaa Textiless at <strong>3, Vasuki Street in Erode</strong>. Located right at the heart of South India's bustling woven fabric markets, the business was built on a foundational philosophy: <em>unwavering integrity, absolute fabric specification compliance, and deep client relationships.</em>
              </p>

              <p style={{ color: '#52525B', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)' }}>
                Over nearly three decades, Vasanthaa Textiless has built deep, long-standing partnerships. Most notably, we have been the <strong>main supplier of Isha for the past decade</strong>, manufacturing millions of meters of pure cotton dhotis, kurtha pants, eco-friendly cotton bags, consecrated rudraksha pouches, and meditation shawls.
              </p>

              <div style={{
                backgroundColor: '#FFFFFF',
                borderLeft: '4px solid #C51E3A',
                border: '1px solid #E4E4E7',
                borderLeftWidth: '4px',
                padding: '1.5rem 1.75rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontStyle: 'italic', color: '#18181B', fontSize: '1rem', margin: 0, lineHeight: 1.7 }}>
                  "A single point of truth in textiles is rare. Our mission is to take full ownership of the technical complexity, so our clients can focus entirely on design, spirituality, and brand growth."
                </p>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#C51E3A', marginTop: '0.65rem' }}>
                  — Mr. Vaitheswaran, Founder
                </div>
              </div>

            </div>

            <div>
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid #27272A',
                backgroundColor: '#0A0A0A',
                color: '#FFFFFF',
                padding: 'clamp(1.75rem, 3.5vw, 3rem)'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '2rem' }}>
                  The Vasanthaa Milestones
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  <div style={{ borderLeft: '2px solid #C51E3A', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#C51E3A', fontWeight: 800 }}>1998</div>
                    <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFFFFF' }}>Founded in Erode</div>
                    <p style={{ fontSize: '0.875rem', color: '#A1A1AA', margin: 0, marginTop: '0.25rem' }}>Commenced woven fabric trade and local coordination in Erode's traditional merchant quarter.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid #C51E3A', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#C51E3A', fontWeight: 800 }}>2014 — PRESENT</div>
                    <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFFFFF' }}>Main Supplier of Isha (10+ Years)</div>
                    <p style={{ fontSize: '0.875rem', color: '#A1A1AA', margin: 0, marginTop: '0.25rem' }}>Manufactured extensive product lines: Dhotis, Kurtha pants, Cotton bags, Rudraksha bags, and Shawls.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid #C51E3A', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#C51E3A', fontWeight: 800 }}>2018</div>
                    <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFFFFF' }}>Zero Liquid Discharge Integration</div>
                    <p style={{ fontSize: '0.875rem', color: '#A1A1AA', margin: 0, marginTop: '0.25rem' }}>Aligned processing exclusively with Tamil Nadu's certified ZLD dyehouses to offer sustainable eco-cottons.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid #C51E3A', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#C51E3A', fontWeight: 800 }}>TODAY</div>
                    <div style={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFFFFF' }}>2M+ Meters Annually & ₹20Cr Volume</div>
                    <p style={{ fontSize: '0.875rem', color: '#A1A1AA', margin: 0, marginTop: '0.25rem' }}>Centralized point of contact serving premier garment exporters and international fashion brands.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Structure & Values */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">GOVERNANCE & INTEGRITY</span>
            <h2 className="section-title">The Sole Proprietorship Advantage</h2>
            <p className="section-desc">
              As an established sole proprietorship, Vasanthaa Textiless offers the agility of rapid executive decisions paired with total legal and operational accountability.
            </p>
          </div>

          <div className="grid-3">
            <div className="b2b-card" style={{ borderTop: '3px solid #C51E3A' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HeartHandshake size={24} color="#C51E3A" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A0A0A', marginBottom: '0.65rem', fontWeight: 700 }}>
                Direct Founder Access
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7', margin: 0 }}>
                No multi-layered corporate bureaucracy. Major production decisions, pricing commitments, and timeline agreements are verified directly by our leadership.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '3px solid #0A0A0A' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#F4F4F5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} color="#0A0A0A" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A0A0A', marginBottom: '0.65rem', fontWeight: 700 }}>
                Strict Confidentiality
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7', margin: 0 }}>
                We fiercely protect our clients' proprietary artwork, custom dobby drafts, and brand specifications. Outsource and mill arrangements remain completely confidential.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '3px solid #C51E3A' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} color="#C51E3A" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0A0A0A', marginBottom: '0.65rem', fontWeight: 700 }}>
                Zero Compromise on Specs
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#52525B', lineHeight: '1.7', margin: 0 }}>
                We do not cut corners on construction density, GSM, or dyestuff quality. If a fabric roll does not meet the agreed master tolerance, it does not leave our central Erode desk.
              </p>
            </div>
          </div>

          {/* Official Commercial Registry Table */}
          <div style={{
            marginTop: '4.5rem',
            backgroundColor: '#FAFAFA',
            borderRadius: '20px',
            border: '1px solid #E4E4E7',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Building size={28} color="#C51E3A" />
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#0A0A0A', margin: 0, fontWeight: 800 }}>
                  Commercial Registry & Statutory Credentials
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#52525B', margin: 0, marginTop: '0.2rem' }}>
                  Official registration credentials for buyer vendor onboarding, credit evaluation, and compliance verification.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem', fontSize: '0.9rem' }}>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Commercial Entity</span>
                <strong style={{ color: '#0A0A0A', fontSize: '1.05rem', fontWeight: 800 }}>Vasanthaa Textiless</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Constitution</span>
                <strong style={{ color: '#0A0A0A', fontWeight: 700 }}>Sole Proprietorship (Est. 1998)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Key Principal / Founder</span>
                <strong style={{ color: '#0A0A0A', fontWeight: 700 }}>Mr. Vaitheswaran</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Registered Office Address</span>
                <strong style={{ color: '#0A0A0A', fontWeight: 700 }}>3, Vasuki St, 2nd St, Erode - 638001</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Goods & Services Tax (GSTIN)</span>
                <strong style={{ color: '#15803D', fontWeight: 700 }}>Active (Tamil Nadu State Code 33)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Import Export Code (IEC)</span>
                <strong style={{ color: '#15803D', fontWeight: 700 }}>Registered & Active for Global Shipments</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Trade Cluster Hub</span>
                <strong style={{ color: '#0A0A0A', fontWeight: 700 }}>Erode Cotton & Woven Corridor (South India)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #E4E4E7', paddingBottom: '0.85rem' }}>
                <span style={{ color: '#71717A', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Key Clientele</span>
                <strong style={{ color: '#C51E3A', fontWeight: 800 }}>Isha (Main Supplier 10+ Years)</strong>
              </div>
            </div>
          </div>

          {/* Flagship Institutional Client Showcase: Isha */}
          <div style={{
            marginTop: '2.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid #E4E4E7',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '14px',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <img src="/images/isha-logo.png" alt="Isha Foundation Logo" style={{ height: '46px', width: 'auto', display: 'block' }} />
              </div>
              <div>
                <span className="badge badge-red" style={{ backgroundColor: '#FEF2F2', color: '#C51E3A', marginBottom: '0.4rem', fontWeight: 800 }}>
                  FLAGSHIP INSTITUTIONAL CLIENT • 10+ YEARS
                </span>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0A0A0A', margin: 0 }}>
                  Primary Textile & Apparel Manufacturer for Isha
                </h4>
                <p style={{ color: '#52525B', fontSize: '0.9rem', margin: '0.35rem 0 0 0', maxWidth: '600px', lineHeight: 1.6 }}>
                  Direct manufacturer and primary coordinator of authentic sadhana dhotis, natural pure cotton kurtas, Save Soil canvas bags, consecrated pouches, and meditation shawls for more than a decade.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '220px' }}>
              <div style={{ fontSize: '0.8125rem', color: '#166534', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#166534" /> 10+ Consecutive Years
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#166534', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#166534" /> Millions of Units & Meters
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#166534', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#166534" /> 100% Zero-Defect Audit Passed
              </div>
            </div>
          </div>


          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-navy btn-lg"
            >
              Discuss Your Sourcing Program with Us <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
