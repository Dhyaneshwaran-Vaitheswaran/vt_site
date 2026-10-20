import React from 'react';
import { ArrowRight, Check, Layers, Sliders, ExternalLink } from 'lucide-react';

export const FabricCard = ({ fabric, onSelectFabric, onAddSwatch, isSwatchAdded, onOpenRFQ }) => {
  return (
    <div className="b2b-card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
      
      {/* Fabric Swatch Media */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', backgroundColor: '#F1F5F9' }}>
        <img 
          src={fabric.image} 
          alt={`${fabric.name} woven fabric swatch`}
          loading="lazy"
          decoding="async"
          width="600"
          height="448"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap'
        }}>
          {fabric.badge && (
            <span className="badge badge-gold" style={{ fontSize: '0.6875rem' }}>
              {fabric.badge}
            </span>
          )}
          <span className="badge badge-navy" style={{ fontSize: '0.6875rem', backgroundColor: 'rgba(15, 23, 42, 0.75)', color: '#FFFFFF' }}>
            {fabric.weave}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#C51E3A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
          {fabric.category}
        </div>
        
        <h3 
          onClick={() => onSelectFabric(fabric)}
          style={{ fontSize: '1.25rem', marginBottom: '0.75rem', cursor: 'pointer', color: '#0F172A', transition: 'color 150ms ease' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#C51E3A'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}
        >
          {fabric.name}
        </h3>

        <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.25rem', flex: 1 }}>
          {fabric.description.substring(0, 115)}...
        </p>

        {/* Technical Data Pill Grid */}
        <div style={{
          backgroundColor: '#F8FAFC',
          borderRadius: '8px',
          padding: '0.75rem 1rem',
          marginBottom: '1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0.5rem',
          fontSize: '0.8125rem'
        }}>
          <div>
            <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase' }}>Weight</span>
            <strong style={{ color: '#0F172A' }}>{fabric.gsm}</strong>
          </div>
          <div>
            <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase' }}>Yarn Count</span>
            <strong style={{ color: '#0F172A' }}>{fabric.yarnCount.split(',')[0]}</strong>
          </div>
          <div>
            <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase' }}>Width</span>
            <strong style={{ color: '#0F172A' }}>{fabric.width.split('(')[0]}</strong>
          </div>
          <div>
            <span style={{ color: '#94A3B8', display: 'block', fontSize: '0.6875rem', textTransform: 'uppercase' }}>Bulk MOQ</span>
            <strong style={{ color: '#C51E3A' }}>{fabric.moqBulk}</strong>
          </div>
        </div>

        {/* Actions Button Row */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button
            onClick={() => onSelectFabric(fabric)}
            className="btn btn-navy btn-sm"
            style={{ flex: 1 }}
          >
            Full Specs <ArrowRight size={14} />
          </button>

          <button
            onClick={() => onAddSwatch(fabric)}
            className={`btn btn-sm ${isSwatchAdded ? 'btn-outline-navy' : 'btn-outline-navy'}`}
            style={{
              padding: '0.5rem 0.75rem',
              backgroundColor: isSwatchAdded ? '#DCFCE7' : 'transparent',
              borderColor: isSwatchAdded ? '#15803D' : 'var(--color-primary-navy)',
              color: isSwatchAdded ? '#15803D' : 'var(--color-primary-navy)'
            }}
            title={isSwatchAdded ? "Swatch added to cart" : "Add to Swatch Cart"}
          >
            {isSwatchAdded ? <Check size={14} /> : '+ Swatch'}
          </button>

          <button
            onClick={() => onOpenRFQ(fabric)}
            className="btn btn-primary btn-sm"
            style={{ padding: '0.5rem 0.75rem' }}
            title="Request Bulk Quotation"
          >
            Quote
          </button>
        </div>

      </div>

    </div>
  );
};
