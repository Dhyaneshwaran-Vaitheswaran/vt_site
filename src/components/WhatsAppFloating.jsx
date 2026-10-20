import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, PhoneCall } from 'lucide-react';

export const WhatsAppFloating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: "Request Swatch Hangers",
      desc: "Order physical feeler swatches & technical spec cards",
      msg: "Hello Vasanthaa Textiless, I would like to request physical fabric swatches for my apparel brand."
    },
    {
      title: "Bulk Production Quotation",
      desc: "Inquire on orders above 1,000 meters with custom finishes",
      msg: "Hello Vasanthaa Textiless, I have a bulk fabric requirement (1,000m+) and would like to receive pricing and lead times."
    },
    {
      title: "Custom Lab Dip / Pantone Matching",
      desc: "Send your target color or fabric composition",
      msg: "Hello Vasanthaa Textiless, can you develop custom lab dips for our seasonal color palette?"
    },
    {
      title: "Direct Sourcing Coordination",
      desc: "Speak with Erode Fort sourcing office",
      msg: "Hello, I want to discuss a full textile sourcing and production coordination program with Vasanthaa Textiless."
    }
  ];

  const handleLaunchChat = (text) => {
    const url = `https://wa.me/919786222580?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      
      {/* Quick Option Popover */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: '0',
          width: '320px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)',
          border: '1px solid #E2E8F0',
          overflow: 'hidden',
          animation: 'fadeInUp 200ms ease-out'
        }}>
          {/* Card Top */}
          <div style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                <span className="badge badge-live" style={{ fontSize: '0.625rem', padding: '0.15rem 0.45rem' }}>ONLINE</span>
                <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Erode Fort Desk</span>
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '1rem', margin: 0 }}>Vasanthaa Sourcing Desk</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Links List */}
          <div style={{ padding: '0.75rem' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#64748B', letterSpacing: '0.05em', textTransform: 'uppercase', padding: '0.25rem 0.5rem 0.5rem 0.5rem' }}>
              Select an Inquiry Type:
            </div>
            {quickOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleLaunchChat(opt.msg)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.65rem 0.75rem',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background 150ms ease',
                  marginBottom: '0.25rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A' }}>{opt.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{opt.desc}</div>
                </div>
                <ChevronRight size={14} color="#94A3B8" />
              </button>
            ))}
          </div>

          {/* Footer Call Strip */}
          <div style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#F8FAFC',
            borderTop: '1px solid #E2E8F0',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span style={{ color: '#64748B' }}>Prefer a quick phone call?</span>
            <a href="tel:+919786222580" style={{ color: '#C51E3A', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <PhoneCall size={12} /> Call Desk
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          border: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 200ms ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Contact Vasanthaa Textiless on WhatsApp"
        title="Direct WhatsApp Sourcing Concierge"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

    </div>
  );
};
