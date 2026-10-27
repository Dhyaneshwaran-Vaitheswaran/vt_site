import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Award, Sparkles, Heart } from 'lucide-react';

export const IshaShowcase = ({ onOpenRFQ }) => {
  const ishaProducts = [
    {
      title: "Pure Cotton Dhotis & Dhoti Pants",
      tag: "10+ Years Heritage",
      desc: "Traditional single and double cotton dhotis with fine zari borders, alongside tailored ready-to-wear dhoti pants engineered for unrestricted movement and daily sadhana.",
      specs: ["100% Combed Compact Cotton", "Permanent Optical Bleach & Zari", "Elasticated & Drawstring Tailoring"]
    },
    {
      title: "Natural Kurthas & Kurtha Pants",
      tag: "Sadhana & Everyday Wear",
      desc: "Breathable unbleached, natural, and custom-dyed organic cotton kurtas and matching bottoms crafted with clean plackets, reinforced collars, and maximum air permeability.",
      specs: ["Pre-Shrunk Sanforized Wovens", "Zero Post-Wash Distortion", "Skin-Safe Eco Dyes (ZLD)"]
    },
    {
      title: "100% Cotton & Save Soil Bags",
      tag: "Eco Initiative Merchandise",
      desc: "High-tensile natural cotton canvas and drill tote bags manufactured for global ecological movements, daily grocery utility, and spiritual merchandise.",
      specs: ["Heavy Duck Canvas & Drill", "Reinforced X-Box Handle Stitching", "Non-Toxic Water-Based Screen Prints"]
    },
    {
      title: "Consecrated Rudraksha Bags",
      tag: "Sacred Protective Pouches",
      desc: "Specially engineered protective pure cotton drawstring pouches and pouches made to safeguard consecrated Rudrakshas and sacred offerings with reverent stitch care.",
      specs: ["Pure Natural Unbleached Cotton", "Soft Non-Abrasive Internal Weave", "Durable Natural Cord Fastenings"]
    },
    {
      title: "Meditation & Ceremonial Shawls",
      tag: "Sacred Stoles & Wraps",
      desc: "Finely woven cotton and blended stoles providing balanced thermal comfort during meditation, prayer gatherings, and sacred ashram programs.",
      specs: ["Soft Tactile Handfeel", "Traditional Woven Selvages", "Gentle Breathable Warmth"]
    },
    {
      title: "Sadhana & Program Clothing",
      tag: "Intensive Practice Apparel",
      desc: "Heavy-duty yet feather-soft natural fiber garments tailored to withstand rigorous yogic practice, repeated institutional washing, and warm climates.",
      specs: ["Double-Needle Flatlock Seams", "14-16 Stitches Per Inch", "Tear-Resistant Natural Fibers"]
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle background red accent glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197, 30, 58, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header with Perfectly Center-Aligned Co-Branding Banner */}
        <div className="section-header" style={{
          maxWidth: '860px',
          margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          
          {/* Flagship Co-Branding Banner Lockup — Centered */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.85rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: '#FAFAFA',
            border: '1px solid #E4E4E7',
            borderRadius: '16px',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            maxWidth: '100%',
            boxSizing: 'border-box',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
              <img src="/images/vt-monogram.svg" alt="VT Trademark Monogram" style={{ width: '24px', height: '24px' }} />
              <span style={{ fontWeight: 800, fontSize: '0.875rem', color: '#0A0A0A', letterSpacing: '0.04em' }}>
                VASANTHAA TEXTILESS
              </span>
            </div>

            <span style={{ color: '#C51E3A', fontWeight: 800, fontSize: '0.95rem' }}>✕</span>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              padding: '0.25rem 0.65rem',
              borderRadius: '8px',
              border: '1px solid #E4E4E7',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              <img src="/images/isha-logo.png" alt="Isha Official Logo" style={{ height: '30px', width: 'auto', display: 'block' }} />
            </div>

            <span className="badge badge-red" style={{ backgroundColor: '#FEF2F2', color: '#C51E3A', border: '1px solid rgba(197, 30, 58, 0.25)', fontWeight: 800, fontSize: '0.75rem' }}>
              <Award size={13} style={{ marginRight: '0.25rem' }} /> EXCLUSIVE 10+ YEAR FLAGSHIP PARTNERSHIP
            </span>
          </div>

          <h2 className="section-title" style={{ fontSize: 'clamp(1.85rem, 4.2vw, 3rem)', color: '#0A0A0A', lineHeight: 1.18, textAlign: 'center' }}>
            Main Textile & Apparel Supplier to Isha for the Past Decade
          </h2>

          <p className="section-desc" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#52525B', lineHeight: 1.75, textAlign: 'center', margin: '0 auto' }}>
            Our greatest testament to precision, purity, and manufacturing scale. For over 10 consecutive years, Vasanthaa Textiless has proudly served as the primary production engine for Isha’s sacred, program, and everyday clothing collections.
          </p>
        </div>

        {/* Proof of Scale & Partnership Highlights */}
        <div style={{
          backgroundColor: '#0A0A0A',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: 'clamp(1.75rem, 4vw, 3rem)',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          border: '1px solid #27272A',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Authenticated Partnership Banner */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #27272A',
            paddingBottom: '1.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <img src="/images/isha-logo.png" alt="Isha Logo" style={{ height: '36px', width: 'auto', display: 'block' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#C51E3A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  OFFICIAL INSTITUTIONAL RECORD
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Main Textile & Apparel Manufacturing Partner
                </div>
              </div>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#18181B',
              border: '1px solid #3F3F46',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              color: '#E4E4E7',
              fontWeight: 600
            }}>
              <ShieldCheck size={16} color="#22C55E" />
              <span>Direct Manufacturing & Sourcing Contract</span>
            </div>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2.5rem)',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#C51E3A', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                10+ Years
              </div>
              <div style={{ fontSize: '0.875rem', color: '#D4D4D8', fontWeight: 600 }}>
                Decade-Long Supply Trust
              </div>
              <div style={{ fontSize: '0.75rem', color: '#A1A1AA', marginTop: '0.2rem' }}>
                Continuous Partnership Since Early 2010s
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                Millions+
              </div>
              <div style={{ fontSize: '0.875rem', color: '#D4D4D8', fontWeight: 600 }}>
                Units & Meters Supplied
              </div>
              <div style={{ fontSize: '0.75rem', color: '#A1A1AA', marginTop: '0.2rem' }}>
                Dhotis, Kurtas, Bags & Shawls
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#C51E3A', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                100% Pure
              </div>
              <div style={{ fontSize: '0.875rem', color: '#D4D4D8', fontWeight: 600 }}>
                Natural & Breathable Wovens
              </div>
              <div style={{ fontSize: '0.75rem', color: '#A1A1AA', marginTop: '0.2rem' }}>
                Skin-Friendly Eco Processing
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.1, marginBottom: '0.35rem' }}>
                AQL 2.5
              </div>
              <div style={{ fontSize: '0.875rem', color: '#D4D4D8', fontWeight: 600 }}>
                Zero Compromise Standard
              </div>
              <div style={{ fontSize: '0.75rem', color: '#A1A1AA', marginTop: '0.2rem' }}>
                Every Garment & Bag Inspected
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Product Categories We Have Manufactured */}
        <div className="grid-3" style={{ gap: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          {ishaProducts.map((prod, i) => (
            <div
              key={i}
              className="b2b-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E4E4E7',
                borderRadius: '16px',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 250ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.6875rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C51E3A',
                  backgroundColor: '#FEF2F2',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(197, 30, 58, 0.15)'
                }}>
                  {prod.tag}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A1A1AA', fontWeight: 700 }}>
                  0{i + 1}
                </span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.2rem, 2.2vw, 1.4rem)',
                fontWeight: 700,
                color: '#0A0A0A',
                marginBottom: '0.75rem',
                lineHeight: 1.25
              }}>
                {prod.title}
              </h3>

              <p style={{
                fontSize: '0.925rem',
                color: '#52525B',
                lineHeight: 1.68,
                marginBottom: '1.5rem',
                flex: 1
              }}>
                {prod.desc}
              </p>

              <div style={{
                borderTop: '1px solid #F4F4F5',
                paddingTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem'
              }}>
                {prod.specs.map((spec, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#27272A' }}>
                    <CheckCircle2 size={15} color="#C51E3A" style={{ flexShrink: 0 }} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div style={{
          backgroundColor: '#FAFAFA',
          borderRadius: '16px',
          border: '1px solid #E4E4E7',
          padding: 'clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.25rem'
        }}>
          <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: '#0A0A0A', fontWeight: 700, margin: 0 }}>
            Looking for an Experienced Apparel & Textile Manufacturing Partner?
          </h3>
          <p style={{ color: '#52525B', fontSize: '1rem', maxWidth: '680px', margin: 0, lineHeight: 1.7 }}>
            Whether you require large-scale devotional garments, organic cotton bags, fine dhotis, or bespoke shirting, our decade-tested production infrastructure is ready to deliver.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-lg"
            >
              <ArrowUpRight size={18} /> Request Custom OEM Production Quote
            </button>
            <a
              href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20discuss%20manufacturing%20dhotis,%20kurtas,%20bags%20or%20apparel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-lg"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#0A0A0A',
                color: '#0A0A0A',
                fontWeight: 700
              }}
            >
              Direct WhatsApp Inquiry (+91 98422 22580)
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
