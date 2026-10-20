import React from 'react';
import { Award, ShieldCheck, MapPin, Building, Users, Clock, ArrowUpRight, MessageSquare, ArrowRight, HeartHandshake } from 'lucide-react';

export const About = ({ onOpenRFQ }) => {
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
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>COMPANY PROFILE & HERITAGE</span>
            <h1 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: '1.25rem' }}>
              Weaving Trust & Operational Excellence Since 1998
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Founded in Erode Fort by Mr. Vaitheswaran, Vasanthaa Textiless has evolved over 28 years from a local fabric house into an established end-to-end textile sourcing, production coordination, and supply partner for brands worldwide.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> Partner with Vasanthaa
              </button>
              <a
                href="https://wa.me/919786222580?text=Hello%20Mr.%20Vaitheswaran%20and%20Vasanthaa%20Textiless%20team,%20I%20would%20like%20to%20introduce%20our%20apparel%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> Connect with Founder Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Evolution Section */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="two-col-layout-responsive">
            
            <div>
              <span className="section-kicker">OUR ORIGINS</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: '#0F172A', marginBottom: '1.25rem' }}>
                From Erode Fort to Global Garment Supply Chains
              </h2>
              
              <p style={{ color: '#64748B', lineHeight: '1.8', marginBottom: '1.25rem', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
                In 1998, <strong>Mr. Vaitheswaran</strong> established Vasanthaa Textiless at <strong>3, Vasuki Street in historic Erode Fort</strong>. Located right at the heart of South India's bustling woven fabric markets, the business was built on a foundational philosophy: <em>unwavering integrity, absolute fabric specification compliance, and deep client relationships.</em>
              </p>

              <p style={{ color: '#64748B', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 1.8vw, 1rem)' }}>
                Over nearly three decades, as garment manufacturing scaled across India and international buyers sought reliable Indian textile sourcing, Vasanthaa Textiless recognized the growing complexity of the industry. Brands didn't just need fabric—they needed a reliable partner who could navigate the fragmented landscape of spinning mills, specialized air-jet and rapier weavers, and environmental dyehouses.
              </p>

              <div style={{
                backgroundColor: '#F8FAFC',
                borderLeft: '4px solid #C51E3A',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 8px 8px 0',
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontStyle: 'italic', color: '#1E293B', fontSize: '0.95rem', margin: 0 }}>
                  "A single point of truth in textiles is rare. Our mission is to take full ownership of the technical complexity, so our clients can focus entirely on design and garment sales."
                </p>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#C51E3A', marginTop: '0.5rem' }}>
                  — Mr. Vaitheswaran, Founder
                </div>
              </div>

            </div>

            <div>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid #E2E8F0',
                backgroundColor: '#0F172A',
                color: '#FFFFFF',
                padding: 'clamp(1.25rem, 3vw, 2.5rem)'
              }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#D4AF37', marginBottom: '1.5rem' }}>
                  The Vasanthaa Milestones
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.4)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 700 }}>1998</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>Founded in Erode Fort</div>
                    <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: 0 }}>Commenced woven fabric trade and local coordination in Erode's traditional merchant quarter.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.4)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 700 }}>2008</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>Shuttleless Airjet & Rapier Network</div>
                    <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: 0 }}>Expanded coordination to high-speed electronic looms for uniform-grade drills and fine poplins.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.4)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 700 }}>2018</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>Zero Liquid Discharge Integration</div>
                    <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: 0 }}>Aligned processing exclusively with Tamil Nadu's certified ZLD dyehouses to offer sustainable eco-cottons.</p>
                  </div>

                  <div style={{ borderLeft: '2px solid rgba(212, 175, 55, 0.4)', paddingLeft: '1.25rem' }}>
                    <div style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 700 }}>TODAY</div>
                    <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>2M+ Meters Annually & ₹20Cr Volume</div>
                    <p style={{ fontSize: '0.8125rem', color: '#94A3B8', margin: 0 }}>Centralized point of contact serving premier garment exporters and international fashion brands.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Corporate Structure & Values */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">GOVERNANCE & INTEGRITY</span>
            <h2 className="section-title">The Sole Proprietorship Advantage</h2>
            <p className="section-desc">
              As an established sole proprietorship, Vasanthaa Textiless offers the agility of rapid executive decisions paired with total legal and operational accountability.
            </p>
          </div>

          <div className="grid-3">
            <div className="b2b-card">
              <HeartHandshake size={28} color="#C51E3A" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Direct Founder Access
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.7' }}>
                No multi-layered corporate bureaucracy. Major production decisions, pricing commitments, and timeline agreements are verified directly by our leadership.
              </p>
            </div>

            <div className="b2b-card">
              <ShieldCheck size={28} color="#D4AF37" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Strict Confidentiality
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.7' }}>
                We fiercely protect our clients' proprietary artwork, custom dobby drafts, and brand specifications. Outsource and mill arrangements remain completely confidential.
              </p>
            </div>

            <div className="b2b-card">
              <Award size={28} color="#15803D" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Zero Compromise on Specs
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.7' }}>
                We do not cut corners on yarn count, GSM, or dyestuff quality. If a fabric roll does not meet the agreed master tolerance, it does not leave our central Erode desk.
              </p>
            </div>
          </div>

          {/* Official Commercial Registry & Credentials Table */}
          <div style={{
            marginTop: '4rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '2.5rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Building size={24} color="#C51E3A" />
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#0F172A', margin: 0 }}>
                  Commercial Registry & Statutory Credentials
                </h3>
                <p style={{ fontSize: '0.8125rem', color: '#64748B', margin: 0 }}>
                  Official registration credentials for buyer vendor onboarding, credit evaluation, and compliance verification.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem', fontSize: '0.875rem' }}>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Commercial Entity</span>
                <strong style={{ color: '#0F172A', fontSize: '1rem' }}>Vasanthaa Textiless</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Constitution</span>
                <strong style={{ color: '#0F172A' }}>Sole Proprietorship (Est. 1998)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Principal / Founder</span>
                <strong style={{ color: '#0F172A' }}>Mr. Vaitheswaran</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Registered Office Address</span>
                <strong style={{ color: '#0F172A' }}>3, Vasuki St, 2nd St, Erode Fort - 638001</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Goods & Services Tax (GSTIN)</span>
                <strong style={{ color: '#15803D' }}>Active (Tamil Nadu State Code 33)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Import Export Code (IEC)</span>
                <strong style={{ color: '#15803D' }}>Registered & Active for Global Shipments</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Trade Cluster Hub</span>
                <strong style={{ color: '#0F172A' }}>Erode Cotton & Woven Corridor (South India)</strong>
              </div>
              <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '0.75rem' }}>
                <span style={{ color: '#64748B', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Banking & Remittance</span>
                <strong style={{ color: '#0F172A' }}>SBI / HDFC Bank (RTGS / NEFT / Wire / LC)</strong>
              </div>
            </div>
          </div>

          {/* Official Trademark & Brand Identity Section */}
          <div style={{
            marginTop: '3.5rem',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            padding: 'clamp(1.25rem, 3vw, 2.5rem)',
            boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
          }}>
            <div className="two-col-layout-responsive">
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>PROPRIETARY BRAND IDENTITY</span>
                <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', color: '#FFFFFF', marginBottom: '0.875rem' }}>
                  The Official "VT" Trademark
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  Our brand emblem unites the letters <strong>'V'</strong> and <strong>'T'</strong> in an architectural, simplistic geometry that mimics the interlocking of warp and weft threads on a precision loom. Cast in our signature crimson red with fine gold accents, the mark represents our 28-year heritage of woven craftsmanship and commitment to quality.
                </p>
                <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap', fontSize: '0.8125rem' }}>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.65rem', borderRadius: '4px', color: '#D4AF37' }}>
                    ✓ Simplistic & Minimalist Monogram
                  </span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.65rem', borderRadius: '4px', color: '#D4AF37' }}>
                    ✓ Signature Crimson Red (#C51E3A)
                  </span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.35rem 0.65rem', borderRadius: '4px', color: '#D4AF37' }}>
                    ✓ Ready for Trademark Registration
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  maxWidth: '240px',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                }}>
                  <img 
                    src="/images/vt-monogram-icon.jpg" 
                    alt="Official VT Trademark Monogram"
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '0.75rem' }} 
                  />
                  <div style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>
                    VT Trademark
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#C51E3A', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Vasanthaa Textiless
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
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
