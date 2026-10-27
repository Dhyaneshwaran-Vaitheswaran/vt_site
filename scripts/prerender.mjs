// Vasanthaa Textiless — Build-Time Static Site Pre-Rendering (SSG) Engine
// Generates 100% crawlable static HTML files and dynamic sitemap.xml for Googlebot, Bingbot, and Social Scrapers

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

// Import data
import { FABRICS } from '../src/data/fabrics.js';
import { GARMENTS } from '../src/data/garments.js';
import { FAQS } from '../src/data/resources.js';

const DOMAIN = 'https://vasanthaatextiless.in';
const TODAY = new Date().toISOString().split('T')[0];

// Master static route definitions
const STATIC_ROUTES = [
  {
    path: '/',
    title: 'Vasanthaa Textiless | Woven Fabric Manufacturer & Apparel OEM | Erode, India',
    desc: 'Established in 1998 in Erode, Tamil Nadu. Direct manufacturer of Gada fabric, dyed woven fabrics, print poplin, double gauze, voil, canvas, drill, twill, dobby, jacquard, flux linen, and white fabrics. Full-package woven shirts, kurthas, dhotis, and cotton bags.',
    h1: 'End-to-End Woven Fabric Sourcing & Apparel Production Coordination',
    ogImage: '/images/hero-craft.jpg',
    priority: '1.0',
    changefreq: 'daily'
  },
  {
    path: '/catalog',
    title: 'Woven Fabric Catalog | Gada, Twill, Drill, Poplin, Voil & Flux Linen | Vasanthaa Textiless Erode',
    desc: 'Explore export-grade woven fabric collections engineered in Erode: Gada greige cloth, dyed woven fabric, print poplin, double gauze, voil, canvas, drill, twill, dobby, jacquard, flux linen, and optical white fabrics.',
    h1: 'Specialty Woven Fabrics & Substrates Catalog',
    ogImage: '/images/hero-craft.jpg',
    priority: '0.95',
    changefreq: 'daily'
  },
  {
    path: '/garments',
    title: 'Custom Woven Garment Manufacturer India | Shirts, Kurthas, Dhotis & Bags OEM | Vasanthaa Textiless',
    desc: 'Export-grade cut-and-sew apparel manufacturing in Tamil Nadu. Full-package all woven shirts, cotton kurthas, traditional dhoti garments, and cotton canvas bags with AQL 2.5 standards.',
    h1: 'Cut-and-Sew Apparel Coordination & OEM Manufacturing',
    ogImage: '/images/garment-manufacturing.webp',
    priority: '0.95',
    changefreq: 'daily'
  },
  {
    path: '/capabilities',
    title: 'Textile Manufacturing Capabilities | 4-Stage Weaving & Dyeing Coordination | Erode',
    desc: 'End-to-end fabric execution across Erode textile cluster: high-speed airjet/rapier weaving, Zero Liquid Discharge (ZLD) reactive dyeing, rotary printing, commercial finishing, and garmenting.',
    h1: 'Centralized Weaving, Dyeing & Finishing Infrastructure',
    ogImage: '/images/weaving-looms.webp',
    priority: '0.85',
    changefreq: 'weekly'
  },
  {
    path: '/quality-assurance',
    title: 'Textile Quality Assurance & Lab Standards | ASTM 4-Point Inspection | Vasanthaa Textiless Erode',
    desc: 'Four-tier QA protocol adhering to ASTM and ISO standards: ASTM D5430 4-Point greige inspection, spectrophotometer lab dips, shrinkage control, and pre-dispatch testing in Erode.',
    h1: 'ASTM D5430 4-Point Fabric Inspection & QA Laboratory',
    ogImage: '/images/fabric-inspection.webp',
    priority: '0.85',
    changefreq: 'weekly'
  },
  {
    path: '/about',
    title: 'About Vasanthaa Textiless | 28+ Years Textile Heritage | Main Supplier to Isha for a Decade',
    desc: 'Founded in 1998 by Mr. Vaitheswaran in Erode. Decades of mastery in woven textile sourcing, technical coordination, and proud main supplier of Isha for over 10 consecutive years.',
    h1: '28+ Years of Woven Textile Mastery in Erode, Tamil Nadu',
    ogImage: '/images/hero-craft.jpg',
    priority: '0.80',
    changefreq: 'monthly'
  },
  {
    path: '/resources',
    title: 'B2B Sourcing FAQs & Procurement Standards | Vasanthaa Textiless Erode',
    desc: 'Answers to common commercial questions regarding MOQs, lab dips, payments, and our centralized weaving & dyeing coordination in Erode.',
    h1: 'B2B Sourcing Knowledge Hub & Procurement Standards',
    ogImage: '/images/hero-craft.jpg',
    priority: '0.80',
    changefreq: 'weekly'
  },
  {
    path: '/contact',
    title: 'Contact Vasanthaa Textiless | Erode Facility & RFQ Desk | Wholesale Inquiries',
    desc: 'Connect with our commercial fabric desk at Erode, Tamil Nadu. Fast lab dip turnaround, sample swatch dispatch, and bulk order production coordination for fabrics and garments.',
    h1: 'Connect with Our Sourcing & Export Desk in Erode',
    ogImage: '/images/hero-craft.jpg',
    priority: '0.90',
    changefreq: 'monthly'
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
      ogImage: f.image,
      priority: '0.90',
      changefreq: 'weekly'
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
          isAlias: true,
          priority: '0.70',
          changefreq: 'monthly'
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
      ogImage: g.image,
      priority: '0.90',
      changefreq: 'weekly'
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
          isAlias: true,
          priority: '0.70',
          changefreq: 'monthly'
        });
      }
    }
  }

  let count = 0;

  for (const route of allRoutes) {
    // Canonical calculation: Aliases canonicalize to the primary entity URL to prevent duplicate content
    const canonicalUrl = route.isAlias
      ? (route.fabric ? `${DOMAIN}/fabric/${route.fabric.id}` : (route.garment ? `${DOMAIN}/garments/${route.garment.id}` : `${DOMAIN}${route.path}`))
      : `${DOMAIN}${route.path === '/' ? '' : route.path}`;

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
        "image": [`${DOMAIN}${f.image.startsWith('/') ? '' : '/'}${f.image}`],
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
        "image": [`${DOMAIN}${g.image.startsWith('/') ? '' : '/'}${g.image}`],
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
    } else if (route.path === '/catalog') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Fabric Catalog", "item": `${DOMAIN}/catalog` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${DOMAIN}/catalog#collection`,
        "name": "Specialty Woven Fabrics & Substrates Catalog",
        "description": route.desc,
        "url": canonicalUrl,
        "isPartOf": { "@id": `${DOMAIN}/#website` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": FABRICS.map((f, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `${DOMAIN}/fabric/${f.id}`,
            "name": f.name
          }))
        }
      });
    } else if (route.path === '/garments') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Garments OEM", "item": `${DOMAIN}/garments` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${DOMAIN}/garments#collection`,
        "name": "Cut-and-Sew Apparel Coordination & OEM Manufacturing",
        "description": route.desc,
        "url": canonicalUrl,
        "isPartOf": { "@id": `${DOMAIN}/#website` },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": GARMENTS.map((g, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `${DOMAIN}/garments/${g.id}`,
            "name": g.name
          }))
        }
      });
    } else if (route.path === '/resources') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Sourcing FAQs", "item": `${DOMAIN}/resources` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${DOMAIN}/resources#faq`,
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    } else if (route.path === '/about') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": `${DOMAIN}/about` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": `${DOMAIN}/about#aboutpage`,
        "name": "About Vasanthaa Textiless Heritage",
        "description": route.desc,
        "url": canonicalUrl,
        "mainEntity": { "@id": `${DOMAIN}/#organization` }
      });
    } else if (route.path === '/contact') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${DOMAIN}/contact` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": `${DOMAIN}/contact#contactpage`,
        "name": "Connect with Our Sourcing & Export Desk in Erode",
        "url": canonicalUrl,
        "mainEntity": { "@id": `${DOMAIN}/#organization` }
      });
    } else if (route.path === '/capabilities') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Capabilities", "item": `${DOMAIN}/capabilities` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${DOMAIN}/capabilities#service`,
        "name": "Centralized Weaving, Dyeing & Finishing Infrastructure",
        "provider": { "@id": `${DOMAIN}/#organization` },
        "description": route.desc,
        "areaServed": { "@type": "Country", "name": "Worldwide" }
      });
    } else if (route.path === '/quality-assurance') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
          { "@type": "ListItem", "position": 2, "name": "Quality Assurance", "item": `${DOMAIN}/quality-assurance` }
        ]
      });
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${DOMAIN}/quality-assurance#service`,
        "name": "ASTM D5430 4-Point Fabric Inspection Protocol",
        "provider": { "@id": `${DOMAIN}/#organization` },
        "description": route.desc
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
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; color: #C51E3A; font-weight: 700;">Fabric Weight</td><td style="padding: 0.75rem; color: #C51E3A; font-weight: 700;">${escapeHtml(f.gsm)}</td></tr>
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
    } else if (route.path === '/') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">ESTD. 1998 • ERODE TEXTILE CLUSTER</span>
          <h1 style="font-size: 2.5rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.15rem; line-height: 1.8; color: #52525B; margin-bottom: 2rem;">
            Vasanthaa Textiless is a premier woven fabric manufacturer and apparel production coordinator based in Erode, Tamil Nadu. Established in 1998, we specialize in pure cotton, linen, and blended wovens engineered for global garment exporters, process houses, and apparel brands.
          </p>

          <div style="background: #0A0A0A; color: #FFFFFF; padding: 1.5rem; border-radius: 12px; margin-bottom: 2.5rem;">
            <span style="color: #C51E3A; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 0.35rem;">FLAGSHIP SOURCING PARTNER</span>
            <h2 style="color: #FFFFFF; font-size: 1.4rem; margin: 0 0 0.5rem 0; font-family: 'Outfit', sans-serif;">Proud Main Sourcing Partner of Isha for Over 10 Consecutive Years</h2>
            <p style="color: #A1A1AA; font-size: 0.95rem; line-height: 1.6; margin: 0;">We supply extensive yardages of pure white fabrics, consecrated dhoti cloth, prayer shawls, and organic cottons for Isha's global centers with uncompromised fiber purity.</p>
          </div>

          <h2 style="font-size: 1.6rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Export-Grade Woven Fabric Collections</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0 3rem 0;">
            ${FABRICS.map(f => `
              <div style="border: 1px solid #E4E4E7; border-radius: 8px; padding: 1.25rem; background: #FAFAFA;">
                <h3 style="font-size: 1.1rem; margin: 0 0 0.4rem 0;"><a href="/fabric/${f.id}" style="color: #0A0A0A; text-decoration: none; font-weight: 700;">${escapeHtml(f.name)}</a></h3>
                <div style="font-size: 0.85rem; color: #C51E3A; font-weight: 600; margin-bottom: 0.5rem;">${escapeHtml(f.gsm)} • ${escapeHtml(f.weave)}</div>
                <p style="font-size: 0.9rem; color: #52525B; line-height: 1.6; margin: 0 0 0.8rem 0;">${escapeHtml(f.description.slice(0, 140))}...</p>
                <a href="/fabric/${f.id}" style="font-size: 0.85rem; color: #0A0A0A; font-weight: 700; text-decoration: underline;">View Full Specifications →</a>
              </div>
            `).join('')}
          </div>

          <h2 style="font-size: 1.6rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Downstream Cut-and-Sew Apparel OEM Coordination</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0 3rem 0;">
            ${GARMENTS.map(g => `
              <div style="border: 1px solid #E4E4E7; border-radius: 8px; padding: 1.25rem; background: #FAFAFA;">
                <h3 style="font-size: 1.1rem; margin: 0 0 0.4rem 0;"><a href="/garments/${g.id}" style="color: #0A0A0A; text-decoration: none; font-weight: 700;">${escapeHtml(g.name)}</a></h3>
                <div style="font-size: 0.85rem; color: #15803D; font-weight: 600; margin-bottom: 0.5rem;">AQL ${escapeHtml(g.aqlStandard)} • Capacity: ${escapeHtml(g.productionCapacity)}</div>
                <p style="font-size: 0.9rem; color: #52525B; line-height: 1.6; margin: 0 0 0.8rem 0;">${escapeHtml(g.description.slice(0, 140))}...</p>
                <a href="/garments/${g.id}" style="font-size: 0.85rem; color: #0A0A0A; font-weight: 700; text-decoration: underline;">Garmenting Details →</a>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="/catalog" style="display: inline-block; background: #C51E3A; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Explore Complete Fabric Catalog</a>
            <a href="/contact" style="display: inline-block; background: #18181B; color: #FFFFFF; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: 700;">Contact Central Sourcing Desk</a>
          </div>
        </div>
      `;
    } else if (route.path === '/catalog') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Fabric Catalog</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">COMMERCIAL FABRIC INVENTORY</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Explore our export-grade woven fabric collections engineered in Erode textile hub. From raw unbleached Gada greige cloth to yarn-dyed checks, heavy cotton drills, double gauze muslins, and pure linen wovens.
          </p>

          <h2 style="font-size: 1.5rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Woven Fabric Inventory & Specifications</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
            ${FABRICS.map(f => `
              <div style="border: 1px solid #E4E4E7; border-radius: 8px; padding: 1.5rem; background: #FAFAFA;">
                <span style="font-size: 0.75rem; font-weight: 700; color: #C51E3A; text-transform: uppercase;">${escapeHtml(f.category)}</span>
                <h3 style="font-size: 1.2rem; margin: 0.4rem 0;"><a href="/fabric/${f.id}" style="color: #0A0A0A; text-decoration: none; font-weight: 700;">${escapeHtml(f.name)}</a></h3>
                <div style="font-size: 0.85rem; color: #52525B; margin-bottom: 0.75rem;">
                  <strong>Weave:</strong> ${escapeHtml(f.weave)} | <strong>Weight:</strong> ${escapeHtml(f.gsm)} | <strong>Width:</strong> ${escapeHtml(f.width)}
                </div>
                <p style="font-size: 0.9rem; color: #52525B; line-height: 1.6; margin-bottom: 1rem;">${escapeHtml(f.description)}</p>
                <div style="display: flex; gap: 0.75rem;">
                  <a href="/fabric/${f.id}" style="display: inline-block; background: #0A0A0A; color: #FFFFFF; padding: 0.5rem 1rem; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Technical Specs</a>
                  <a href="/contact" style="display: inline-block; background: #FEF2F2; color: #C51E3A; border: 1px solid rgba(197,30,58,0.3); padding: 0.5rem 1rem; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">Request Quote</a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (route.path === '/garments') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Garments OEM Coordination</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">CUT-AND-SEW APPAREL MANUFACTURING</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Export-grade apparel production coordinated across audited Tamil Nadu garment clusters. We convert our in-house woven fabrics into finished woven shirts, cotton kurtas, traditional dhotis, and canvas tote bags under strict AQL 2.5 standards.
          </p>

          <h2 style="font-size: 1.5rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Garment Manufacturing Lines</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
            ${GARMENTS.map(g => `
              <div style="border: 1px solid #E4E4E7; border-radius: 8px; padding: 1.5rem; background: #FAFAFA;">
                <h3 style="font-size: 1.2rem; margin: 0 0 0.5rem 0;"><a href="/garments/${g.id}" style="color: #0A0A0A; text-decoration: none; font-weight: 700;">${escapeHtml(g.name)}</a></h3>
                <div style="font-size: 0.85rem; color: #15803D; font-weight: 600; margin-bottom: 0.5rem;">
                  AQL Level: ${escapeHtml(g.aqlStandard)} | Monthly Capacity: ${escapeHtml(g.productionCapacity)}
                </div>
                <p style="font-size: 0.9rem; color: #52525B; line-height: 1.6; margin-bottom: 1rem;">${escapeHtml(g.description)}</p>
                <a href="/garments/${g.id}" style="display: inline-block; background: #0A0A0A; color: #FFFFFF; padding: 0.5rem 1rem; text-decoration: none; border-radius: 4px; font-size: 0.85rem; font-weight: 600;">View Manufacturing Specs →</a>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (route.path === '/capabilities') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Manufacturing Capabilities</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">4-STAGE CENTRALIZED TEXTILE EXECUTION</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Vasanthaa Textiless centralizes the complete South Indian woven textile ecosystem. Our technical coordination bridges raw yarn procurement, airjet and rapier weaving, Zero Liquid Discharge (ZLD) dyeing, mechanical finishing, and downstream cut-and-sew garment export under unified corporate accountability.
          </p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">1. Weaving Coordination (Airjet & Rapier Looms)</h2>
          <p style="color: #52525B; line-height: 1.7;">State-of-the-art airjet and automatic shuttleless rapier looms operating across Erode. Weaving capabilities span Plain 1x1, 2/1 and 3/1 Twills, stout Drills, Dobby textures, Jacquards, and Double Gauze with strict warp-tension calibration.</p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">2. Zero Liquid Discharge (ZLD) Dyeing & Printing</h2>
          <p style="color: #52525B; line-height: 1.7;">Advanced continuous soft-flow and jigger dye houses operating strictly under Tamil Nadu's Zero Liquid Discharge environmental mandate. 100% reactive, vat, and pigment dye chemistry yielding ISO Grade 4+ wash and rubbing fastness.</p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">3. Specialized Mechanical Finishing</h2>
          <p style="color: #52525B; line-height: 1.7;">Sanforizing for residual shrinkage below 2.5%, mercerizing for cotton luster and tensile strength, carbon peaching for soft-touch velvety handle, and calendering for smooth uniform surface sheen.</p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">4. Downstream Garmenting & Export Logistics</h2>
          <p style="color: #52525B; line-height: 1.7;">Direct coordination with dedicated cut-and-sew factories in Tirupur and Erode. Ocean cargo export via FOB Tuticorin VOC port and FOB Chennai, with air cargo through Coimbatore Airport (CJB).</p>
        </div>
      `;
    } else if (route.path === '/quality-assurance') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Quality Assurance</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">ASTM D5430 & ISO LAB STANDARDS</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Every single yard of fabric manufactured by Vasanthaa Textiless is inspected under the internationally recognized ASTM D5430 4-Point System in our central Erode facility prior to dispatch.
          </p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">Four-Tier Quality Protocol</h2>
          <ol style="color: #52525B; line-height: 1.8; font-size: 1rem;">
            <li><strong>Loomstate Greige Inspection:</strong> 100% visual check on variable-speed illuminated light tables to catch warp breaks, missing picks, or reed marks before wet processing.</li>
            <li><strong>Spectrophotometer Lab Dip Matching:</strong> Color formulations developed under standardized D65, TL84, and Incandescent A illuminants with ΔE tolerance &lt; 0.8.</li>
            <li><strong>Dimensional Stability Testing:</strong> ASTM D3774 dimensional stability wash audits guaranteeing shrinkage under 2.5% for all export cottons.</li>
            <li><strong>Roll-by-Roll GSM & Width Certification:</strong> Electronic GSM balance cutter verification guaranteeing uniform weight across full production lots.</li>
          </ol>
        </div>
      `;
    } else if (route.path === '/about') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">About Us</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">28+ YEARS OF HERITAGE (SINCE 1998)</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Founded in 1998 by Mr. Vaitheswaran in the commercial textile hub of Erode, Tamil Nadu, Vasanthaa Textiless has grown over nearly three decades into one of the region's most trusted woven fabric manufacturers and production coordinators.
          </p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">Decade-Long Sourcing Partner to Isha</h2>
          <p style="color: #52525B; line-height: 1.7;">For more than 10 consecutive years, Vasanthaa Textiless has served as the proud main fabric and apparel supplier to Isha, delivering millions of meters of white dhoti fabrics, prayer shawls, and consecrated cottons under strict spiritual and material purity standards.</p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; margin-top: 2rem; font-family: 'Outfit', sans-serif;">Registered Facility</h2>
          <p style="color: #52525B; line-height: 1.7;">Headquartered at 3, Vasuki St, 2nd Street, Erode, Tamil Nadu 638001. Operating with active GSTIN registration (Tamil Nadu code 33) and registered Import-Export Code (IEC).</p>
        </div>
      `;
    } else if (route.path === '/resources') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Sourcing FAQs & Resources</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">B2B SOURCING PROCUREMENT INTELLIGENCE</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Answers to common questions regarding minimum order quantities (MOQs), lab dip approvals, payment methods, and our centralized weaving and dyeing operations in Erode.
          </p>

          <h2 style="font-size: 1.5rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Frequently Asked Sourcing Questions</h2>
          <div style="margin-top: 1.5rem;">
            ${FAQS.map(faq => `
              <div style="margin-bottom: 1.5rem; background: #FAFAFA; border: 1px solid #E4E4E7; padding: 1.25rem; border-radius: 8px;">
                <h3 style="font-size: 1.1rem; color: #0A0A0A; margin: 0 0 0.5rem 0; font-weight: 700;">${escapeHtml(faq.question)}</h3>
                <p style="color: #52525B; margin: 0; line-height: 1.7; font-size: 0.95rem;">${escapeHtml(faq.answer)}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (route.path === '/contact') {
      bodyHtml = `
        <div class="prerendered-content" style="padding: 2.5rem 1rem; max-width: 1200px; margin: 0 auto; font-family: 'Plus Jakarta Sans', sans-serif; color: #18181B;">
          <nav aria-label="Breadcrumb" style="font-size: 0.875rem; margin-bottom: 1rem; color: #71717A;">
            <a href="/" style="color: #0A0A0A; text-decoration: none;">Home</a> / <span style="color: #C51E3A; font-weight: 600;">Contact Us</span>
          </nav>
          <span style="color: #C51E3A; font-weight: 800; font-size: 0.8125rem; letter-spacing: 0.1em; text-transform: uppercase;">COMMERCIAL FABRIC DESK & SOURCING OFFICE</span>
          <h1 style="font-size: 2.4rem; color: #0A0A0A; margin: 0.75rem 0 1rem 0; font-family: 'Outfit', sans-serif;">${escapeHtml(route.h1)}</h1>
          <p style="font-size: 1.1rem; line-height: 1.75; color: #52525B; margin-bottom: 2rem;">
            Connect with our sourcing coordinators at our Erode facility for lab dips, sample swatches, price quotations, and bulk manufacturing programs.
          </p>

          <h2 style="font-size: 1.4rem; color: #0A0A0A; border-bottom: 2px solid #E4E4E7; padding-bottom: 0.5rem; font-family: 'Outfit', sans-serif;">Erode Facility Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem;">
            <tbody>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600; width: 30%;">Registered Office</td><td style="padding: 0.75rem;">3, Vasuki St, 2nd Street, Erode, Tamil Nadu 638001, India</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Primary Telephone / WhatsApp</td><td style="padding: 0.75rem;"><a href="tel:+919842222580" style="color: #C51E3A; font-weight: 700;">+91 98422 22580</a></td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Secondary Desk / Hotline</td><td style="padding: 0.75rem;"><a href="tel:+919786222580" style="color: #52525B;">+91 97862 22580</a></td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Official Email</td><td style="padding: 0.75rem;"><a href="mailto:vasanthaatextiless@gmail.com" style="color: #C51E3A; font-weight: 700;">vasanthaatextiless@gmail.com</a></td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Transit Seaports</td><td style="padding: 0.75rem;">Tuticorin VOC (~340km), Chennai (~400km), Kochi (~260km)</td></tr>
              <tr style="border-bottom: 1px solid #E4E4E7;"><td style="padding: 0.75rem; font-weight: 600;">Commercial Trade Terms</td><td style="padding: 0.75rem;">Ex-Mill Erode, FOR Domestic, FOB & CIF Worldwide</td></tr>
            </tbody>
          </table>
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
      const fullOgImage = route.ogImage.startsWith('http')
        ? route.ogImage
        : `${DOMAIN}${route.ogImage.startsWith('/') ? '' : '/'}${route.ogImage}`;
      html = html.replace(
        /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="og:image" content="${fullOgImage}" />`
      );
      html = html.replace(
        /<meta\s+property="twitter:image"\s+content=".*?"\s*\/?>/i,
        `<meta property="twitter:image" content="${fullOgImage}" />`
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

  // Generate dynamic, complete sitemap.xml with all 109 routes
  console.log('🗺️ Generating comprehensive XML sitemap...');
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const r of allRoutes) {
    const loc = `${DOMAIN}${r.path === '/' ? '' : r.path}`;
    const priority = r.priority || (r.isAlias ? '0.70' : '0.85');
    const changefreq = r.changefreq || (r.isAlias ? 'monthly' : 'weekly');

    sitemapXml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  }

  sitemapXml += `</urlset>\n`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`✅ Sitemap generated with ${allRoutes.length} indexed URLs across dist/sitemap.xml & public/sitemap.xml!`);
}

runPrerender().catch(err => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
