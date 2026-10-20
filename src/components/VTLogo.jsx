import React from 'react';

/**
 * VTLogo — Official Trademark Monogram & Wordmark for Vasanthaa Textiless
 * Design: Interlaced 'V' and 'T' geometric monogram resembling precision warp & weft loom weaving.
 * Palette: Signature Crimson Red (#C51E3A) + Heritage Gold (#D4AF37)
 */
export const VTMonogram = ({ size = 38, variant = 'dark' }) => {
  const isLight = variant === 'light'; // Light emblem for dark backgrounds
  const bgFill = isLight ? '#17233B' : '#0B1120';
  const borderColor = isLight ? 'rgba(212, 175, 55, 0.4)' : 'rgba(197, 30, 58, 0.35)';

  return (
    <div 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: bgFill,
        borderRadius: `${Math.max(6, Math.round(size * 0.18))}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${borderColor}`,
        boxShadow: isLight 
          ? '0 2px 8px rgba(0, 0, 0, 0.25)' 
          : '0 2px 10px rgba(197, 30, 58, 0.15)',
        flexShrink: 0,
        position: 'relative',
        overflow: 'hidden'
      }}
      title="VT — Vasanthaa Textiless Trademark Emblem"
    >
      <svg 
        width={Math.round(size * 0.72)} 
        height={Math.round(size * 0.72)} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vtRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#C51E3A" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="vtGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B48316" />
          </linearGradient>
        </defs>

        {/* 'V' Left Warp Diagonal */}
        <polygon points="12,18 26,18 50,78 40,78" fill="url(#vtRed)" />
        {/* 'V' Right Warp Diagonal */}
        <polygon points="88,18 74,18 50,78 60,78" fill="url(#vtRed)" />

        {/* 'T' Horizontal Warp Beam */}
        <rect x="22" y="26" width="56" height="11" rx="2" fill="url(#vtRed)" />
        {/* Gold Inlay Thread on Crossbar */}
        <rect x="24" y="30" width="52" height="3" rx="1.5" fill="url(#vtGold)" />

        {/* 'T' Vertical Weft Pillar (Interlacing through center of V) */}
        <rect x="44.5" y="33" width="11" height="58" rx="2" fill="url(#vtRed)" />
        {/* Central Gold Warp Thread */}
        <line x1="50" y1="36" x2="50" y2="88" stroke="url(#vtGold)" strokeWidth="2.2" strokeLinecap="round" />

        {/* Micro Weave Binding Points */}
        <circle cx="50" cy="31.5" r="2.2" fill="#FFFFFF" />
        <circle cx="50" cy="78" r="2" fill="url(#vtGold)" />
      </svg>
    </div>
  );
};

export const VTLogo = ({ 
  size = 40, 
  variant = 'dark', 
  subtitle = 'SOURCING & PRODUCTION • ERODE • ESTD. 1998' 
}) => {
  const isDarkCanvas = variant === 'light';
  const textColor = isDarkCanvas ? '#FFFFFF' : '#0F172A';
  const subColor = isDarkCanvas ? '#D4AF37' : '#C51E3A';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', userSelect: 'none' }}>
      <VTMonogram size={size} variant={variant} />
      <div>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.28rem',
          fontWeight: 800,
          letterSpacing: '-0.015em',
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: 'nowrap'
        }}>
          Vasanthaa Textiless
        </div>
        {subtitle && (
          <div style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: subColor,
            marginTop: '2px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default VTLogo;
