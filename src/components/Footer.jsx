import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, ExternalLink, Award, Globe, ArrowUpRight } from 'lucide-react';
import { VTLogo } from './VTLogo';

export const Footer = ({ setActivePage, onOpenRFQ }) => {
  const scrollTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#0F172A',
      color: '#E2E8F0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Top Callout Banner */}
        <div style={{
          backgroundColor: '#1E293B',
          borderRadius: '16px',
          padding: '2.5rem',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          marginBottom: '4.5rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.6875rem' }}>B2B SOURCING DESK</span>
              <span className="badge badge-live" style={{ fontSize: '0.6875rem' }}>Accepting Bulk Orders 2026 / 2027</span>
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Planning Your Next Season's Fabric Sourcing Program?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '1rem', maxWidth: '620px' }}>
              Skip multiple vendor friction. Submit your fabric target weight, pantone reference, or physical counter sample for immediate lab-dip turnaround and volume pricing.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary"
            >
              Request Custom Quote <ArrowUpRight size={16} />
            </button>
            <a 
              href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20discuss%20a%20bulk%20fabric%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} /> WhatsApp Directly
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Column 1: Brand & Legacy */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <VTLogo size={42} variant="light" />
            </div>
            
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Operating since 1998, Vasanthaa Textiless delivers centralized textile sourcing, weaving coordination, precision dyeing, and quality inspection across South India's premier industrial textile cluster.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', color: '#D4AF37' }}>
                ✓ Sole Proprietorship
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', color: '#D4AF37' }}>
                ✓ 28+ Years Legacy
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', color: '#D4AF37' }}>
                ✓ 2M+ Meters Annually
              </span>
            </div>
          </div>

          {/* Column 2: Key Fabrics */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.25rem' }}>
              Signature Fabrics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Cotton Twill (2/1 & 3/1 Weaves)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Heavy Cotton Drill (Uniform Grade)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Linen Dyed & Printed Fabrics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Fluid Viscose & Rayon Twill
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Reversible Double Cloth
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Aerated Seersucker & Gauze
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  GOTS Certified Organic Cottons
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Quality */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.25rem' }}>
              Operations & QC
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li>
                <button onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  5-Stage Sourcing Coordination
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  ASTM 4-Point Fabric Inspection
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Lab Dip & Pantone TCX Matching
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Zero Liquid Discharge (ZLD) Dyeing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Founder Story: Mr. Vaitheswaran
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('resources')} style={{ background: 'none', border: 'none', color: '#CBD5E1', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  B2B Fabric Sourcing Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.25rem' }}>
              Registered Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: '#CBD5E1', lineHeight: '1.6' }}>
                  3, Vasuki St, 2nd Street,<br />
                  Erode Fort, Erode,<br />
                  Tamil Nadu 638001, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} color="#D4AF37" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:+919786222580" style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 97862 22580</a>
                  <a href="tel:+919842222580" style={{ color: '#CBD5E1', fontSize: '0.8125rem' }}>+91 98422 22580 (Direct)</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} color="#C51E3A" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="mailto:vasanthaatextiless@gmail.com" style={{ color: '#CBD5E1' }}>
                    vasanthaatextiless@gmail.com
                  </a>
                  <a href="mailto:contact@vasanthaatextiless.in" style={{ color: '#94A3B8', fontSize: '0.8125rem' }}>
                    contact@vasanthaatextiless.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Globe size={16} color="#D4AF37" style={{ flexShrink: 0 }} />
                <span style={{ color: '#94A3B8', fontSize: '0.8125rem' }}>
                  Active GSTIN (TN-33) • Registered IEC • Ex-Mill / FOB / CIF
                </span>
              </div>

              <div style={{ color: '#D4AF37', fontSize: '0.75rem', fontWeight: 600, paddingLeft: '1.75rem' }}>
                Desk Hours: Mon – Sat: 9:00 AM – 7:30 PM IST
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Compliance & Copyright Strip */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: '#64748B'
        }}>
          <div>
            © 1998 – {new Date().getFullYear()} VASANTHAA TEXTILESS. All Rights Reserved. Sole Proprietorship.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Erode Textile Corridor, Tamil Nadu</span>
            <span>Strict Client & Mill Confidentiality Protected</span>
            <button 
              onClick={() => scrollTo('contact')} 
              style={{ background: 'none', border: 'none', color: '#D4AF37', cursor: 'pointer', padding: 0 }}
            >
              Direct RFQ Concierge
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
