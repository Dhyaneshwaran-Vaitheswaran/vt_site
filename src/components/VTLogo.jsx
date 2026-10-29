import React from 'react';

/**
 * VTLogo — Official Trademark Monogram & Wordmark for Vasanthaa Textiless
 * Design: Interlaced 'V' and 'T' architectural monogram resembling precision loom weaving.
 * Palette: Red (#C51E3A), White (#FFFFFF) & Pure Black (#0A0A0A)
 * Typography: Modern Geometric Sans-Serif ('Outfit')
 */
export const VTMonogram = ({ size = 38, variant = 'dark' }) => {
  const isLight = variant === 'light'; // Light emblem for dark backgrounds
  const bgFill = isLight ? '#18181B' : '#0A0A0A';
  const borderColor = isLight ? 'rgba(255, 255, 255, 0.2)' : 'rgba(197, 30, 58, 0.4)';

  return (
    <div
      className="vt-monogram-emblem"
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
          ? '0 2px 8px rgba(0, 0, 0, 0.35)'
          : '0 2px 10px rgba(197, 30, 58, 0.2)',
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
        </defs>

        {/* 'V' Left Warp Diagonal */}
        <polygon points="12,18 26,18 50,78 40,78" fill="url(#vtRed)" />
        {/* 'V' Right Warp Diagonal */}
        <polygon points="88,18 74,18 50,78 60,78" fill="url(#vtRed)" />

        {/* 'T' Horizontal Warp Beam */}
        <rect x="22" y="26" width="56" height="11" rx="2" fill="url(#vtRed)" />
        {/* Clean White Inlay Thread on Crossbar */}
        <rect x="24" y="30" width="52" height="3" rx="1.5" fill="#FFFFFF" opacity="0.85" />

        {/* 'T' Vertical Weft Pillar */}
        <rect x="44.5" y="33" width="11" height="58" rx="2" fill="url(#vtRed)" />
        {/* Central White Warp Thread */}
        <line x1="50" y1="36" x2="50" y2="88" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

        {/* Micro Weave Binding Points */}
        <circle cx="50" cy="31.5" r="2.2" fill="#FFFFFF" />
        <circle cx="50" cy="78" r="2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export const VTLogo = ({
  size = 40,
  variant = 'dark',
  subtitle = 'ERODE • ESTD. 1998'
}) => {
  const isDarkCanvas = variant === 'light';
  const textColor = isDarkCanvas ? '#FFFFFF' : '#0A0A0A';
  const subColor = '#C51E3A';

  return (
    <div className="vt-logo-wrap" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.65rem',
      userSelect: 'none',
      flexShrink: 0
    }}>
      <VTMonogram size={size} variant={variant} />
      <div className="vt-logo-text-block" style={{ flexShrink: 0 }}>
        <div className="vt-logo-title" style={{
          fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: textColor,
          lineHeight: 1.15,
          whiteSpace: 'nowrap'
        }}>
          Vasanthaa Textiless
        </div>
        {subtitle && (
          <div className="vt-logo-subtitle" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 800,
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
