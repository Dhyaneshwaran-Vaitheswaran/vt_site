import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SwatchDrawer = ({ isOpen, onClose, swatches, onRemoveSwatch, onClearSwatches, onOpenRFQ, onBrowseFabrics }) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [courierAddress, setCourierAddress] = useState('');
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const handleOrderSwatches = (e) => {
    e.preventDefault();
    const fabricList = swatches.map(s => `• ${s.name} (${s.weave}) - ${s.gsm}`).join('\n');
    const msg = encodeURIComponent(
      `*SWATCH HANGER REQUEST — VASANTHAA TEXTILESS*\n\n` +
      `*Requested Fabric Swatches (${swatches.length}):*\n` +
      `${fabricList}\n\n` +
      `*Delivery / Courier Details:*\n` +
      `• Company: ${buyerCompany}\n` +
      `• Contact Person: ${buyerName}\n` +
      `• Phone/WhatsApp: ${buyerPhone}\n` +
      `• Courier Address: ${courierAddress}\n\n` +
      `Please dispatch swatch hangers / feeler cuts.`
    );
    window.open(`https://wa.me/919842222580?text=${msg}`, '_blank');
    setOrdered(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(4px)',
      zIndex: 99998,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: '480px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
        animation: 'slideIn 250ms ease-out'
      }}>
        
        {/* Drawer Header */}
        <div style={{
          padding: '1.15rem clamp(1rem, 3vw, 1.5rem)',
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="#D4AF37" />
            <h3 style={{ margin: 0, color: '#FFFFFF', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)' }}>
              Fabric Swatch Requisition ({swatches.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94A3B8',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: 'clamp(1rem, 3vw, 1.5rem)' }}>
          {ordered ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={48} color="#15803D" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ color: '#0A0A0A', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Swatch Request Dispatched!
              </h4>
              <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Our sampling team in Erode has received your request. Feeler swatches and technical spec cards will be assembled for courier dispatch.
              </p>
              <button
                onClick={() => {
                  setOrdered(false);
                  onClearSwatches();
                  onClose();
                  if (onBrowseFabrics) onBrowseFabrics();
                }}
                className="btn btn-navy"
                style={{ width: '100%' }}
              >
                Back to Fabric Catalog
              </button>
            </div>
          ) : swatches.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94A3B8' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 1rem auto', opacity: 0.4 }} />
              <h4 style={{ color: '#0A0A0A', marginBottom: '0.5rem' }}>No Swatches Added Yet</h4>
              <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Browse our fabric catalog and click "+ Request Swatch" to order physical quality feelers and lab-dip cards.
              </p>
              <button
                onClick={() => {
                  onClose();
                  if (onBrowseFabrics) onBrowseFabrics();
                }}
                className="btn btn-outline-navy btn-sm"
              >
                Browse Fabrics
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B' }}>SELECTED SWATCHES</span>
                <button
                  onClick={onClearSwatches}
                  style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  Clear All
                </button>
              </div>

              {/* Swatch List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {swatches.map(item => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      backgroundColor: '#F8FAFC',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '44px', height: '44px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0, border: '1px solid #E2E8F0' }} 
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0A0A0A' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                          {item.weave} • {item.gsm}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveSwatch(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#94A3B8',
                        cursor: 'pointer',
                        padding: '0.25rem'
                      }}
                      title="Remove swatch"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Courier Request Form */}
              <form onSubmit={handleOrderSwatches} style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#0A0A0A', marginBottom: '1rem' }}>
                  Courier Delivery Details
                </h4>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Company / Apparel Brand *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Silkway Fashion Exporters"
                    value={buyerCompany}
                    onChange={(e) => setBuyerCompany(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Contact Person *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ramesh Kumar"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 97862 22580"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" style={{ fontSize: '0.8rem' }}>Complete Courier Address *</label>
                  <textarea
                    className="form-textarea"
                    style={{ minHeight: '80px', fontSize: '0.85rem' }}
                    placeholder="Street, City, Pin/Zip Code, Country..."
                    value={courierAddress}
                    onChange={(e) => setCourierAddress(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', marginBottom: '0.75rem' }}
                >
                  <MessageSquare size={16} /> Request Swatch Hangers on WhatsApp
                </button>

                <p style={{ fontSize: '0.75rem', color: '#94A3B8', textAlign: 'center' }}>
                  Swatches dispatched from Erode. Courier charges may apply for overseas air shipments.
                </p>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
