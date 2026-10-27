import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Building, Send, CheckCircle2, ShieldCheck, FileText, Navigation, ExternalLink } from 'lucide-react';
import { FABRICS } from '../data/fabrics';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fabricInterest: 'General Sourcing Inquiry',
    quantity: '1000 - 3000 Meters',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*DIRECT INQUIRY — VASANTHAA TEXTILESS*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Company:* ${formData.company}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Fabric Program:* ${formData.fabricInterest}\n` +
      `*Target Volume:* ${formData.quantity}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/919842222580?text=${text}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`B2B Inquiry: ${formData.fabricInterest} - ${formData.company}`);
    const body = encodeURIComponent(
      `Vasanthaa Textiless Sourcing Team,\n\n` +
      `Contact Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Target Fabric: ${formData.fabricInterest}\n` +
      `Volume: ${formData.quantity}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:vasanthaatextiless@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>

      {/* Header Banner — Pure Black & Red */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
        borderBottom: '1px solid #27272A'
      }}>
        <div className="container">
          <div style={{ maxWidth: '840px' }}>
            <span className="badge badge-red" style={{ marginBottom: '1rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
              DIRECT SOURCING DESK
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
              Connect with Vasanthaa Textiless
            </h1>
            <p style={{ color: '#D4D4D8', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Located in the commercial heart of Erode, Tamil Nadu. Reach our sourcing coordinators for fabric samples, lab dips, pricing, and manufacturing coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section-padding" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container">
          <div className="two-col-layout-responsive" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>

            {/* Left Column: Authentic Office Details */}
            <div>
              <span className="section-kicker">ERODE HEADQUARTERS</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.25rem)', color: '#0A0A0A', marginBottom: '1.5rem', fontWeight: 800 }}>
                Visit or Contact Our Central Desk
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>

                {/* Location */}
                <div className="b2b-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem', backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7' }}>
                  <MapPin size={26} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.35rem', fontWeight: 700 }}>
                      Registered Office & Central Inspection
                    </strong>
                    <p style={{ fontSize: '0.925rem', color: '#52525B', lineHeight: '1.6', margin: 0 }}>
                      3, Vasuki St, 2nd Street,<br />
                      Erode, Tamil Nadu 638001, India
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="b2b-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem', backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7' }}>
                  <Phone size={26} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.35rem', fontWeight: 700 }}>
                      Direct Telephone Lines
                    </strong>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                      <a href="tel:+919842222580" style={{ color: '#0A0A0A', fontWeight: 800 }}>+91 98422 22580</a> <span style={{ color: '#C51E3A', fontWeight: 700 }}>(Primary Desk & WhatsApp)</span>
                    </div>
                    <div style={{ fontSize: '0.925rem' }}>
                      <a href="tel:+919786222580" style={{ color: '#52525B', fontWeight: 600 }}>+91 97862 22580</a> <span style={{ color: '#71717A' }}>(Secondary Desk / Hotline)</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="b2b-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem', backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7' }}>
                  <Mail size={26} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.35rem', fontWeight: 700 }}>
                      Official Email
                    </strong>
                    <a href="mailto:vasanthaatextiless@gmail.com" style={{ fontSize: '0.95rem', color: '#C51E3A', fontWeight: 700 }}>
                      vasanthaatextiless@gmail.com
                    </a>
                    <div style={{ fontSize: '0.85rem', color: '#71717A', marginTop: '0.25rem' }}>
                      Formal RFQs, Purchase Orders & Lab-dip communications
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="b2b-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem', backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7' }}>
                  <Clock size={26} color="#0A0A0A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.35rem', fontWeight: 700 }}>
                      Business Hours
                    </strong>
                    <p style={{ fontSize: '0.925rem', color: '#52525B', margin: 0, lineHeight: '1.6' }}>
                      Monday – Saturday: 9:00 AM – 7:30 PM IST<br />
                      Sunday: Closed (WhatsApp emergency orders monitored)
                    </p>
                  </div>
                </div>

                {/* Logistics & Commercial Terms */}
                <div className="b2b-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem', borderLeft: '4px solid #C51E3A', backgroundColor: '#FFFFFF' }}>
                  <Building size={26} color="#C51E3A" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: '#0A0A0A', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Logistics Hubs & Commercial Terms
                    </strong>
                    <div style={{ fontSize: '0.875rem', color: '#52525B', lineHeight: '1.7' }}>
                      <div>• <strong>Transit Seaports:</strong> Tuticorin VOC (~340km) • Chennai (~400km) • Kochi (~260km)</div>
                      <div>• <strong>Air Cargo:</strong> Coimbatore Int'l Airport CJB (95km)</div>
                      <div>• <strong>Trade Terms:</strong> Ex-Mill Erode, FOR Domestic, FOB & CIF Worldwide</div>
                      <div>• <strong>Payment Methods:</strong> Irrevocable LC at Sight, 30% Advance + 70% against BL/Inspection, Wire (RTGS/NEFT/SWIFT)</div>
                      <div>• <strong>Compliance:</strong> GSTIN Active (Tamil Nadu Code 33) • Registered IEC Active</div>
                      <div>• <strong>Key Clientele:</strong> Main Supplier of Isha (10+ Years)</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Fast WhatsApp Box */}
              <div style={{
                backgroundColor: '#DCFCE7',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                borderRadius: '16px',
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <div>
                  <strong style={{ color: '#166534', fontSize: '1.05rem', display: 'block', fontWeight: 700 }}>
                    Need Immediate Fabric Assistance?
                  </strong>
                  <span style={{ fontSize: '0.875rem', color: '#14532D' }}>
                    Chat directly with our Erode sourcing coordinator.
                  </span>
                </div>
                <a
                  href="https://wa.me/919842222580?text=Hello%20Vasanthaa%20Textiless,%20I%20have%20an%20inquiry%20regarding%20fabric%20orders."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquare size={16} /> Open WhatsApp (+91 98422 22580)
                </a>
              </div>

            </div>

            {/* Right Column: Interactive B2B Contact Form */}
            <div className="b2b-card" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E4E4E7', padding: 'clamp(1.25rem, 3.5vw, 2.5rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                <FileText size={18} color="#C51E3A" />
                <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: '#C51E3A', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  DIRECT INQUIRY & QUOTE FORM
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', color: '#0A0A0A', marginBottom: '1.5rem', fontWeight: 800 }}>
                Send Us Your Fabric Requirements
              </h3>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <CheckCircle2 size={48} color="#C51E3A" style={{ margin: '0 auto 1.25rem auto' }} />
                  <h4 style={{ fontSize: '1.4rem', color: '#0A0A0A', marginBottom: '0.5rem', fontWeight: 700 }}>
                    Inquiry Details Ready for Dispatch!
                  </h4>
                  <p style={{ color: '#52525B', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Thank you <strong>{formData.name}</strong>. Choose your preferred dispatch channel to submit your request directly to Vasanthaa Textiless in Erode.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <button
                      onClick={handleWhatsAppSend}
                      className="btn btn-whatsapp btn-lg"
                      style={{ width: '100%' }}
                    >
                      <MessageSquare size={18} /> Submit Instantly on WhatsApp
                    </button>
                    <button
                      onClick={handleEmailSend}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%' }}
                    >
                      <Mail size={18} /> Submit via Official Email
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      style={{ background: 'none', border: 'none', color: '#71717A', textDecoration: 'underline', cursor: 'pointer', marginTop: '0.5rem' }}
                    >
                      Edit Submission
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div className="form-row-responsive">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Anand Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / Brand *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Radiant Apparel Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-responsive">
                    <div className="form-group">
                      <label className="form-label">Official Work Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="anand@radiant.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">WhatsApp / Phone *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-responsive">
                    <div className="form-group">
                      <label className="form-label">Fabric / Apparel Category</label>
                      <select
                        className="form-select"
                        value={formData.fabricInterest}
                        onChange={(e) => setFormData({ ...formData, fabricInterest: e.target.value })}
                      >
                        <option value="Cotton Twills & Drills">Cotton Twills & Drills</option>
                        <option value="Dhoti & Dhoti Pants">Traditional Dhotis & Dhoti Pants</option>
                        <option value="Kurtas & Kurtha Pants">Organic Cotton & Linen Kurtas</option>
                        <option value="Cotton Bags & Totes">100% Cotton & Save Soil Bags</option>
                        <option value="Rudraksha Bags & Pouches">Consecrated Rudraksha Pouches</option>
                        <option value="Meditation & Ceremonial Shawls">Meditation & Ceremonial Shawls</option>
                        <option value="Linen & Cotton Blends">Linen & Cotton Blends</option>
                        <option value="Fluid Viscose & Rayon">Fluid Viscose & Rayon</option>
                        <option value="Full Garmenting Coordination">Full Garmenting Coordination</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Estimated Order Quantity</label>
                      <select
                        className="form-select"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      >
                        <option value="100 - 300 Meters (Sampling / Proto)">100 - 300 Meters (Sampling)</option>
                        <option value="1000 - 3000 Meters (Trial Bulk)">1,000 - 3,000 Meters</option>
                        <option value="5000 - 15000 Meters (Production Run)">5,000 - 15,000 Meters</option>
                        <option value="20000+ Meters (Annual Contract)">20,000+ Meters</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specifications, Colors, or Target Delivery Dates *</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Please include target GSM, pantone shades, weave constructions, or specific performance finish requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <Send size={18} /> Submit Sourcing Requirement
                  </button>

                  <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: '#71717A' }}>
                    🔒 All buyer specifications and proprietary designs remain strictly confidential.
                  </div>

                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Facility Location Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(3rem, 6vw, 5rem) 0', borderTop: '1px solid #E4E4E7' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 3rem auto' }}>
            <span className="section-kicker">LOCAL HUB & LOGISTICS GATEWAY</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.35rem)' }}>
              Find Us in Erode, Tamil Nadu
            </h2>
            <p className="section-desc" style={{ fontSize: '1rem' }}>
              Positioned in the historic textile trading district of Erode with direct transit access to Tirupur garment manufacturers, Coimbatore industrial corridor, and Tuticorin port.
            </p>
          </div>

          <div className="two-col-layout-responsive" style={{ gap: '2.5rem', alignItems: 'stretch' }}>

            {/* Interactive Google Maps Embed */}
            <div className="b2b-card" style={{ padding: '0.85rem', display: 'flex', flexDirection: 'column', border: '1px solid #E4E4E7' }}>
              <div style={{ width: '100%', height: '100%', minHeight: '380px', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                  title="Vasanthaa Textiless Erode Location"
                  src="https://maps.google.com/maps?q=3,+Vasuki+St,+2nd+Street,+Erode,+Tamil+Nadu+638001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Local Transit & Buyer Directions Card */}
            <div className="b2b-card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #E4E4E7' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <MapPin size={24} color="#C51E3A" />
                  <h3 style={{ fontSize: '1.35rem', color: '#0A0A0A', margin: 0, fontWeight: 700 }}>
                    Central Facility Address
                  </h3>
                </div>

                <div style={{ backgroundColor: '#FAFAFA', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #C51E3A', border: '1px solid #E4E4E7', borderLeftWidth: '4px', marginBottom: '1.75rem' }}>
                  <strong style={{ color: '#0A0A0A', display: 'block', fontSize: '1rem', fontWeight: 800 }}>Vasanthaa Textiless</strong>
                  <div style={{ color: '#52525B', fontSize: '0.925rem', lineHeight: '1.6', marginTop: '0.25rem' }}>
                    3, Vasuki St, 2nd Street, Erode,<br />
                    Tamil Nadu 638001, India<br />
                    <span style={{ fontSize: '0.8rem', color: '#71717A' }}>Landmark: Near Clock Tower & Cauvery Trade Market</span>
                  </div>
                </div>

                <h4 style={{ fontSize: '0.95rem', color: '#0A0A0A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
                  Transit Corridors & Travel Distances
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: '#52525B', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Navigation size={16} color="#C51E3A" />
                    <span><strong>Erode Junction (ED):</strong> 2.8 km (~8 min by car)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Navigation size={16} color="#C51E3A" />
                    <span><strong>Tirupur Garment Hub:</strong> 50 km (Direct via NH 544 highway)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Navigation size={16} color="#C51E3A" />
                    <span><strong>Coimbatore Int'l Airport (CJB):</strong> 95 km (~1 hr 45 min drive)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Navigation size={16} color="#C51E3A" />
                    <span><strong>Tuticorin Port (VOCPT):</strong> 340 km (Weekly container feeder dispatch)</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a
                  href="https://maps.google.com/?q=3,+Vasuki+St,+2nd+Street,+Erode,+Tamil+Nadu+638001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}
                >
                  <Navigation size={16} /> Get Driving Directions <ExternalLink size={14} />
                </a>
                <a
                  href="tel:+919842222580"
                  className="btn btn-outline-dark"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}
                >
                  <Phone size={16} /> Call Primary Desk (+91 98422 22580)
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
