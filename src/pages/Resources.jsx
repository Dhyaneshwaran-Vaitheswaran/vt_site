import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/resources';

export const Resources = ({ onOpenRFQ }) => {
  const [expandedFaq, setExpandedFaq] = useState(0);

  return (
    <div style={{ backgroundColor: '#FBF9F5', paddingBottom: '6rem' }}>
      
      {/* Header Banner */}
      <section style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: 'clamp(3rem, 6vw, 4.5rem) 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>B2B PROCUREMENT INTELLIGENCE</span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
              Commercial & Sourcing FAQs
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.95rem, 2vw, 1.125rem)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Direct operational answers regarding order minimums (MOQs), lab dip approvals, quality testing standards, and our centralized weaving & dyeing coordination in Erode.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing FAQs Accordion Section */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: expandedFaq === idx ? '#F8FAFC' : '#FFFFFF',
                  boxShadow: expandedFaq === idx ? '0 4px 14px rgba(0,0,0,0.04)' : 'none',
                  transition: 'all 200ms ease'
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
                    color: '#0F172A',
                    gap: '1rem'
                  }}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === idx ? <ChevronUp size={20} color="#C51E3A" style={{ flexShrink: 0 }} /> : <ChevronDown size={20} color="#94A3B8" style={{ flexShrink: 0 }} />}
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

          {/* Direct CTA Box */}
          <div style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '2.5rem 1.5rem',
            boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
          }}>
            <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              Have a Custom Fabric Specification or Tender Inquiry?
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9375rem', maxWidth: '580px', margin: '0 auto 1.5rem auto', lineHeight: '1.6' }}>
              Our commercial fabric coordinators in Erode review and respond to formal inquiries and tech packs within 4 business hours.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Submit Custom RFQ <ArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/919786222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20a%20commercial%20question%20regarding%20fabric%20sourcing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageSquare size={16} /> Ask on WhatsApp Desk
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
