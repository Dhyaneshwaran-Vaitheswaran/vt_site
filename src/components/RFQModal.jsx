import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Mail, Building, MapPin, Layers, Send, FileText, Printer } from 'lucide-react';
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
    const url = `https://wa.me/919786222580?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`B2B RFQ: ${currentFabric?.name} (${volume}m) - ${companyName}`);
    const body = encodeURIComponent(
      `Vasanthaa Textiless Sourcing Team,\n\n` +
      `Please find our bulk fabric quotation request below:\n\n` +
      `Quotation Reference: ${rfqRefNumber || 'VT-RFQ'}\n` +
      `Fabric Required: ${currentFabric?.name}\n` +
      `Construction/Weave: ${currentFabric?.weave}\n` +
      `Target Quantity: ${volume} Meters\n` +
      `Target Weight: ${targetGsm} GSM\n` +
      `Color / Pantone: ${colorCode}\n` +
      `Finish: ${finish}\n` +
      `Sampling: ${needSampling}\n\n` +
      `Company Name: ${companyName}\n` +
      `Contact Name: ${contactName}\n` +
      `Location: ${location}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Notes: ${notes}\n\n` +
      `Looking forward to your quotation.`
    );
    window.location.href = `mailto:vasanthaatextiless@gmail.com?subject=${subject}&body=${body}`;
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
            
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#0F172A' }}>
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                <div><strong>Fabric:</strong> {currentFabric?.name}</div>
                <div><strong>Quantity:</strong> {volume} Meters</div>
                <div><strong>Target Weight:</strong> {targetGsm || 'Standard'} GSM</div>
                <div><strong>Finish:</strong> {finish}</div>
                <div><strong>Company:</strong> {companyName}</div>
                <div><strong>Location:</strong> {location}</div>
              </div>
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '0.75rem', color: '#64748B' }}>
                Dispatched directly to Vasanthaa Textiless Central Sourcing Desk in Erode Fort.
              </div>
            </div>

            {/* Fast-Action Dispatch Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleWhatsAppSend}
                className="btn btn-whatsapp"
                style={{ padding: '0.875rem 1.75rem' }}
              >
                <MessageSquare size={18} /> Send via WhatsApp Instantly
              </button>
              
              <button
                onClick={handleEmailSend}
                className="btn btn-primary"
                style={{ padding: '0.875rem 1.75rem' }}
              >
                <Mail size={18} /> Send via Official Email
              </button>

              <button
                onClick={() => window.print()}
                className="btn btn-outline-navy"
                style={{ padding: '0.875rem 1.5rem' }}
              >
                <Printer size={16} /> Print Copy
              </button>
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
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#0F172A' }}>Fabric & Construction Specifications</h4>
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
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#0F172A' }}>Company & Contact Information</h4>
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
                🔒 Strict client confidentiality. Direct Erode Fort office coordination.
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
