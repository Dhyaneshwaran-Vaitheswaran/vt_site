import React, { useState } from 'react';
import { BookOpen, Calculator, ChevronDown, ChevronUp, FileText, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ARTICLES, FAQS } from '../data/resources';

export const Resources = ({ onOpenRFQ }) => {
  const [selectedArticle, setSelectedArticle] = useState(ARTICLES[0]);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Interactive Yarn Count to GSM Estimator Calculator
  const [warpCount, setWarpCount] = useState(40);
  const [weftCount, setWeftCount] = useState(40);
  const [epi, setEpi] = useState(92);
  const [ppi, setPpi] = useState(88);
  const [crimpPercent, setCrimpPercent] = useState(5);

  // Formula:
  // Warp wt in oz/sq.yd = (EPI / Ne) * 1.05 * (36/840)
  // Standard metric GSM formula: ( (EPI / WarpCount) + (PPI / WeftCount) ) * 25.6 * (1 + Crimp/100)
  const estimatedGsm = Math.round(
    ((epi / (warpCount || 1)) + (ppi / (weftCount || 1))) * 25.4 * (1 + crimpPercent / 100)
  );

  return (
    <div style={{ backgroundColor: '#FBF9F5', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <section style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '4.5rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>TECHNICAL SOURCING INTELLIGENCE</span>
            <h1 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: '1.25rem' }}>
              Textile Sourcing Guides & Calculation Tools
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Practical engineering guides, construction formulas, and procurement best practices written for apparel merchandisers, sourcing heads, and garment exporters.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool: Woven GSM Estimator */}
      <section className="section-padding-sm" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            padding: '2.5rem',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <Calculator size={20} color="#C51E3A" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#C51E3A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                INTERACTIVE ENGINEERING TOOL
              </span>
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Woven Fabric Theoretical GSM Calculator
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '720px', marginBottom: '2rem' }}>
              Estimate the target finished weight (GSM) of a 100% cotton woven fabric based on English Cotton Yarn Count (Ne), Ends Per Inch (EPI), and Picks Per Inch (PPI).
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '1rem',
              alignItems: 'flex-end',
              marginBottom: '2rem'
            }}>
              <div>
                <label className="form-label">Warp Yarn Count (Ne)</label>
                <input
                  type="number"
                  className="form-input"
                  value={warpCount}
                  onChange={(e) => setWarpCount(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="form-label">Weft Yarn Count (Ne)</label>
                <input
                  type="number"
                  className="form-input"
                  value={weftCount}
                  onChange={(e) => setWeftCount(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="form-label">Ends / Inch (EPI)</label>
                <input
                  type="number"
                  className="form-input"
                  value={epi}
                  onChange={(e) => setEpi(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="form-label">Picks / Inch (PPI)</label>
                <input
                  type="number"
                  className="form-input"
                  value={ppi}
                  onChange={(e) => setPpi(Number(e.target.value))}
                />
              </div>

              <div>
                <label className="form-label">Weave Crimp Factor (%)</label>
                <input
                  type="number"
                  className="form-input"
                  value={crimpPercent}
                  onChange={(e) => setCrimpPercent(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Result Box */}
            <div style={{
              backgroundColor: '#0F172A',
              color: '#FFFFFF',
              borderRadius: '12px',
              padding: '1.5rem 2rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem'
            }}>
              <div>
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Theoretical Calculated Weight
                </span>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 800, color: '#D4AF37' }}>
                  ~{estimatedGsm} <span style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>GSM</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#CBD5E1' }}>
                  Estimated construction: {warpCount}s × {weftCount}s / {epi} × {ppi}
                </div>
              </div>

              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                Inquire on this Custom Construction <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Articles Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">FEATURED SOURCING GUIDES</span>
            <h2 className="section-title">Industry Technical Articles</h2>
            <p className="section-desc">
              Authoritative guides on fabric construction, international testing norms, and Tamil Nadu's industrial textile cluster.
            </p>
          </div>

          <div className="two-col-layout-responsive" style={{ alignItems: 'flex-start' }}>
            
            {/* Article Selector List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ARTICLES.map(art => (
                <div
                  key={art.slug}
                  onClick={() => setSelectedArticle(art)}
                  className="b2b-card"
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    borderLeft: selectedArticle.slug === art.slug ? '4px solid #C51E3A' : '1px solid #E2E8F0',
                    backgroundColor: selectedArticle.slug === art.slug ? '#FFFFFF' : '#F8FAFC',
                    boxShadow: selectedArticle.slug === art.slug ? '0 8px 20px rgba(0,0,0,0.06)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#C51E3A', fontWeight: 700, textTransform: 'uppercase' }}>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                    {art.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: '1.6', margin: 0 }}>
                    {art.excerpt}
                  </p>
                </div>
              ))}
            </div>

            {/* Active Article Full Viewer */}
            <div className="b2b-card" style={{ padding: '2.5rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span className="badge badge-terracotta">{selectedArticle.category}</span>
                <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>{selectedArticle.date} • {selectedArticle.readTime}</span>
              </div>

              <h2 style={{ fontSize: '2rem', color: '#0F172A', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                {selectedArticle.title}
              </h2>

              <div style={{
                fontSize: '0.95rem',
                color: '#334155',
                lineHeight: '1.8',
                borderTop: '1px solid #E2E8F0',
                paddingTop: '1.5rem'
              }}>
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} style={{ fontSize: '1.35rem', color: '#0F172A', margin: '1.75rem 0 0.75rem 0' }}>{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('#### ')) {
                    return <h4 key={idx} style={{ fontSize: '1.15rem', color: '#C51E3A', margin: '1.25rem 0 0.5rem 0' }}>{paragraph.replace('#### ', '')}</h4>;
                  } else if (paragraph.includes('|')) {
                    return null; // Skip markdown table raw in text or render custom
                  } else {
                    return <p key={idx} style={{ marginBottom: '1rem', color: '#475569' }}>{paragraph}</p>;
                  }
                })}
              </div>

              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #E2E8F0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <span style={{ fontSize: '0.8125rem', color: '#64748B' }}>
                  Authored by Vasanthaa Textiless Sourcing & Technical Team, Erode
                </span>
                <button
                  onClick={() => onOpenRFQ(null)}
                  className="btn btn-primary btn-sm"
                >
                  Inquire on these Specifications
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Sourcing FAQs Accordion */}
      <section className="section-padding" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Commercial & Sourcing FAQs</h2>
            <p className="section-desc">
              Answers to common operational questions regarding MOQs, lab dips, payments, and our coordinated supply chain model.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  backgroundColor: expandedFaq === idx ? '#F8FAFC' : '#FFFFFF'
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0F172A'
                  }}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === idx ? <ChevronUp size={18} color="#C51E3A" /> : <ChevronDown size={18} color="#94A3B8" />}
                </button>

                {expandedFaq === idx && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    color: '#475569',
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#64748B', fontSize: '0.9375rem', marginBottom: '1rem' }}>
              Have a specific question not covered here?
            </p>
            <a
              href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20a%20commercial%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Ask on WhatsApp Sourcing Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
