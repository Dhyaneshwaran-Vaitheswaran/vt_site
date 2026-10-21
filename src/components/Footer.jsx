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

          {/* Column 2: Key Targeted Fabrics */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.35rem' }}>
              Signature Fabrics
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/fabric/gada-greige-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Gada Fabric (Kora Cloth)
                </a>
              </li>
              <li>
                <a href="/fabric/dyed-woven-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Dyed Woven Fabric (Reactive & Vat)
                </a>
              </li>
              <li>
                <a href="/fabric/printed-poplin-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Print Poplin Fabric (Rotary & Digital)
                </a>
              </li>
              <li>
                <a href="/fabric/double-gauze-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Double Gauze Fabric (Organic Muslin)
                </a>
              </li>
              <li>
                <a href="/fabric/cotton-voile-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Voil Fabric (Cotton Voile)
                </a>
              </li>
              <li>
                <a href="/fabric/cotton-duck-canvas" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Cotton Canvas (8oz - 18oz Duck)
                </a>
              </li>
              <li>
                <a href="/fabric/cotton-drill-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Cotton Drill (3/1 Heavy Twill)
                </a>
              </li>
              <li>
                <a href="/fabric/cotton-twill-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Cotton Twill (2/1 & 3/1 Chinos)
                </a>
              </li>
              <li>
                <a href="/fabric/dobby-woven-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Dobby Woven Fabric (Shirting)
                </a>
              </li>
              <li>
                <a href="/fabric/woven-jacquard-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Woven Jacquard Fabric (Motifs)
                </a>
              </li>
              <li>
                <a href="/fabric/pure-flax-linen" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Flux Fabric (Pure Flax Linen)
                </a>
              </li>
              <li>
                <a href="/fabric/optical-white-pfd-fabric" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  White Fabric (Optical & PFD)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Finished Garments & Operations */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.25rem', borderBottom: '2px solid #C51E3A', display: 'inline-block', paddingBottom: '0.35rem' }}>
              OEM Garments & QC
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <li>
                <a href="/garments/woven-shirts-manufacturer" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  All Woven Shirts Manufacturing
                </a>
              </li>
              <li>
                <a href="/garments/kurta-garment-manufacturer" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Kurtha & Kurtha Pants Wholesale
                </a>
              </li>
              <li>
                <a href="/garments/traditional-dhoti-manufacturer" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  Dhoti Garments & Veshtis (Zari)
                </a>
              </li>
              <li>
                <a href="/garments/cotton-canvas-tote-bags" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  100% Cotton Bags & Canvas Totes
                </a>
              </li>
              <li>
                <a href="/garments/custom-woven-apparel-oem" style={{ color: '#D4D4D8', textDecoration: 'none' }}>
                  All Garments OEM Coordination
                </a>
              </li>
              <li style={{ borderTop: '1px solid #27272A', paddingTop: '0.6rem', marginTop: '0.3rem' }}>
                <a href="/capabilities" style={{ color: '#A1A1AA', textDecoration: 'none' }}>
                  4-Stage Production Coordination
                </a>
              </li>
              <li>
                <a href="/quality-assurance" style={{ color: '#A1A1AA', textDecoration: 'none' }}>
                  ASTM 4-Point Inspection & Lab
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: '#A1A1AA', textDecoration: 'none' }}>
                  Isha Partnership (10+ Years)
                </a>
              </li>
              <li>
                <a href="/resources" style={{ color: '#A1A1AA', textDecoration: 'none' }}>
                  B2B Sourcing Procurement FAQs
                </a>
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
