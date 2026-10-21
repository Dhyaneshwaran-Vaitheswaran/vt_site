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
    desc: 'Established in 1998 in Erode, Tamil Nadu. Vasanthaa Textiless delivers end-to-end woven textile manufacturing, custom dyeing, printing, and downstream cut-and-sew apparel export.',
    h1: 'End-to-End Woven Fabric Sourcing & Apparel Production Coordination',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/catalog',
    title: 'Woven Fabric Catalog | Cotton Twill, Drill, Poplin & Blends | Vasanthaa Textiless Erode',
    desc: 'Explore export-grade woven fabric collections engineered in Erode: combed cotton twill, heavy drill, unbleached gada greige, double gauze, poplin, and pure linen.',
    h1: 'Specialty Woven Fabrics & Substrates Catalog',
    ogImage: '/images/hero-craft.jpg'
  },
  {
    path: '/garments',
    title: 'Custom Woven Garment Manufacturer India | Apparel OEM Coordination | Vasanthaa Textiless',
    desc: 'Export-grade cut-and-sew apparel manufacturing in Tamil Nadu. Full-package woven shirts, cotton kurtas, traditional dhotis, and canvas tote bags with AQL 2.5 standards.',
    h1: 'Cut-and-Sew Apparel Coordination & OEM Manufacturing',
    ogImage: '/images/garment-manufacturing.webp'
  },
  {
    path: '/capabilities',
    title: 'Textile Manufacturing Capabilities | Weaving & Dyeing Coordination | Erode',
    desc: 'End-to-end fabric execution across Erode textile cluster: high-speed airjet/rapier weaving, custom reactive dyeing, rotary printing, commercial finishing, and garmenting.',
    h1: 'Centralized Weaving, Dyeing & Finishing Infrastructure',
    ogImage: '/images/weaving-looms.webp'
  },
  {
    path: '/quality-assurance',
    title: 'Textile Quality Assurance & Lab Standards | Vasanthaa Textiless Erode',
    desc: 'Four-tier QA protocol adhering to ASTM and ISO standards: 4-Point greige inspection, spectrophotometer lab dips, shrinkage control, and pre-dispatch testing in Erode.',
    h1: 'ASTM D5430 4-Point Fabric Inspection & QA Laboratory',
    ogImage: '/images/fabric-inspection.webp'
  },
  {
    path: '/about',
    title: 'About Vasanthaa Textiless | 28+ Years Textile Heritage in Erode',
    desc: 'Founded in 1998 by Mr. Vaitheswaran in Erode. Decades of mastery in woven textile sourcing, technical coordination, and trusted supply for garment manufacturers worldwide.',
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
    title: 'Contact Vasanthaa Textiless | Erode Facility & RFQ Desk',
    desc: 'Connect with our commercial fabric desk at Erode, Tamil Nadu. Fast lab dip turnaround, sample swatch dispatch, and bulk order production coordination.',
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

  // Add all fabric routes
  for (const f of FABRICS) {
    allRoutes.push({
      path: `/fabric/${f.id}`,
      title: f.seoTitle || `${f.name} Manufacturer India | Vasanthaa Textiless`,
      desc: f.seoDesc || `Technical specifications for ${f.name} (${f.gsm}, ${f.fiber}). Direct manufacturer supply in Erode, India.`,
      h1: `${f.name} Manufacturer & Export Supplier`,
      fabric: f,
      ogImage: f.image
    });
  }

  // Add all garment routes
  for (const g of GARMENTS) {
    allRoutes.push({
      path: `/garments/${g.id}`,
      title: g.seoTitle || `${g.name} Manufacturer India | Vasanthaa Textiless`,
      desc: g.seoDesc || `Custom ${g.name} manufacturing in Tamil Nadu. Export cut-and-sew apparel coordination.`,
      h1: `${g.name} — Full-Package Apparel OEM Exporter`,
      garment: g,
      ogImage: g.image
    });
  }

  let count = 0;

  for (const route of allRoutes) {
    const canonicalUrl = `${DOMAIN}${route.path === '/' ? '' : route.path}`;

    // Generate JSON-LD Schema
    let routeSchema = null;

    if (route.fabric) {
      const f = route.fabric;
      routeSchema = {
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
      };
    } else if (route.garment) {
      const g = route.garment;
      routeSchema = {
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
      };
    } else if (route.path === '/resources') {
      routeSchema = {
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
      };
    }

    // Generate Pre-rendered Semantic HTML for Googlebot / Non-JS Crawlers
    let bodyHtml = '';

    if (route.fabric) {
      const f = route.fabric;
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2rem 1rem; max-width: 1200px; margin: 0 auto; font-family: sans-serif;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #64748B;">
            <a href="/">Home</a> / <a href="/catalog">Woven Fabric Catalog</a> / <span>${escapeHtml(f.name)}</span>
          </nav>
          <span style="color: #D4AF37; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">${escapeHtml(f.category)} • ${escapeHtml(f.badge || 'B2B SPECIFICATION')}</span>
          <h1 style="font-size: 2.2rem; color: #0F172A; margin: 0.5rem 0 1rem 0;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.7; color: #334155; margin-bottom: 2rem;">${escapeHtml(f.description)}</p>
          
          <h2 style="font-size: 1.4rem; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 0.5rem;">Technical Sourcing Specifications</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600; width: 30%;">Fiber Composition</td><td style="padding: 0.75rem;">${escapeHtml(f.fiber)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Weave Construction</td><td style="padding: 0.75rem;">${escapeHtml(f.weave)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Fabric Weight</td><td style="padding: 0.75rem; color: #C51E3A; font-weight: 700;">${escapeHtml(f.gsm)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Yarn Count</td><td style="padding: 0.75rem;">${escapeHtml(f.yarnCount)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Usable Finished Width</td><td style="padding: 0.75rem;">${escapeHtml(f.width)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Finishes & Chemistry</td><td style="padding: 0.75rem;">${escapeHtml(f.finish)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Sample Prototype MOQ</td><td style="padding: 0.75rem;">${escapeHtml(f.moqSample)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Commercial Bulk MOQ</td><td style="padding: 0.75rem; font-weight: 700;">${escapeHtml(f.moqBulk)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Lead Time</td><td style="padding: 0.75rem;">${escapeHtml(f.leadTime)}</td></tr>
            </tbody>
          </table>

          <h2 style="font-size: 1.3rem; color: #0F172A; margin-top: 2rem;">Recommended Garment Applications</h2>
          <ul>
            ${f.applications.map(app => `<li style="margin-bottom: 0.35rem;">${escapeHtml(app)}</li>`).join('')}
          </ul>

          <h2 style="font-size: 1.3rem; color: #0F172A; margin-top: 2rem;">ASTM Quality Certification & Export Logistics</h2>
          <p>Every roll of ${escapeHtml(f.name)} undergoes mandatory inspection under ASTM D5430 4-Point System in our Erode QA facility. Pre-shrunk residual shrinkage governed under 2.5%, color fastness ISO Grade 4+. Global port export via FOB Tuticorin & FOB Chennai.</p>
          <div style="margin-top: 2rem;">
            <a href="/contact" style="display: inline-block; background: #C51E3A; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Request Bulk Quotation</a>
            <a href="https://wa.me/919786222580?text=Inquiry%20for%20${encodeURIComponent(f.name)}" style="display: inline-block; margin-left: 1rem; color: #059669; font-weight: 700;">Chat on WhatsApp (+91 97862 22580)</a>
          </div>
        </div>
      `;
    } else if (route.garment) {
      const g = route.garment;
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2rem 1rem; max-width: 1200px; margin: 0 auto; font-family: sans-serif;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #64748B;">
            <a href="/">Home</a> / <a href="/garments">Apparel OEM Coordination</a> / <span>${escapeHtml(g.name)}</span>
          </nav>
          <span style="color: #D4AF37; font-weight: 700; font-size: 0.8rem; text-transform: uppercase;">${escapeHtml(g.category)} • DOWNSTREAM APPAREL EXPORT</span>
          <h1 style="font-size: 2.2rem; color: #0F172A; margin: 0.5rem 0 1rem 0;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.7; color: #334155; margin-bottom: 2rem;">${escapeHtml(g.description)}</p>

          <h2 style="font-size: 1.4rem; color: #0F172A; border-bottom: 2px solid #E2E8F0; padding-bottom: 0.5rem;">Garment Manufacturing Specifications</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <tbody>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600; width: 30%;">Monthly Capacity</td><td style="padding: 0.75rem;">${escapeHtml(g.productionCapacity)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Stitching Standard</td><td style="padding: 0.75rem;">${escapeHtml(g.stitchingSpecs)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Quality Audit Level</td><td style="padding: 0.75rem; color: #059669; font-weight: 700;">${escapeHtml(g.aqlStandard)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Sample Prototype MOQ</td><td style="padding: 0.75rem;">${escapeHtml(g.moqSample)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Bulk Order MOQ</td><td style="padding: 0.75rem; font-weight: 700;">${escapeHtml(g.moqBulk)}</td></tr>
              <tr style="border-bottom: 1px solid #E2E8F0;"><td style="padding: 0.75rem; font-weight: 600;">Export Packaging</td><td style="padding: 0.75rem;">${escapeHtml(g.exportPackaging)}</td></tr>
            </tbody>
          </table>

          <h2 style="font-size: 1.3rem; color: #0F172A; margin-top: 2rem;">Woven Fabric Substrates Used</h2>
          <ul>
            ${g.fabricPairings.map(p => `<li style="margin-bottom: 0.35rem;">${escapeHtml(p)}</li>`).join('')}
          </ul>

          <div style="margin-top: 2rem;">
            <a href="/contact" style="display: inline-block; background: #C51E3A; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Request Garment OEM Quote</a>
            <a href="https://wa.me/919786222580?text=Inquiry%20for%20${encodeURIComponent(g.name)}" style="display: inline-block; margin-left: 1rem; color: #059669; font-weight: 700;">WhatsApp Direct Desk (+91 97862 22580)</a>
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

    // Inject Route-specific JSON-LD Schema
    if (routeSchema) {
      const schemaScript = `\n    <script type="application/ld+json" id="prerendered-route-schema">\n    ${JSON.stringify(routeSchema, null, 2)}\n    </script>\n  `;
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
