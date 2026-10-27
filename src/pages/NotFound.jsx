import React from 'react';
import { ArrowLeft, Compass, Layers, ShoppingBag, MessageSquare } from 'lucide-react';

export const NotFound = ({ setActivePage, onOpenRFQ }) => {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '75vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* 404 Hero Section */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 8vw, 6.5rem) 0',
        borderBottom: '1px solid #27272A',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#1E1E22',
            border: '1px solid #3F3F46',
            color: '#E4E4E7',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            marginBottom: '1.5rem'
          }}>
            <Compass size={16} color="#C51E3A" /> ERROR 404 — URL NOT FOUND
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: '#FFFFFF',
            lineHeight: 1.15
          }}>
            Page or Fabric Not Located
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#A1A1AA',
            lineHeight: 1.7,
            maxWidth: '620px',
            margin: '0 auto 2.5rem auto'
          }}>
            The fabric specification, garment route, or page you requested could not be found. It may have been updated, renamed, or temporarily relocated in our production registry.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setActivePage('catalog')}
              className="btn btn-primary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Layers size={18} /> Browse 15+ Woven Fabrics
            </button>

            <button
              onClick={() => setActivePage('garments')}
              className="btn btn-secondary btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ShoppingBag size={18} /> Garment OEM Coordination
            </button>

            <button
              onClick={() => setActivePage('home')}
              className="btn btn-outline-white btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <ArrowLeft size={18} /> Return to Homepage
            </button>
          </div>
        </div>
      </section>

      {/* Direct Assistance Strip */}
      <section style={{ backgroundColor: '#FAFAFA', padding: '3.5rem 0', flexGrow: 1 }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#0A0A0A', marginBottom: '0.75rem', fontWeight: 700 }}>
            Looking for a Specific Fabric Construction or Lab Dip?
          </h2>
          <p style={{ color: '#52525B', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            Our commercial sourcing desk in Erode can quickly locate or custom-weave any target count, weave, or GSM specifications.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary"
            >
              Request Custom Spec RFQ
            </button>
            <a
              href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20am%20looking%20for%20a%20specific%20woven%20fabric%20specification."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} /> WhatsApp Direct Desk (+91 98422 22580)
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
