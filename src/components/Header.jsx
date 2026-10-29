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

  const navItems = [
    { id: 'catalog', label: 'Fabric Catalog' },
    { id: 'garments', label: 'Garments OEM' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'about', label: 'About Us' },
    { id: 'resources', label: 'Sourcing FAQs' },
    { id: 'contact', label: 'Contact & Quote' }
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

          {/* Desktop Navigation Links — Responsive Spacing for Laptops & Desktops */}
          <nav className="desktop-nav">
            <ul className="desktop-nav-list">
              {navItems.map(item => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id} style={{ flexShrink: 0 }}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="desktop-nav-btn"
                      style={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#0A0A0A' : '#475569'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#0A0A0A';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#475569';
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <span style={{
                          position: 'absolute',
                          bottom: '0',
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
              {navItems.map(item => (
                <li key={item.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 0',
                      background: 'none',
                      border: 'none',
                      fontSize: '0.95rem',
                      fontWeight: activePage === item.id ? 700 : 500,
                      color: activePage === item.id ? '#C51E3A' : '#0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.label}</span>
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
        /* Header Container */
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1.5rem;
          min-height: 72px;
          box-sizing: border-box;
        }

        /* Logo Wrapper */
        .header-logo-wrap {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          flex-shrink: 0 !important;
          min-width: max-content !important;
          margin-right: clamp(1rem, 2vw, 2.5rem);
        }

        /* Desktop Nav */
        .desktop-nav {
          flex: 1;
          display: none;
          min-width: 0;
        }

        /* Header Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: clamp(0.5rem, 1vw, 0.75rem);
          margin-left: clamp(1rem, 2vw, 2rem);
          flex-shrink: 0;
        }

        /* Desktop Nav List & Buttons */
        .desktop-nav-list {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(0.75rem, 1.3vw, 1.75rem);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-nav-btn {
          background: none;
          border: none;
          padding: 0.5rem 0.15rem;
          font-size: clamp(0.8125rem, 0.9vw, 0.875rem);
          cursor: pointer;
          white-space: nowrap;
          position: relative;
          transition: color 150ms ease;
        }

        /* Swatches Button */
        .header-swatch-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background-color: transparent;
          border: 1px solid #CBD5E1;
          border-radius: 6px;
          padding: 0.5rem 0.75rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #18181B;
          cursor: pointer;
          transition: all 150ms ease;
          flex-shrink: 0;
        }
        .header-swatch-btn:hover {
          border-color: #94A3B8;
          background-color: #F8FAFC;
        }

        .swatch-badge {
          background-color: #C51E3A;
          color: #FFFFFF;
          font-size: 0.6875rem;
          font-weight: 700;
          padding: 0.1rem 0.45rem;
          border-radius: 9999px;
          margin-left: 0.15rem;
        }

        /* Quote Button */
        .header-quote-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.55rem 1rem;
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: 6px;
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
          width: 38px;
          height: 38px;
          min-width: 38px;
          background-color: #FFFFFF;
          border: 1px solid #CBD5E1;
          border-radius: 6px;
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
          padding: 1.25rem 1.5rem;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          animation: drawerSlide 200ms ease-out;
        }

        @keyframes drawerSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Breakpoints */
        /* Desktop Screens (1200px+) */
        @media (min-width: 1200px) {
          .desktop-nav { display: flex !important; align-items: center; justify-content: center; }
          .mobile-menu-btn { display: none !important; }
        }

        /* Compact Desktop & Medium Laptops (1200px - 1320px) */
        @media (min-width: 1200px) and (max-width: 1320px) {
          .desktop-nav-list {
            gap: 0.85rem !important;
          }
          .desktop-nav-btn {
            font-size: 0.8125rem !important;
            padding: 0.5rem 0.15rem !important;
          }
          .header-logo-wrap {
            margin-right: 1.25rem !important;
          }
          .header-actions {
            margin-left: 1.25rem !important;
            gap: 0.5rem !important;
          }
          .header-swatch-btn {
            padding: 0.42rem 0.6rem !important;
            font-size: 0.78rem !important;
          }
          .quote-text-full { display: none !important; }
          .quote-text-short { display: inline !important; }
        }

        /* Tablets, Small Laptops & Mobile Menu (<= 1199px) */
        @media (max-width: 1199px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
          .header-container {
            padding: 0.65rem 1.25rem;
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
            padding: 0.42rem 0.6rem;
            font-size: 0.8rem;
            min-height: 36px;
          }
          .header-quote-btn {
            padding: 0.45rem 0.75rem;
            font-size: 0.75rem;
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
