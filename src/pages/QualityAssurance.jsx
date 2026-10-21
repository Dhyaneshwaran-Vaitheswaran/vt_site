import React from 'react';
import { ShieldCheck, CheckCircle2, FileCheck2, Scale, Microscope, Eye, Award, ArrowUpRight, MessageSquare, ArrowRight } from 'lucide-react';

export const QualityAssurance = ({ onOpenRFQ }) => {
  return (
    <div style={{ backgroundColor: '#FBF9F5', paddingBottom: '6rem' }}>
      
      {/* QA Header Banner */}
      <section style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '4.5rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>INDEPENDENT LABORATORY TESTING & QC</span>
            <h1 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: '1.25rem' }}>
              Rigorous 4-Point Quality Assurance on Every Yard
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Our commitment to quality is governed by quantifiable international standards, not subjective opinions. Before any fabric leaves our central inspection facility in Erode, it must pass strict dimensional, mechanical, and visual audits.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> Request Quality Spec & Sample
              </button>
              <a
                href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20would%20like%20to%20review%20your%20QA%20testing%20and%204-point%20inspection%20standards."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={16} /> Ask QC Lead on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Testing Image Spotlight */}
      <section className="section-padding-sm" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="two-col-layout-responsive">
            <div>
              <img
                src="/images/fabric-inspection.webp"
                alt="ASTM D5430 Fabric Inspection Station with Illuminated Light Table"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  border: '1px solid #E2E8F0'
                }}
              />
            </div>
            <div>
              <span className="section-kicker">IN-HOUSE CENTRAL INSPECTION</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', color: '#0F172A', marginBottom: '1rem' }}>
                Centrally Inspected in Erode
              </h2>
              <p style={{ color: '#64748B', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Because we coordinate weaving and processing across specialized regional partners, centralized inspection is the bedrock of our business model. No fabric is shipped directly from an outsource mill to a buyer; every roll is routed to our central Erode tables for certified inspection and repacking.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#15803D" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>100% Visual Inspection:</strong> Continuous full-width lighted inspection tables</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#15803D" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Cuttable Width Verification:</strong> Usable width measured at 10-meter intervals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#15803D" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span><strong>Roll-by-Roll Weight:</strong> GSM circular cutter test against master specification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ASTM 4-Point System Explained */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">GLOBAL STANDARD ASTM D5430</span>
            <h2 className="section-title">The 4-Point Defect Grading Protocol</h2>
            <p className="section-desc">
              We apply the internationally accepted 4-Point System to assess visual faults in woven fabrics. Penalty points are assigned based strictly on defect length.
            </p>
          </div>

          <div className="grid-4" style={{ marginBottom: '3rem' }}>
            <div className="b2b-card" style={{ borderTop: '4px solid #10B981' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>1 POINT</div>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Defects Up to 3 Inches</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Minor slubs, small nep clusters, or localized fly fibers under 3 inches (75 mm) in length.
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '4px solid #3B82F6' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3B82F6', marginBottom: '0.5rem' }}>2 POINTS</div>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Defects 3 to 6 Inches</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Warp knots, light broken picks, or minor color streaks between 3 and 6 inches (75–150 mm).
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '4px solid #F59E0B' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F59E0B', marginBottom: '0.5rem' }}>3 POINTS</div>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Defects 6 to 9 Inches</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Prominent miss-picks, double ends, or dye drop marks between 6 and 9 inches (150–230 mm).
              </p>
            </div>

            <div className="b2b-card" style={{ borderTop: '4px solid #EF4444' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#EF4444', marginBottom: '0.5rem' }}>4 POINTS</div>
              <h4 style={{ fontSize: '1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Defects Exceeding 9" or Holes</h4>
              <p style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                Continuous streaks, severe shuttle tears, drop stitches, or any hole regardless of size.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            <h4 style={{ color: '#D4AF37', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
              Our Commercial Threshold: &lt; 20 Points per 100 Square Yards
            </h4>
            <p style={{ color: '#CBD5E1', fontSize: '0.9375rem', margin: 0, lineHeight: '1.7' }}>
              While standard commercial grade permits up to 28-32 points per 100 sq. yards, Vasanthaa Textiless rejects any lot exceeding 20 points for export apparel shipments.
            </p>
          </div>
        </div>
      </section>

      {/* Lab dip and Physical Testing Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">PHYSICAL & CHEMICAL AUDITS</span>
            <h2 className="section-title">Standardized Laboratory Protocols</h2>
            <p className="section-desc">
              Every production lot is validated across 4 key physical and chemical criteria before shipping documentation is finalized.
            </p>
          </div>

          <div className="grid-2">
            
            <div className="b2b-card">
              <Eye size={28} color="#C51E3A" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Spectrophotometer Lab-Dip Approvals
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                We provide physical 3-way lab dip cards (A, B, C) calibrated to Pantone TCX, TPX, or your physical counter sample. Color evaluations are conducted in standardized light booths under D65 daylight, TL84 store lighting, and Incandescent A home lighting with strict Delta-E (&lt; 0.8) tolerances.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#0F172A', fontWeight: 600 }}>
                ✓ 3-5 Day turnaround on initial lab dips
              </div>
            </div>

            <div className="b2b-card">
              <Scale size={28} color="#D4AF37" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Dimensional Shrinkage Sanforization
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                We mandate mechanical sanforization on all woven cotton twills, drills, and poplins. Test samples undergo standard 60°C wash-and-tumble dry cycles according to ISO 6330 / AATCC 135 to verify that warp and weft shrinkage remains locked under 2.5%.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#0F172A', fontWeight: 600 }}>
                ✓ Guaranteed pattern marker stability for cutting rooms
              </div>
            </div>

            <div className="b2b-card">
              <Microscope size={28} color="#15803D" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Color Fastness Certification
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Dyes are tested for wash fastness (ISO 105-C06), dry and wet crocking/rub fastness (ISO 105-X12), and light fastness. We guarantee Grade 4 or above, ensuring vibrant colors that do not bleed into trims or companion panels.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#0F172A', fontWeight: 600 }}>
                ✓ Formal test certificates included with commercial invoice
              </div>
            </div>

            <div className="b2b-card">
              <FileCheck2 size={28} color="#0F172A" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                Seam Slippage & Tear Strength
              </h3>
              <p style={{ color: '#64748B', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Using electronic tensile testers, we verify warp and weft breaking strength and seam slippage resistance. This prevents fabric rupture at stress points on workwear trousers, shirts, and industrial overalls.
              </p>
              <div style={{ fontSize: '0.8125rem', color: '#0F172A', fontWeight: 600 }}>
                ✓ Meets corporate tender and export performance criteria
              </div>
            </div>

          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <button
              onClick={() => onOpenRFQ(null)}
              className="btn btn-primary btn-lg"
            >
              Request a Certified Trial Lot <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
