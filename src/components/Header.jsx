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
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'quality', label: 'Quality Assurance' },
    { id: 'about', label: 'About Us' },
    { id: 'resources', label: 'Sourcing Guides' },
    { id: 'contact', label: 'Contact & Quote' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Refined Industrial Utility Strip */}
      <div style={{
        backgroundColor: '#0F172A',
        color: '#94A3B8',
        fontSize: '0.75rem',
        letterSpacing: '0.03em',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.4rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          {/* Left: Origin, Hub & Commercial Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{
              color: '#D4AF37',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.6875rem'
            }}>
              ESTD. 1998
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <span style={{ color: '#CBD5E1' }}>Erode Fort, Tamil Nadu</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <span style={{ color: '#94A3B8' }} className="hide-on-mobile">Central Textile Sourcing & Production • GST & IEC Registered • Mon–Sat 9AM–7:30PM IST</span>
          </div>

          {/* Right: Direct B2B Contact Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.75rem', flexWrap: 'wrap' }}>
            <a 
              href="mailto:vasanthaatextiless@gmail.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#CBD5E1', fontWeight: 500 }}
              className="hide-on-mobile"
            >
              <Mail size={12} color="#D4AF37" /> vasanthaatextiless@gmail.com
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }} className="hide-on-mobile">|</span>
            <a 
              href="tel:+919786222580" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0', fontWeight: 500 }}
            >
              <Phone size={12} color="#D4AF37" /> +91 97862 22580
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <a 
              href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20an%20inquiry%20regarding%20bulk%20fabric%20sourcing." 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#25D366', fontWeight: 600 }}
            >
              <MessageSquare size={12} /> WhatsApp Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Clean Architectural Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          minHeight: '66px'
        }}>
          
          {/* Official Simplistic & Unique VT Trademark Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              flexShrink: 0,
              marginRight: '1rem'
            }}
          >
            <VTLogo size={38} variant="dark" />
          </div>

          {/* Desktop Navigation Links — Clean, Single-Line, Generous Spacing */}
          <nav className="desktop-nav" style={{ flex: 1, display: 'none' }}>
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              {navItems.map(item => {
                const isActive = activePage === item.id;
                return (
                  <li key={item.id} style={{ flexShrink: 0 }}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '0.5rem 0',
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#0F172A' : '#475569',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        transition: 'color 150ms ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = '#0F172A';
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexShrink: 0
          }}>
            
            {/* Swatch Requisition Tray */}
            <button
              onClick={onOpenSwatchDrawer}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                backgroundColor: swatchCount > 0 ? '#F1F5F9' : 'transparent',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '0.5rem 0.75rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#1E293B',
                cursor: 'pointer',
                transition: 'all 150ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#94A3B8';
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.backgroundColor = swatchCount > 0 ? '#F1F5F9' : 'transparent';
              }}
              title="View fabric swatch sample tray"
            >
              <ShoppingBag size={15} color="#0F172A" />
              <span className="hide-on-tablet">Swatches</span>
              {swatchCount > 0 ? (
                <span style={{
                  backgroundColor: '#C51E3A',
                  color: '#FFFFFF',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  marginLeft: '0.15rem'
                }}>
                  {swatchCount}
                </span>
              ) : null}
            </button>

            {/* Primary Action Button — Adaptive on Phone and Desktop */}
            <button 
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-sm header-quote-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.55rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '6px'
              }}
            >
              <span className="quote-text-full">Request Quote</span>
              <span className="quote-text-short">Quote</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: '1px solid #CBD5E1',
                borderRadius: '6px',
                padding: '0.45rem',
                cursor: 'pointer',
                display: 'none',
                color: '#0F172A'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
          }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0 }}>
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
                    color: activePage === 'home' ? '#C51E3A' : '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>Home</span>
                  <ChevronRight size={16} color="#94A3B8" />
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
                      color: activePage === item.id ? '#C51E3A' : '#0F172A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={16} color={activePage === item.id ? '#C51E3A' : '#94A3B8'} />
                  </button>
                </li>
              ))}
              <li style={{ paddingTop: '0.75rem' }}>
                <a
                  href="https://wa.me/919786222580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageSquare size={16} /> Chat on WhatsApp Desk
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .hide-on-mobile { display: none !important; }
        }
        @media (max-width: 1100px) {
          .hide-on-tablet { display: none !important; }
        }
      `}</style>
    </>
  );
};
