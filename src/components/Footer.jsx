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
      backgroundColor: '#0A0A0A',
      color: '#E4E4E7',
      borderTop: '1px solid #27272A',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">

        {/* Top Callout Banner */}
        <div className="footer-banner-responsive" style={{
          backgroundColor: '#18181B',
          border: '1px solid #27272A',
          borderRadius: '18px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
              <span className="badge badge-red" style={{ fontSize: '0.6875rem' }}>B2B PRODUCTION DESK</span>
              <span className="badge badge-live" style={{ fontSize: '0.6875rem' }}>Accepting Bulk Orders 2026 / 2027</span>
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', marginBottom: '0.5rem', fontWeight: 700 }}>
              Planning Your Next Season's Fabric Sourcing Program?
            </h3>
            <p style={{ color: '#A1A1AA', fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)', maxWidth: '640px', lineHeight: 1.7 }}>
              Skip multiple vendor friction. Submit your fabric target weight, pantone reference, or physical counter sample for immediate lab-dip turnaround and volume pricing.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-lg"
            >
              Request Custom Quote <ArrowUpRight size={16} />
            </button>
            <a
              href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20discuss%20a%20bulk%20fabric%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageSquare size={16} /> WhatsApp Directly
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="footer-cols-responsive">

          {/* Column 1: Brand & Legacy */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <VTLogo size={42} variant="light" />
            </div>

            <p style={{ color: '#A1A1AA', fontSize: '0.9rem', lineHeight: '1.75', marginBottom: '1.5rem' }}>
              Operating since 1998, Vasanthaa Textiless delivers centralized textile sourcing, weaving coordination, precision dyeing, and quality inspection across South India's premier industrial textile cluster. Trusted main supplier to Isha for over a decade.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ backgroundColor: '#18181B', border: '1px solid #27272A', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
                ✓ Sole Proprietorship
              </span>
              <span style={{ backgroundColor: '#18181B', border: '1px solid #27272A', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
                ✓ 28+ Years Legacy
              </span>
              <span style={{ backgroundColor: '#18181B', border: '1px solid #27272A', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', color: '#C51E3A', fontWeight: 700 }}>
                ✓ 10+ Years Isha Supplier
              </span>
            </div>
          </div>

          {/* Column 2: Key Fabrics */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Signature Fabrics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Cotton Twill (2/1 & 3/1 Weaves)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Heavy Cotton Drill (Uniform Grade)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Linen Dyed & Printed Fabrics
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Fluid Viscose & Rayon Twill
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Reversible Double Cloth
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Aerated Seersucker & Gauze
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  GOTS Certified Organic Cottons
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Quality */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Operations & QC
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <button onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  4-Stage Production Coordination
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  ASTM 4-Point Fabric Inspection
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('quality')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Lab Dip & Pantone TCX Matching
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('capabilities')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Zero Liquid Discharge (ZLD) Dyeing
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  Founder Story: Mr. Vaitheswaran
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('resources')} style={{ background: 'none', border: 'none', color: '#D4D4D8', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  B2B Sourcing FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Registered Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: '#D4D4D8', lineHeight: '1.6' }}>
                  3, Vasuki St, 2nd Street,<br />
                  Erode, Tamil Nadu 638001, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={16} color="#C51E3A" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:+919786222580" style={{ color: '#FFFFFF', fontWeight: 600 }}>+91 97862 22580</a>
                  <a href="tel:+919842222580" style={{ color: '#A1A1AA', fontSize: '0.8125rem' }}>+91 98422 22580 (Direct)</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={16} color="#C51E3A" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="mailto:vasanthaatextiless@gmail.com" style={{ color: '#D4D4D8' }}>
                    vasanthaatextiless@gmail.com
                  </a>
                  <a href="mailto:contact@vasanthaatextiless.in" style={{ color: '#A1A1AA', fontSize: '0.8125rem' }}>
                    contact@vasanthaatextiless.in
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Globe size={16} color="#C51E3A" style={{ flexShrink: 0 }} />
                <span style={{ color: '#A1A1AA', fontSize: '0.8125rem' }}>
                  Active GSTIN (TN-33) • Registered IEC • Ex-Mill / FOB / CIF
                </span>
              </div>

              <div style={{ color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 600, paddingLeft: '1.75rem' }}>
                Desk Hours: Mon – Sat: 9:00 AM – 7:30 PM IST
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Compliance & Copyright Strip */}
        <div style={{
          borderTop: '1px solid #27272A',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: '#A1A1AA'
        }}>
          <div>
            © 1998 – {new Date().getFullYear()} VASANTHAA TEXTILESS. All Rights Reserved. Sole Proprietorship.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Erode Textile Corridor, Tamil Nadu</span>
            <span>Strict Client & Mill Confidentiality Protected</span>
            <button
              onClick={() => scrollTo('contact')}
              style={{ background: 'none', border: 'none', color: '#C51E3A', cursor: 'pointer', padding: 0, fontWeight: 700 }}
            >
              Direct RFQ Concierge
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
