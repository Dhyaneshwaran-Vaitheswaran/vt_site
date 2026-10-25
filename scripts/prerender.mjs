// Vasanthaa Textiless — Build-Time Static Site Pre-Rendering (SSG) Engine
// Generates 100% crawlable static HTML files for Googlebot, Bingbot, and Social Scrapers

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

// Import data
import { FABRICS } from '../src/data/fabrics.js';
import { GARMENTS } from '../src/data/garments.js';

const DOMAIN = 'https://vasanthaatextiless.in';

// Master route definitions
const STATIC_ROUTES = [
  {
    path: '/',
    title: 'Vasanthaa Textiless | Woven Fabric Manufacturer & Apparel OEM | Erode, India',
    desc: 'Established in 1998 in Erode, Tamil Nadu. Direct manufacturer of Gada fabric, dyed woven fabrics, print poplin, double gauze, voil, canvas, drill, twill, dobby, jacquard, flux linen, and white fabrics. Full-package woven shirts, kurthas, dhotis, and cotton bags.',
    h1: 'End-to-End Woven Fabric Sourcing & Apparel Production Coordination',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/catalog',
    title: 'Woven Fabric Catalog | Gada, Twill, Drill, Poplin, Voil & Flux Linen | Vasanthaa Textiless Erode',
    desc: 'Explore export-grade woven fabric collections engineered in Erode: Gada greige cloth, dyed woven fabric, print poplin, double gauze, voil, canvas, drill, twill, dobby, jacquard, flux linen, and optical white fabrics.',
    h1: 'Specialty Woven Fabrics & Substrates Catalog',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/garments',
    title: 'Custom Woven Garment Manufacturer India | Shirts, Kurthas, Dhotis & Bags OEM | Vasanthaa Textiless',
    desc: 'Export-grade cut-and-sew apparel manufacturing in Tamil Nadu. Full-package all woven shirts, cotton kurthas, traditional dhoti garments, and cotton canvas bags with AQL 2.5 standards.',
    h1: 'Cut-and-Sew Apparel Coordination & OEM Manufacturing',
    ogImage: '/images/garment-manufacturing.webp'
  },
  {
    path: '/capabilities',
    title: 'Textile Manufacturing Capabilities | 4-Stage Weaving & Dyeing Coordination | Erode',
    desc: 'End-to-end fabric execution across Erode textile cluster: high-speed airjet/rapier weaving, Zero Liquid Discharge (ZLD) reactive dyeing, rotary printing, commercial finishing, and garmenting.',
    h1: 'Centralized Weaving, Dyeing & Finishing Infrastructure',
    ogImage: '/images/weaving-looms.webp'
  },
  {
    path: '/quality-assurance',
    title: 'Textile Quality Assurance & Lab Standards | ASTM 4-Point Inspection | Vasanthaa Textiless Erode',
    desc: 'Four-tier QA protocol adhering to ASTM and ISO standards: ASTM D5430 4-Point greige inspection, spectrophotometer lab dips, shrinkage control, and pre-dispatch testing in Erode.',
    h1: 'ASTM D5430 4-Point Fabric Inspection & QA Laboratory',
    ogImage: '/images/fabric-inspection.webp'
  },
  {
    path: '/about',
    title: 'About Vasanthaa Textiless | 28+ Years Textile Heritage | Main Supplier to Isha for a Decade',
    desc: 'Founded in 1998 by Mr. Vaitheswaran in Erode. Decades of mastery in woven textile sourcing, technical coordination, and proud main supplier of Isha for over 10 consecutive years.',
    h1: '28+ Years of Woven Textile Mastery in Erode, Tamil Nadu',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/resources',
    title: 'B2B Sourcing FAQs & Procurement Standards | Vasanthaa Textiless Erode',
    desc: 'Answers to common commercial questions regarding MOQs, lab dips, payments, and our centralized weaving & dyeing coordination in Erode.',
    h1: 'B2B Sourcing Knowledge Hub & Procurement Standards',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/contact',
    title: 'Contact Vasanthaa Textiless | Erode Facility & RFQ Desk | Wholesale Inquiries',
    desc: 'Connect with our commercial fabric desk at Erode, Tamil Nadu. Fast lab dip turnaround, sample swatch dispatch, and bulk order production coordination for fabrics and garments.',
    h1: 'Connect with Our Sourcing & Export Desk in Erode',
    ogImage: '/images/hero-craft.jpg'
  }
];

// Helper to escape HTML characters
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function runPrerender() {
  console.log('🚀 Starting Vasanthaa Textiless Static Pre-rendering Engine...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    console.error('❌ dist/index.html not found! Run "vite build" first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf8');

  const allRoutes = [...STATIC_ROUTES];

  // Add all primary fabric routes and alias routes
  for (const f of FABRICS) {
    allRoutes.push({
      path: `/fabric/${f.id}`,
      title: f.seoTitle || `${f.name} Manufacturer India | Vasanthaa Textiless`,
      desc: f.seoDesc || `Technical specifications for ${f.name} (${f.gsm}, ${f.fiber}). Direct manufacturer supply in Erode, India.`,
      h1: `${f.name} Manufacturer & Export Supplier`,
      fabric: f,
      ogImage: f.image
    });

    // Alias routes for high-intent search variations
    if (f.legacyIds && f.legacyIds.length > 0) {
      for (const legacyId of f.legacyIds) {
        allRoutes.push({
          path: `/fabric/${legacyId}`,
          title: f.seoTitle || `${f.name} Manufacturer India | Vasanthaa Textiless`,
          desc: f.seoDesc || `Technical specifications for ${f.name} (${f.gsm}, ${f.fiber}). Direct manufacturer supply in Erode, India.`,
          h1: `${f.name} Manufacturer & Export Supplier`,
          fabric: f,
          ogImage: f.image,
          isAlias: true
        });
      }
    }
  }

  // Add all primary garment routes and alias routes
  for (const g of GARMENTS) {
    allRoutes.push({
      path: `/garments/${g.id}`,
      title: g.seoTitle || `${g.name} Manufacturer India | Vasanthaa Textiless`,
      desc: g.seoDesc || `Custom ${g.name} manufacturing in Tamil Nadu. Export cut-and-sew apparel coordination.`,
      h1: `${g.name} — Full-Package Apparel OEM Exporter`,
      garment: g,
      ogImage: g.image
    });

    if (g.legacyIds && g.legacyIds.length > 0) {
      for (const legacyId of g.legacyIds) {
        allRoutes.push({
          path: `/garments/${legacyId}`,
          title: g.seoTitle || `${g.name} Manufacturer India | Vasanthaa Textiless`,
          desc: g.seoDesc || `Custom ${g.name} manufacturing in Tamil Nadu. Export cut-and-sew apparel coordination.`,
          h1: `${g.name} — Full-Package Apparel OEM Exporter`,
          garment: g,
          ogImage: g.image,
          isAlias: true
        });
      }
    }
  }

  let count = 0;

  for (const route of allRoutes) {
    const canonicalUrl = `${DOMAIN}${route.path === '/' ? '' : route.path}`;

    // Generate JSON-LD Schema
    const schemas = [];

    // BreadcrumbList Schema
    if (route.fabric) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Woven Fabric Catalog",
            "item": `${DOMAIN}/catalog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": route.fabric.name,
            "item": canonicalUrl
          }
        ]
      });

      const f = route.fabric;
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": f.name,
        "image": [`${DOMAIN}${f.image}`],
        "description": f.description,
        "brand": { "@type": "Brand", "name": "Vasanthaa Textiless" },
        "manufacturer": { "@id": `${DOMAIN}/#organization` },
        "material": f.fiber,
        "pattern": f.weave,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": f.moqBulk
          }
        }
      });

      if (f.faqs && f.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": f.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        });
      }
    } else if (route.garment) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${DOMAIN}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "All Garments OEM Coordination",
            "item": `${DOMAIN}/garments`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": route.garment.name,
            "item": canonicalUrl
          }
        ]
      });

      const g = route.garment;
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": g.name,
        "image": [`${DOMAIN}${g.image}`],
        "description": g.description,
        "brand": { "@type": "Brand", "name": "Vasanthaa Textiless" },
        "manufacturer": { "@id": `${DOMAIN}/#organization` },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": g.moqBulk
          }
        }
      });

      if (g.faqs && g.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": g.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        });
      }
    } else if (route.path === '/resources') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the Minimum Order Quantity (MOQ) for custom dyed and woven fabrics?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For standard woven fabrics, our sample lot MOQ is 100–150 meters for lab-dip evaluation. For commercial bulk production, our standard MOQ is 1,000 meters per colorway."
            }
          },
          {
            "@type": "Question",
            "name": "Does Vasanthaa Textiless sell raw yarn or cotton fiber?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Vasanthaa Textiless does NOT trade in raw yarn, cotton lint, or fiber. We operate strictly from fabric weaving forward: airjet/rapier weaving, unbleached gada greige, custom wet dyeing, printing, finishing, and cut-and-sew garment export."
            }
          },
          {
            "@type": "Question",
            "name": "What quality testing standards are applied prior to fabric roll dispatch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "100% of our production undergoes inspection under the internationally recognized ASTM D5430 4-Point System in our central Erode facility."
            }
          }
        ]
      });
    }

    // Generate Pre-rendered Semantic HTML for Googlebot / Non-JS Crawlers
    let bodyHtml = '';

    if (route.fabric) {
      const f = route.fabric;
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <a href="/catalog" style="color: #0A0A0A; text-decoration: none;">Woven Fabric Catalog</a> / <span style="color: #C51E3A; font-weight: 600;">${escapeHtml(f.name)}</span>
          </nav>
          <span style="color: #C51E3A; background: #FEF2F2; border: 1px solid rgba(197,30,58,0.2); padding: 0.25rem 0.6rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase;">${escapeHtml(f.category)} • ${escapeHtml(f.badge || 'B2B SPECIFICATION')}</span>
          <h1 style="font-size: 2.2rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">${escapeHtml(f.description)}</p>
          
          <h2 style="font-size: 1.4rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Technical Sourcing Specifications</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <tbody>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600; width: 30%;">Fiber Composition</td><td style="padding: 0.75rem;">${escapeHtml(f.fiber)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Weave Construction</td><td style="padding: 0.75rem;">${escapeHtml(f.weave)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Fabric Weight</td><td style="padding: 0.75rem; color: #C51E3A; font-weight: 700;">${escapeHtml(f.gsm)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Yarn Count</td><td style="padding: 0.75rem;">${escapeHtml(f.yarnCount)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Usable Finished Width</td><td style="padding: 0.75rem;">${escapeHtml(f.width)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Finishes & Chemistry</td><td style="padding: 0.75rem;">${escapeHtml(f.finish)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Sample Prototype MOQ</td><td style="padding: 0.75rem;">${escapeHtml(f.moqSample)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Commercial Bulk MOQ</td><td style="padding: 0.75rem; font-weight: 700;">${escapeHtml(f.moqBulk)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Lead Time</td><td style="padding: 0.75rem;">${escapeHtml(f.leadTime)}</td></tr>
            </tbody>
          </table>

          <h2 style="font-size: 1.3rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">Recommended Garment Applications</h2>
          <ul>
            ${f.applications.map(app => `<li style="margin-bottom: 0.4rem; color: #27272A;">${escapeHtml(app)}</li>`).join('')}
          </ul>

          <h2 style="font-size: 1.3rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">ASTM Quality Certification & Export Logistics</h2>
          <p style="color: #52525B; line-height: 1.7;">Every roll of ${escapeHtml(f.name)} undergoes mandatory inspection under ASTM D5430 4-Point System in our Erode QA facility. Pre-shrunk residual shrinkage governed under 2.5%, color fastness ISO Grade 4+. Global port export via FOB Tuticorin & FOB Chennai.</p>
          
          ${f.faqs && f.faqs.length > 0 ? `
            <div style="margin-top: 3rem; border-top: 2px solid #E4E4E7; padding-top: 2rem;">
              <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-bottom: 1.5rem; font-family: 'Outfit', sans-serif;">Frequently Asked Questions About ${escapeHtml(f.name)}</h2>
              ${f.faqs.map(faq => `
                <div style="margin-bottom: 1.5rem; background: #FAFAFA; border: 1px solid #E4E4E7; padding: 1.25rem; border-radius: 8px;">
                  <h3 style="font-size: 1.05rem; color: #0A0A0A; margin: 0 0 0.5rem 0; font-weight: 700;">${escapeHtml(faq.q)}</h3>
                  <p style="color: #52525B; margin: 0; line-height: 1.65; font-size: 0.95rem;">${escapeHtml(faq.a)}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/contact" style="display: inline-block; background: #C51E3A; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Request Bulk Quotation</a>
            <a href="https://wa.me/919842222580?text=Inquiry%20for%20${encodeURIComponent(f.name)}" style="display: inline-block; background: #18181B; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Chat on WhatsApp (+91 98422 22580)</a>
          </div>
        </div>
      `;
    } else if (route.garment) {
      const g = route.garment;
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <a href="/garments" style="color: #0A0A0A; text-decoration: none;">All Garments OEM Coordination</a> / <span style="color: #C51E3A; font-weight: 600;">${escapeHtml(g.name)}</span>
          </nav>
          <span style="color: #C51E3A; background: #FEF2F2; border: 1px solid rgba(197,30,58,0.2); padding: 0.25rem 0.6rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase;">${escapeHtml(g.category)} • DOWNSTREAM APPAREL EXPORT</span>
          <h1 style="font-size: 2.2rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">${escapeHtml(g.description)}</p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Garment Manufacturing Specifications</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <tbody>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600; width: 30%;">Monthly Capacity</td><td style="padding: 0.75rem;">${escapeHtml(g.productionCapacity)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Stitching Standard</td><td style="padding: 0.75rem;">${escapeHtml(g.stitchingSpecs)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Quality Audit Level</td><td style="padding: 0.75rem; color: #15803D; font-weight: 700;">${escapeHtml(g.aqlStandard)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Sample Prototype MOQ</td><td style="padding: 0.75rem;">${escapeHtml(g.moqSample)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Bulk Order MOQ</td><td style="padding: 0.75rem; font-weight: 700;">${escapeHtml(g.moqBulk)}</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Export Packaging</td><td style="padding: 0.75rem;">${escapeHtml(g.exportPackaging)}</td></tr>
            </tbody>
          </table>

          <h2 style="font-size: 1.3rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">Woven Fabric Substrates Used</h2>
          <ul>
            ${g.fabricPairings.map(p => `<li style="margin-bottom: 0.4rem; color: #27272A;">${escapeHtml(p)}</li>`).join('')}
          </ul>

          ${g.faqs && g.faqs.length > 0 ? `
            <div style="margin-top: 3rem; border-top: 2px solid #E4E4E7; padding-top: 2rem;">
              <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-bottom: 1.5rem; font-family: 'Outfit', sans-serif;">Frequently Asked Questions About ${escapeHtml(g.name)}</h2>
              ${g.faqs.map(faq => `
                <div style="margin-bottom: 1.5rem; background: #FAFAFA; border: 1px solid #E4E4E7; padding: 1.25rem; border-radius: 8px;">
                  <h3 style="font-size: 1.05rem; color: #0A0A0A; margin: 0 0 0.5rem 0; font-weight: 700;">${escapeHtml(faq.q)}</h3>
                  <p style="color: #52525B; margin: 0; line-height: 1.65; font-size: 0.95rem;">${escapeHtml(faq.a)}</p>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <div style="margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/contact" style="display: inline-block; background: #C51E3A; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Request Garment OEM Quote</a>
            <a href="https://wa.me/919842222580?text=Inquiry%20for%20${encodeURIComponent(g.name)}" style="display: inline-block; background: #18181B; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">WhatsApp Direct Desk (+91 98422 22580)</a>
          </div>
        </div>
      `;
    }

    // Build the complete HTML document
    let html = rawTemplate;

    // Update <title>
    html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

    // Update <meta name="description">
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(route.desc)}" />`
    );

    // Update canonical link
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Update OpenGraph
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(route.desc)}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    if (route.ogImage) {
      html = html.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image" content="${DOMAIN}${route.ogImage}" />`
      );
    }

    // Update Twitter
    html = html.replace(
      /<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:title" content="${escapeHtml(route.title)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:description" content="${escapeHtml(route.desc)}" />`
    );
    html = html.replace(
      /<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="twitter:url" content="${canonicalUrl}" />`
    );
    if (route.ogImage) {
      html = html.replace(
        /<meta\s+property="twitter:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="twitter:image" content="${DOMAIN}${route.ogImage}" />`
      );
    }

    // Add hreflang tags if not present
    const hreflangTags = `
    <!-- International Geo-Targeting -->
    <link rel="alternate" hreflang="en-IN" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en-US" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en-GB" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en-AE" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="en-AU" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />
    `;

    if (!html.includes('hreflang="en-IN"')) {
      html = html.replace('</head>', `${hreflangTags}\n</head>`);
    }

    // Inject Route-specific JSON-LD Schemas
    if (schemas.length > 0) {
      const schemaScript = `\n    <script type="application/ld+json" id="prerendered-route-schema">\n    ${JSON.stringify({ "@context": "https://schema.org", "@graph": schemas }, null, 2)}\n    </script>\n  `;
      html = html.replace('</head>', `${schemaScript}</head>`);
    }

    // Inject semantic body content inside #root
    if (bodyHtml) {
      html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${bodyHtml}</div>`
      );
    }

    // Write file to dist
    const targetDir = route.path === '/'
      ? distDir
      : path.join(distDir, ...route.path.split('/').filter(Boolean));

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');

    count++;
  }

  console.log(`✅ Pre-rendered ${count} static HTML landing pages with complete metadata & semantic content!`);
}

runPrerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
