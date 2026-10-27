import React, { useState } from 'react';
import { ArrowUpRight, Scissors, ShieldCheck, Truck, Layers, ChevronRight, MessageSquare } from 'lucide-react';
import { GARMENTS, GARMENT_CATEGORIES } from '../data/garments';

export const Garments = ({ onSelectGarment, onOpenRFQ, onSelectFabric }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Garments");

  const filteredGarments = selectedCategory === "All Garments"
    ? GARMENTS
    : GARMENTS.filter(g => g.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>
      
      {/* Garments Header Banner */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>DOWNSTREAM APPAREL EXPORT</span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)', marginBottom: '0.875rem' }}>
              Cut-and-Sew Apparel Coordination & OEM Manufacturing
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Eliminating the classic conflict between fabric mills and garment factories. Vasanthaa Textiless coordinates full-package apparel manufacturing across South India's premier garment hubs—from weaving the fabric to cutting, stitching, and global container export.
            </p>
            {/* Isha Main Supplier Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              padding: '0.45rem 0.9rem',
              borderRadius: '10px',
              marginBottom: '1.25rem'
            }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '2px 6px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
                <img src="/images/isha-logo.png" alt="Isha" style={{ height: '22px', width: 'auto' }} />
              </div>
              <span style={{ fontSize: '0.8125rem', color: '#E4E4E7' }}>
                <strong style={{ color: '#FFFFFF' }}>Main Supplier to Isha</strong> for 10+ Years (Dhotis, Kurtas, Bags & Garments)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> Request Garment OEM Quote
              </button>
              <a
                href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20an%20inquiry%20regarding%20finished%20garment%20OEM%20manufacturing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <MessageSquare size={16} /> Direct Desk WhatsApp (+91 98422 22580)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Production Credentials */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Scissors size={24} color="#C51E3A" />
              <div>
                <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '0.9rem' }}>Precision Stitching</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>14-16 SPI Juki/Brother Lines</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={24} color="#059669" />
              <div>
                <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '0.9rem' }}>Export Audit Standard</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>AQL 2.5 Major / 4.0 Minor</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Layers size={24} color="#D4AF37" />
              <div>
                <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '0.9rem' }}>Mill Integration</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Direct Loom-to-Stitching Control</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Truck size={24} color="#0284C7" />
              <div>
                <div style={{ fontWeight: 700, color: '#0A0A0A', fontSize: '0.9rem' }}>Global Port Delivery</div>
                <div style={{ fontSize: '0.8rem', color: '#64748B' }}>FOB Tuticorin & Chennai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Garment Catalog Grid */}
      <section style={{ paddingTop: '3rem' }}>
        <div className="container">
          
          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1rem',
            marginBottom: '2rem',
            borderBottom: '1px solid #E2E8F0'
          }}>
            {GARMENT_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#0A0A0A' : '#CBD5E1',
                  backgroundColor: selectedCategory === cat ? '#0A0A0A' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : '#475569',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {filteredGarments.map(garment => (
              <div
                key={garment.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                className="card-hover"
              >
                <div
                  style={{ height: '220px', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => onSelectGarment(garment)}
                >
                  <img
                    src={garment.image}
                    alt={garment.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    display: 'flex',
                    gap: '0.35rem'
                  }}>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{garment.badge}</span>
                  </div>
                </div>

                <div style={{ padding: 'clamp(1.15rem, 2.5vw, 1.5rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: '#C51E3A', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    {garment.category}
                  </div>
                  <h2
                    style={{ fontSize: '1.25rem', color: '#0A0A0A', marginBottom: '0.5rem', cursor: 'pointer' }}
                    onClick={() => onSelectGarment(garment)}
                  >
                    {garment.name}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: '1.6', marginBottom: '1.25rem', flexGrow: 1 }}>
                    {garment.description.slice(0, 130)}...
                  </p>

                  {/* Micro Specs */}
                  <div style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    marginBottom: '1.25rem',
                    fontSize: '0.8rem',
                    color: '#334155',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.5rem'
                  }}>
                    <div>
                      <span style={{ color: '#64748B', display: 'block', fontSize: '0.7rem' }}>MOQ (BULK)</span>
                      <strong>{garment.moqBulk}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748B', display: 'block', fontSize: '0.7rem' }}>LEAD TIME</span>
                      <strong>{garment.leadTime}</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => onSelectGarment(garment)}
                      className="btn btn-outline-dark"
                      style={{ flex: '1 1 130px', fontSize: '0.8125rem' }}
                    >
                      Specifications <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => onOpenRFQ(garment)}
                      className="btn btn-primary"
                      style={{ flex: '0 1 auto', fontSize: '0.8125rem' }}
                    >
                      Quote RFQ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sourcing Workflow Section */}
          <div style={{
            marginTop: '5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: 'clamp(1.5rem, 4vw, 3rem)'
          }}>
            <div style={{ maxWidth: '700px', marginBottom: '2.5rem' }}>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>END-TO-END PROCESS</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#0A0A0A', marginBottom: '0.75rem' }}>
                How Our Full-Package Apparel Coordination Works
              </h2>
              <p style={{ color: '#64748B', lineHeight: '1.7' }}>
                From technical pack analysis to final container sealing, we take single-point responsibility for every production phase.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ borderLeft: '3px solid #C51E3A', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#C51E3A', fontWeight: 800 }}>STAGE 01</div>
                <h3 style={{ fontSize: '1rem', color: '#0A0A0A', margin: '0.25rem 0' }}>Tech Pack & Fabric Sourcing</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: '1.5' }}>
                  We review your measurement charts, select or weave the matching fabric substrate, and deliver spectrophotometer lab dips within 4 days.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid #D4AF37', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 800 }}>STAGE 02</div>
                <h3 style={{ fontSize: '1rem', color: '#0A0A0A', margin: '0.25rem 0' }}>Fit Proto & Approval</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: '1.5' }}>
                  Full size-set proto samples produced with exact trims, buttons, and collar fusing sent via DHL/FedEx for buyer fitting confirmation.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid #059669', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 800 }}>STAGE 03</div>
                <h3 style={{ fontSize: '1rem', color: '#0A0A0A', margin: '0.25rem 0' }}>Bulk Cut & Sew</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: '1.5' }}>
                  Fabric rolls undergo ASTM 4-point inspection prior to spreading and computerized CAD cutting. In-line stitch audits guarantee 14-16 SPI.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid #0284C7', paddingLeft: '1rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#0284C7', fontWeight: 800 }}>STAGE 04</div>
                <h3 style={{ fontSize: '1rem', color: '#0A0A0A', margin: '0.25rem 0' }}>Final AQL 2.5 & Export</h3>
                <p style={{ fontSize: '0.825rem', color: '#64748B', lineHeight: '1.5' }}>
                  Garments are steam-pressed, hangtagged, moisture-bagged, and inspected to AQL 2.5 before dispatch to Port Tuticorin or Chennai.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
