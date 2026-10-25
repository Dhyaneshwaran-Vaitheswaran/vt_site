import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/resources';

export const Resources = ({ onOpenRFQ }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>
      
      {/* Header Banner — Pure Black & Red */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid #27272A'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-red" style={{ marginBottom: '1rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
              B2B PROCUREMENT INTELLIGENCE
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '1.25rem', fontWeight: 800 }}>
              Commercial & Sourcing FAQs
            </h1>
            <p style={{ color: '#D4D4D8', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Direct operational answers regarding order minimums (MOQs), lab dip approvals, quality testing standards, and our centralized weaving & dyeing coordination in Erode.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing FAQs Accordion Section */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">Everything You Need to Know Before Sourcing</h2>
            <p className="section-desc">
              Transparent answers to common questions asked by garment manufacturers, buying agencies, and apparel brands.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #E4E4E7',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: expandedFaq === idx ? '0 4px 16px rgba(0,0,0,0.04)' : 'none',
                  transition: 'all 200ms ease'
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.75rem',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#0A0A0A',
                    gap: '1rem'
                  }}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === idx ? <ChevronUp size={20} color="#C51E3A" style={{ flexShrink: 0 }} /> : <ChevronDown size={20} color="#71717A" style={{ flexShrink: 0 }} />}
                </button>

                {expandedFaq === idx && (
                  <div style={{
                    padding: '0 1.75rem 1.75rem 1.75rem',
                    color: '#52525B',
                    fontSize: '0.95rem',
                    lineHeight: '1.75',
                    borderTop: '1px solid #F4F4F5'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct CTA Box */}
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '18px',
            padding: '3rem 2rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0A0A0A', marginBottom: '0.75rem', fontWeight: 800 }}>
              Have a Custom Fabric Specification or Tender Inquiry?
            </h3>
            <p style={{ color: '#52525B', fontSize: '0.975rem', maxWidth: '600px', margin: '0 auto 1.75rem auto', lineHeight: '1.7' }}>
              Our commercial fabric coordinators in Erode review and respond to formal inquiries and tech packs within 4 business hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary btn-lg"
              >
                Submit Custom RFQ <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20a%20commercial%20question%20regarding%20fabric%20sourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageSquare size={18} /> Ask on WhatsApp Desk (+91 98422 22580)
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
