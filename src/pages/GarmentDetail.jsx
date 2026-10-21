import React from 'react';
import { ArrowLeft, ArrowUpRight, Check, MessageSquare, ShieldCheck, Layers, ChevronRight, Truck, Scissors } from 'lucide-react';
import { GARMENTS } from '../data/garments';

export const GarmentDetail = ({ garment, onBack, onOpenRFQ, onSelectGarment, onSelectFabric }) => {
  if (!garment) return null;

  const relatedGarments = GARMENTS.filter(g => g.id !== garment.id).slice(0, 3);

  const handleWhatsAppInquiry = () => {
    const msg = encodeURIComponent(
      `Hello Vasanthaa Textiless,\n\nI am inquiring about *${garment.name}* (${garment.category}).\n` +
      `• Sample MOQ: ${garment.moqSample}\n` +
      `• Standard Bulk MOQ: ${garment.moqBulk}\n` +
      `• Lead Time: ${garment.leadTime}\n\n` +
      `Could you provide tech pack evaluation, FOB pricing, and sample lead times?`
    );
    window.open(`https://wa.me/919786222580?text=${msg}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>
      
      {/* Breadcrumb Bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '0.875rem 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#64748B', flexWrap: 'wrap' }}>
          <button
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              color: '#0A0A0A',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: 0
            }}
          >
            <ArrowLeft size={16} /> Back to Garment Hub
          </button>
          <span>/</span>
          <span>{garment.category}</span>
          <span>/</span>
          <span style={{ color: '#C51E3A', fontWeight: 600 }}>{garment.shortName}</span>
        </div>
      </div>

      {/* Main Garment Spec Sheet */}
      <section style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          
          <div className="detail-grid-responsive" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Media & Core Badges */}
            <div>
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#E2E8F0',
                boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)',
                aspectRatio: '4/3'
              }}>
                <img
                  src={garment.image}
                  alt={`${garment.name} manufactured in Tamil Nadu garment clusters by Vasanthaa Textiless`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span className="badge badge-gold">{garment.badge}</span>
                  <span className="badge badge-dark">OEM & Private Label</span>
                </div>
              </div>

              {/* Manufacturing Assurance Strip */}
              <div style={{
                marginTop: '1.25rem',
                padding: '1.25rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                border: '1px solid #E2E8F0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Scissors size={20} color="#C51E3A" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>STITCHING</div>
                    <div style={{ fontSize: '0.8125rem', color: '#0A0A0A', fontWeight: 700 }}>14-16 SPI Juki/Brother</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <ShieldCheck size={20} color="#059669" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>QUALITY AUDIT</div>
                    <div style={{ fontSize: '0.8125rem', color: '#0A0A0A', fontWeight: 700 }}>AQL 2.5 Major/4.0 Minor</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Truck size={20} color="#D4AF37" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>EXPORT LOGISTICS</div>
                    <div style={{ fontSize: '0.8125rem', color: '#0A0A0A', fontWeight: 700 }}>FOB Tuticorin / Chennai</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: B2B Specifications & Inquiries */}
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>DOWNSTREAM APPAREL COORDINATION</span>
              <h1 style={{ color: '#0A0A0A', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
                {garment.name}
              </h1>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {garment.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button
                  onClick={() => onOpenRFQ(garment)}
                  className="btn btn-primary btn-lg"
                >
                  <ArrowUpRight size={18} /> Request Tech Pack Quote
                </button>
                <button
                  onClick={handleWhatsAppInquiry}
                  className="btn btn-outline-dark btn-lg"
                  style={{ color: '#059669', borderColor: '#059669' }}
                >
                  <MessageSquare size={18} /> WhatsApp Merchandiser
                </button>
              </div>

              {/* Technical Specifications Table */}
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                marginBottom: '2rem'
              }}>
                <div style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: '#0A0A0A',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  Commercial Sourcing Parameters
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', padding: '1.25rem', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Sample MOQ (Proto)</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.moqSample}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Bulk Order MOQ</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.moqBulk}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Production Capacity</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.productionCapacity}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Export Lead Time</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.leadTime}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Stitching Standard</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.stitchingSpecs}</p>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Export Packaging</span>
                    <p style={{ fontWeight: 600, color: '#0A0A0A', margin: '0.2rem 0 0 0' }}>{garment.exportPackaging}</p>
                  </div>
                </div>
              </div>

              {/* Integrated Fabric Pairings */}
              <div style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                padding: '1.25rem',
                marginBottom: '2rem'
              }}>
                <h2 style={{ fontSize: '1rem', color: '#0A0A0A', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={18} color="#C51E3A" /> Engineered Fabric Substrates Used
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {garment.fabricPairings.map((pairing, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                      <Check size={16} color="#059669" /> {pairing}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features & Value Props */}
              <div>
                <h2 style={{ fontSize: '1.125rem', color: '#0A0A0A', marginBottom: '0.875rem' }}>
                  Manufacturing Highlights & Export Safeguards
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {garment.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <div style={{
                        marginTop: '0.25rem',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(5, 150, 105, 0.12)',
                        color: '#059669',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.925rem', color: '#334155', lineHeight: '1.6' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Related Garments Section */}
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>COMPLEMENTARY APPAREL</span>
                <h2 style={{ fontSize: '1.5rem', color: '#0A0A0A' }}>Explore Other Finished Garment Categories</h2>
              </div>
              <button
                onClick={onBack}
                className="btn btn-outline-dark"
                style={{ fontSize: '0.875rem' }}
              >
                View All Garments <ChevronRight size={16} />
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {relatedGarments.map((g) => (
                <div
                  key={g.id}
                  onClick={() => onSelectGarment(g)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  className="card-hover"
                >
                  <div style={{ height: '180px', overflow: 'hidden' }}>
                    <img src={g.image} alt={g.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#C51E3A', fontWeight: 600, textTransform: 'uppercase' }}>{g.category}</span>
                    <h3 style={{ fontSize: '1.1rem', color: '#0A0A0A', margin: '0.35rem 0 0.5rem 0' }}>{g.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.5', margin: 0 }}>
                      {g.description.slice(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
