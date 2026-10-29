import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ShoppingBag, Menu, X, ArrowUpRight, ChevronRight, Mail } from 'lucide-react';
import { VTLogo } from './VTLogo';

export const Header = ({ activePage, setActivePage, swatchCount, onOpenRFQ, onOpenSwatchDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavItems = [
    { id: 'catalog', label: 'Fabrics' },
    { id: 'garments', label: 'Garments' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'quality', label: 'Quality' },
    { id: 'about', label: 'About' },
    { id: 'resources', label: 'FAQs' }
  ];

  const mobileNavItems = [
    { id: 'catalog', label: 'Fabric Catalog', desc: '12+ Specialty Woven Substrates & Specifications' },
    { id: 'garments', label: 'Garments OEM', desc: 'Dhotis, Kurtas, Woven Shirts & Canvas Bags' },
    { id: 'capabilities', label: 'Capabilities', desc: 'Weaving, Eco-Dyeing, Rotary & Digital Print' },
    { id: 'quality', label: 'Quality Assurance', desc: 'ASTM D5430 4-Point Roll-by-Roll Inspection' },
    { id: 'about', label: 'About Our Heritage', desc: 'Estd. 1998 in Erode • 10+ Years Isha Supplier' },
    { id: 'resources', label: 'Sourcing FAQs', desc: 'MOQs, Lab-Dip Turnarounds & FOB/CIF Terms' },
    { id: 'contact', label: 'Contact & Quote', desc: 'Direct Mill Headquarters & Production Desks' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sleek Minimal Utility Strip */}
      <div className="top-utility-bar" style={{
        backgroundColor: '#0A0A0A',
        color: '#A1A1AA',
        fontSize: '0.75rem',
        letterSpacing: '0.04em',
        borderBottom: '1px solid #27272A',
        padding: '0.5rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Left: Origin & Heritage */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{
              color: '#C51E3A',
              fontWeight: 800,
              fontSize: '0.6875rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              ESTD. 1998
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
            <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Erode, Tamil Nadu</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)' }} className="hide-on-tablet">•</span>
            <span style={{ color: '#A1A1AA' }} className="hide-on-tablet">Central Textile Sourcing & Production</span>
          </div>

          {/* Right: Direct Desk Hotlines */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.75rem' }}>
            <a
              href="tel:+919842222580"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#FFFFFF', textDecoration: 'none', fontWeight: 600 }}
              title="Primary Contact Desk"
            >
              <Phone size={12} color="#C51E3A" /> +91 98422 22580
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <a
              href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20an%20inquiry%20regarding%20bulk%20fabric%20sourcing."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#25D366', textDecoration: 'none', fontWeight: 700 }}
            >
              <MessageSquare size={12} /> WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Architectural Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">

          {/* Official Simplistic & Unique VT Trademark Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="header-logo-wrap"
          >
            <VTLogo size={38} variant="dark" />
          </div>

          {/* Desktop Navigation Links — Spacious, Refined Luxury Spacing */}
          <nav className="desktop-nav">
            <ul className="desktop-nav-list">
              {desktopNavItems.map(item => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id} style={{ flexShrink: 0 }}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="desktop-nav-btn"
                      style={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#0A0A0A' : '#52525B'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#0A0A0A';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#52525B';
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <span style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '0',
                          right: '0',
                          height: '2px',
                          backgroundColor: '#C51E3A',
                          borderRadius: '1px'
                        }} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Controls */}
          <div className="header-actions">

            {/* Swatch Requisition Tray */}
            <button
              onClick={onOpenSwatchDrawer}
              className="header-swatch-btn"
              title="View fabric swatch sample tray"
            >
              <ShoppingBag size={16} color="#0A0A0A" />
              <span className="hide-on-tablet">Swatches</span>
              {swatchCount > 0 ? (
                <span className="swatch-badge">
                  {swatchCount}
                </span>
              ) : null}
            </button>

            {/* Primary Action Button — Adaptive on Phone and Desktop */}
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-sm header-quote-btn"
            >
              <span className="quote-text-full">Request Quote</span>
              <span className="quote-text-short">Quote</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0, padding: 0 }}>
              <li style={{ borderBottom: '1px solid #F1F5F9' }}>
                <button
                  onClick={() => handleNavClick('home')}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 0',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.95rem',
                    fontWeight: activePage === 'home' ? 700 : 500,
                    color: activePage === 'home' ? '#C51E3A' : '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <span>Home</span>
                  <ChevronRight size={16} color={activePage === 'home' ? '#C51E3A' : '#94A3B8'} />
                </button>
              </li>
              {mobileNavItems.map(item => (
                <li key={item.id} style={{ borderBottom: '1px solid #F1F5F9', padding: '0.4rem 0' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.45rem 0',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: activePage === item.id ? 700 : 600,
                      color: activePage === item.id ? '#C51E3A' : '#0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <div style={{ color: activePage === item.id ? '#C51E3A' : '#0A0A0A', fontWeight: activePage === item.id ? 700 : 600 }}>
                        {item.label}
                      </div>
                      {item.desc && (
                        <div style={{ fontSize: '0.75rem', color: '#71717A', fontWeight: 400, marginTop: '0.15rem' }}>
                          {item.desc}
                        </div>
                      )}
                    </div>
                    <ChevronRight size={16} color={activePage === item.id ? '#C51E3A' : '#94A3B8'} />
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRFQ(null);
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
                >
                  <ArrowUpRight size={16} /> Request Bulk Quotation
                </button>
                <a
                  href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20an%20inquiry%20regarding%20bulk%20fabric%20sourcing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.75rem 1rem' }}
                >
                  <MessageSquare size={16} /> WhatsApp Desk (+91 98422 22580)
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingTop: '0.35rem' }}>
                  <a
                    href="tel:+919842222580"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      color: '#0A0A0A',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      fontWeight: 700
                    }}
                  >
                    <Phone size={14} color="#C51E3A" /> Primary: +91 98422 22580
                  </a>
                  <a
                    href="tel:+919786222580"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      color: '#71717A',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      fontWeight: 500
                    }}
                  >
                    Secondary: +91 97862 22580
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>

      <style>{`
        /* Header Container — Spacious Modern Luxury */
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.95rem clamp(1.25rem, 3vw, 3rem);
          max-width: 1440px;
          min-height: 76px;
          box-sizing: border-box;
          gap: 1.5rem;
        }

        /* Logo Wrapper — Unshrinkable Anchor */
        .header-logo-wrap {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          flex-shrink: 0 !important;
          min-width: max-content !important;
          margin-right: clamp(1.5rem, 2.5vw, 3.5rem);
        }

        /* Desktop Nav — Centered With Generous Breathing Room */
        .desktop-nav {
          flex: 1;
          display: none;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: clamp(0.6rem, 1vw, 1rem);
          margin-left: clamp(1.25rem, 2.5vw, 3.5rem);
          flex-shrink: 0;
        }

        /* Desktop Nav List & Buttons — Elegant Editorial Spacing */
        .desktop-nav-list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1.15rem, 2vw, 2.5rem);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-nav-btn {
          background: none;
          border: none;
          padding: 0.5rem 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #4B5563;
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          transition: color 150ms ease;
        }
        .desktop-nav-btn:hover {
          color: #0A0A0A;
        }

        /* Swatches Button */
        .header-swatch-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background-color: transparent;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 0.55rem 0.9rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #18181B;
          cursor: pointer;
          transition: all 150ms ease;
          flex-shrink: 0;
        }
        .header-swatch-btn:hover {
          border-color: #CBD5E1;
          background-color: #F8FAFC;
        }

        .swatch-badge {
          background-color: #C51E3A;
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 9999px;
          margin-left: 0.2rem;
        }

        /* Quote Button */
        .header-quote-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.15rem;
          font-size: 0.8125rem;
          font-weight: 700;
          border-radius: 8px;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }

        .quote-text-short {
          display: none;
        }
        .quote-text-full {
          display: inline;
        }

        /* Mobile Hamburger Button */
        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          min-width: 40px;
          background-color: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 8px;
          color: #0A0A0A;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
          transition: all 150ms ease;
        }
        .mobile-menu-btn:hover {
          background-color: #F8FAFC;
          border-color: #94A3B8;
          color: #C51E3A;
        }

        /* Mobile Nav Drawer */
        .mobile-nav-drawer {
          background-color: #FFFFFF;
          border-top: 1px solid #E2E8F0;
          padding: 1.5rem;
          box-shadow: 0 16px 36px rgba(0,0,0,0.08);
          animation: drawerSlide 200ms ease-out;
        }

        @keyframes drawerSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Breakpoints — Completely Prevents Overlap */
        @media (min-width: 1040px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }

        @media (max-width: 1039px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
          .header-container {
            padding: 0.75rem 1.25rem;
            min-height: 64px;
          }
          .header-logo-wrap {
            margin-right: auto;
          }
          .header-actions {
            margin-left: auto;
            gap: 0.5rem;
          }
          .header-swatch-btn {
            padding: 0.42rem 0.65rem;
            font-size: 0.8rem;
            min-height: 38px;
          }
          .header-quote-btn {
            padding: 0.45rem 0.85rem;
            font-size: 0.78rem;
          }
          .quote-text-full { display: none !important; }
          .quote-text-short { display: inline !important; }
        }

        @media (max-width: 767px) {
          .top-utility-bar { display: none !important; }
        }

        @media (max-width: 1100px) {
          .hide-on-tablet { display: none !important; }
        }

        @media (max-width: 480px) {
          .header-container {
            padding: 0.55rem 0.75rem;
            min-height: 58px;
          }
          .header-actions {
            gap: 0.35rem;
          }
          .header-quote-btn {
            padding: 0.4rem 0.55rem;
            font-size: 0.72rem;
            gap: 0.2rem;
          }
        }

        /* Foldables (Samsung Galaxy Z Fold, etc. 280px - 359px) */
        @media (max-width: 359px) {
          .header-container {
            padding: 0.45rem 0.5rem;
            min-height: 54px;
          }
          .header-logo-wrap {
            margin-right: 0.25rem;
          }
          .header-actions {
            gap: 0.3rem;
          }
          .header-swatch-btn {
            padding: 0.35rem 0.45rem;
            min-height: 34px;
          }
          .header-quote-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            width: 34px;
            height: 34px;
            min-width: 34px;
          }
          .mobile-nav-drawer {
            padding: 1rem 0.75rem;
          }
        }
      `}</style>
    </>
  );
};
