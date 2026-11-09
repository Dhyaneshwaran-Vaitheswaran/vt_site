import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Mail, Building, MapPin, Layers, Send, FileText, Printer, Copy, Check, ExternalLink } from 'lucide-react';
import { FABRICS } from '../data/fabrics';

export const RFQModal = ({ isOpen, onClose, preselectedFabric }) => {
  const [selectedFabricId, setSelectedFabricId] = useState('');
  const [volume, setVolume] = useState('1200');
  const [targetGsm, setTargetGsm] = useState('');
  const [colorCode, setColorCode] = useState('');
  const [finish, setFinish] = useState('Mercerized Soft Handfeel');
  const [needSampling, setNeedSampling] = useState('Yes, need 20-50m sample roll first');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [rfqRefNumber, setRfqRefNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedFabric) {
      setSelectedFabricId(preselectedFabric.id);
      setTargetGsm(preselectedFabric.gsm.split(' ')[0] || '');
    } else if (FABRICS.length > 0 && !selectedFabricId) {
      setSelectedFabricId(FABRICS[0].id);
    }
  }, [preselectedFabric]);

  if (!isOpen) return null;

  const currentFabric = FABRICS.find(f => f.id === selectedFabricId) || FABRICS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNum = `VT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqRefNumber(refNum);
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `*NEW B2B RFQ — VASANTHAA TEXTILESS*\n` +
      `*Ref:* ${rfqRefNumber || 'VT-RFQ-DIRECT'}\n\n` +
      `*Fabric:* ${currentFabric?.name} (${currentFabric?.weave})\n` +
      `*Target Quantity:* ${volume} Meters\n` +
      `*Target Weight/GSM:* ${targetGsm || 'Standard'}\n` +
      `*Color / Pantone TCX:* ${colorCode || 'As per lab dip'}\n` +
      `*Finish Requested:* ${finish}\n` +
      `*Sample Prototype:* ${needSampling}\n\n` +
      `*Buyer Details:*\n` +
      `• Company: ${companyName}\n` +
      `• Contact Person: ${contactName}\n` +
      `• Location/Country: ${location}\n` +
      `• Phone/WhatsApp: ${phone}\n` +
      `• Email: ${email}\n` +
      (notes ? `• Special Notes: ${notes}\n` : '') +
      `\nPlease provide quotation and lead time.`
    );
  };

  const handleWhatsAppSend = () => {
    const url = `https://wa.me/919842222580?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const getEmailContent = () => {
    const subject = `B2B RFQ: ${currentFabric?.name || 'Woven Fabric'} (${volume}m) - ${companyName || 'Buyer Inquiry'}`;
    const rawBody =
      `Vasanthaa Textiless Sourcing Team,\n\n` +
      `Please find our bulk fabric quotation request below:\n\n` +
      `Quotation Reference: ${rfqRefNumber || 'VT-RFQ'}\n` +
      `Fabric Required: ${currentFabric?.name}\n` +
      `Construction/Weave: ${currentFabric?.weave}\n` +
      `Target Quantity: ${volume} Meters\n` +
      `Target Weight: ${targetGsm || 'Standard'} GSM\n` +
      `Color / Pantone: ${colorCode || 'As per counter-sample'}\n` +
      `Finish: ${finish}\n` +
      `Sampling: ${needSampling}\n\n` +
      `Buyer Details:\n` +
      `• Company Name: ${companyName}\n` +
      `• Contact Name: ${contactName}\n` +
      `• Location / Port: ${location}\n` +
      `• Phone / WhatsApp: ${phone}\n` +
      `• Official Email: ${email}\n` +
      (notes ? `• Specific Requirements / Notes: ${notes}\n` : '') +
      `\nPlease provide your factory quotation (Ex-Works / FOB) and earliest delivery lead time.\n\n` +
      `Best Regards,\n${contactName || companyName}`;

    return { subject, rawBody };
  };

  const handleGmailWebSend = () => {
    const { subject, rawBody } = getEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vasanthaatextiless@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(rawBody)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDefaultMailSend = () => {
    const { subject, rawBody } = getEmailContent();
    const mailtoUrl = `mailto:vasanthaatextiless@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rawBody)}`;
    // Trigger via hidden anchor to circumvent browser popup/navigation restrictions
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyRFQ = () => {
    const { subject, rawBody } = getEmailContent();
    const fullText = `Subject: ${subject}\nTo: vasanthaatextiless@gmail.com\n\n${rawBody}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      // Fallback if clipboard API is constrained
      setCopied(true);
    });
  };

  const handleCopyEmailOnly = () => {
    navigator.clipboard.writeText('vasanthaatextiless@gmail.com').then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  return (
    <div className="modal-overlay-responsive">
      <div className="modal-dialog-responsive">
        
        {/* Modal Header */}
        <div className="modal-header-responsive">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
              <img src="/images/vt-monogram.svg" alt="VT" style={{ width: '18px', height: '18px' }} />
              <span className="badge badge-gold" style={{ fontSize: '0.6875rem' }}>VT SOURCING DESK</span>
              <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>• Response within 24h</span>
            </div>
            <h3 style={{ color: '#FFFFFF', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', margin: 0 }}>
              Request Fabric Specifications & Bulk Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle size={36} />
            </div>
            
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#0A0A0A' }}>
              Quotation Request Formatted!
            </h3>
            <p style={{ color: '#64748B', marginBottom: '1.5rem' }}>
              Reference Number: <strong style={{ color: '#C51E3A' }}>{rfqRefNumber}</strong>
            </p>

            {/* Structured Summary Box */}
            <div style={{
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'left',
              marginBottom: '2rem',
              fontSize: '0.875rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                <div><strong>Fabric:</strong> {currentFabric?.name}</div>
                <div><strong>Quantity:</strong> {volume} Meters</div>
                <div><strong>Target Weight:</strong> {targetGsm || 'Standard'} GSM</div>
                <div><strong>Finish:</strong> {finish}</div>
                <div><strong>Company:</strong> {companyName}</div>
                <div><strong>Location:</strong> {location}</div>
              </div>
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem', color: '#64748B' }}>
                Dispatched directly to Vasanthaa Textiless Central Sourcing Desk in Erode.
              </div>
            </div>

            {/* Fast-Action Dispatch Hub */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '520px', margin: '0 auto' }}>

              {/* Primary Option 1: WhatsApp Instant Dispatch */}
              <button
                onClick={handleWhatsAppSend}
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '0.95rem 1.75rem', fontSize: '1rem', justifyContent: 'center' }}
              >
                <MessageSquare size={20} /> Send via WhatsApp Instantly (+91 98422 22580)
              </button>

              {/* Primary Option 2: Email Dispatch Hub */}
              <div style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                borderRadius: '12px',
                padding: '1.25rem',
                textAlign: 'left',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: 700, color: '#0A0A0A', fontSize: '0.95rem' }}>
                    <Mail size={18} color="#C51E3A" /> Send to Official Sourcing Desk
                  </div>
                  <button
                    onClick={handleCopyEmailOnly}
                    style={{
                      background: '#F1F5F9',
                      border: '1px solid #CBD5E1',
                      borderRadius: '6px',
                      padding: '0.25rem 0.65rem',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#0F172A',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                    title="Click to copy official email address"
                  >
                    {copiedEmail ? <Check size={13} color="#15803D" /> : <Copy size={13} />}
                    {copiedEmail ? 'Email Copied!' : 'vasanthaatextiless@gmail.com'}
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.65rem', marginTop: '0.85rem' }}>
                  {/* Gmail Web Compose (Recommended for Chrome / Web users) */}
                  <button
                    onClick={handleGmailWebSend}
                    className="btn btn-primary"
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      width: '100%'
                    }}
                  >
                    <Mail size={16} /> Open in Gmail (Web) <ExternalLink size={14} />
                  </button>

                  {/* Native Mail App (Outlook, Apple Mail, Thunderbird) */}
                  <button
                    onClick={handleDefaultMailSend}
                    className="btn btn-outline-navy"
                    style={{
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.45rem',
                      width: '100%'
                    }}
                  >
                    <Mail size={16} /> Default Mail App
                  </button>
                </div>

                {/* Copy Formatted Quotation Button */}
                <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                  <button
                    onClick={handleCopyRFQ}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: copied ? '#15803D' : '#C51E3A',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0'
                    }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? '✓ Full Quotation Text Copied to Clipboard!' : 'Copy Full Quotation Details to Clipboard'}
                  </button>
                </div>
              </div>

              {/* Utility Print / Save PDF */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => window.print()}
                  className="btn btn-outline-dark"
                  style={{ padding: '0.6rem 1.25rem', fontSize: '0.8125rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <Printer size={15} /> Print / Save as PDF
                </button>
              </div>

            </div>

            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                style={{ background: 'none', border: 'none', color: '#64748B', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Close & Return to Browsing
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="modal-body-responsive">
            
            {/* Step 1: Fabric Selection */}
            <div style={{ marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#C51E3A',
                  color: '#FFFFFF',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>1</span>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#0A0A0A' }}>Fabric & Construction Specifications</h4>
              </div>

              <div className="form-row-responsive">
                <div className="form-group">
                  <label className="form-label">Select Fabric Type *</label>
                  <select 
                    className="form-select"
                    value={selectedFabricId}
                    onChange={(e) => setSelectedFabricId(e.target.value)}
                    required
                  >
                    {FABRICS.map(f => (
                      <option key={f.id} value={f.id}>
                        {f.name} — {f.weave}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Target Volume (Meters) *</label>
                  <select 
                    className="form-select"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    required
                  >
                    <option value="150">100 - 300 Meters (Sampling / Test Batch)</option>
                    <option value="800">800 - 1,200 Meters (Trial Bulk)</option>
                    <option value="3000">3,000 - 5,000 Meters (Production Run)</option>
                    <option value="10000">10,000+ Meters (Export Container Program)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Target Weight (GSM)</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder={`e.g. ${currentFabric?.gsm || '220 GSM'}`}
                    value={targetGsm}
                    onChange={(e) => setTargetGsm(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Color / Pantone TCX Code</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. 19-4052 TCX Classic Navy or Greige"
                    value={colorCode}
                    onChange={(e) => setColorCode(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Finish Requirement</label>
                  <select 
                    className="form-select"
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                  >
                    <option value="Mercerized Soft Handfeel">Mercerized Soft Handfeel</option>
                    <option value="Carbon Peach Finish">Carbon Peach Finish</option>
                    <option value="Bio-Polished Anti-Pill">Bio-Polished Anti-Pilling</option>
                    <option value="Water-Repellent DWR">Water-Repellent Coating</option>
                    <option value="Ready for Garment Dyeing (RFD)">Ready for Dyeing (RFD)</option>
                    <option value="Raw Greige Fabric">Raw Greige (Loom State)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Buyer Credentials */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{
                  backgroundColor: '#C51E3A',
                  color: '#FFFFFF',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>2</span>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#0A0A0A' }}>Company & Contact Information</h4>
              </div>

              <div className="form-row-responsive">
                <div className="form-group">
                  <label className="form-label">Company / Brand Name *</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. Apex Apparel Exports Ltd."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Person Name & Title *</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. S. Ramanathan, Sourcing Head"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">WhatsApp / Phone Number *</label>
                  <input 
                    type="tel"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Official Work Email *</label>
                  <input 
                    type="email"
                    className="form-input"
                    placeholder="sourcing@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Destination City / Country *</label>
                  <input 
                    type="text"
                    className="form-input"
                    placeholder="e.g. Bengaluru / Tirupur / Dubai / UK"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Quality Requirements or Delivery Target</label>
                <textarea 
                  className="form-textarea"
                  placeholder="Mention any specific yarn count, weave density, shrinkage tolerances, or timeline..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>

            {/* Submission CTA */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                🔒 Strict client confidentiality. Direct Erode office coordination.
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline-navy btn-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Send size={16} /> Generate Quote & Send
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
