import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';
import { SwatchDrawer } from './components/SwatchDrawer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { FabricDetail } from './pages/FabricDetail';
import { Garments } from './pages/Garments';
import { GarmentDetail } from './pages/GarmentDetail';
import { Capabilities } from './pages/Capabilities';
import { QualityAssurance } from './pages/QualityAssurance';
import { About } from './pages/About';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

import { FABRICS } from './data/fabrics';
import { GARMENTS } from './data/garments';
import { FAQS } from './data/resources';

// Route parser for SEO & Browser URL synchronization
function parseRouteFromLocation() {
  if (typeof window === 'undefined') return { page: 'home', fabric: null, garment: null };
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  
  if (path === '/' || path === '') return { page: 'home', fabric: null, garment: null };
  if (path === '/catalog') return { page: 'catalog', fabric: null, garment: null };
  if (path === '/garments' || path === '/garment-manufacturing') return { page: 'garments', fabric: null, garment: null };
  if (path === '/capabilities') return { page: 'capabilities', fabric: null, garment: null };
  if (path === '/quality-assurance' || path === '/quality') return { page: 'quality', fabric: null, garment: null };
  if (path === '/about') return { page: 'about', fabric: null, garment: null };
  if (path === '/resources') return { page: 'resources', fabric: null, garment: null };
  if (path === '/contact') return { page: 'contact', fabric: null, garment: null };
  
  // Fabric programmatic routes
  if (path.startsWith('/fabric/')) {
    const fabricId = path.replace('/fabric/', '');
    const found = FABRICS.find(f => f.id === fabricId || (f.legacyIds && f.legacyIds.includes(fabricId)));
    if (found) {
      return { page: 'fabric-detail', fabric: found, garment: null };
    }
    return { page: 'not-found', fabric: null, garment: null };
  }

  // Garment programmatic routes
  if (path.startsWith('/garments/') || path.startsWith('/garment/')) {
    const garmentId = path.replace(/^\/garments?\//, '');
    const found = GARMENTS.find(g => g.id === garmentId || (g.legacyIds && g.legacyIds.includes(garmentId)));
    if (found) {
      return { page: 'garment-detail', fabric: null, garment: found };
    }
    return { page: 'not-found', fabric: null, garment: null };
  }

  return { page: 'not-found', fabric: null, garment: null };
}

export function App() {
  const initialRoute = parseRouteFromLocation();
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [selectedFabric, setSelectedFabric] = useState(initialRoute.fabric);
  const [selectedGarment, setSelectedGarment] = useState(initialRoute.garment);
  
  // Persistent swatch storage
  const [swatches, setSwatches] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('vt_swatches');
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Keep localStorage in sync with swatches
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('vt_swatches', JSON.stringify(swatches));
      } catch (e) {
        // storage quota exceeded or disabled
      }
    }
  }, [swatches]);
  
  const [isRFQModalOpen, setIsRFQModalOpen] = useState(false);
  const [rfqPreselectedFabric, setRfqPreselectedFabric] = useState(null);
  const [isSwatchDrawerOpen, setIsSwatchDrawerOpen] = useState(false);

  // Central Navigation & URL State Synchronization
  const navigateTo = (page, item = null, replace = false) => {
    setActivePage(page);

    let targetPath = '/';
    if (page === 'catalog') {
      setSelectedFabric(null);
      setSelectedGarment(null);
      targetPath = '/catalog';
    } else if (page === 'garments') {
      setSelectedFabric(null);
      setSelectedGarment(null);
      targetPath = '/garments';
    } else if (page === 'capabilities') {
      targetPath = '/capabilities';
    } else if (page === 'quality') {
      targetPath = '/quality-assurance';
    } else if (page === 'about') {
      targetPath = '/about';
    } else if (page === 'resources') {
      targetPath = '/resources';
    } else if (page === 'contact') {
      targetPath = '/contact';
    } else if (page === 'fabric-detail' && item) {
      setSelectedFabric(item);
      setSelectedGarment(null);
      targetPath = `/fabric/${item.id}`;
    } else if (page === 'garment-detail' && item) {
      setSelectedGarment(item);
      setSelectedFabric(null);
      targetPath = `/garments/${item.id}`;
    }

    if (window.location.pathname !== targetPath) {
      if (replace) {
        window.history.replaceState({ page, itemId: item?.id }, '', targetPath);
      } else {
        window.history.pushState({ page, itemId: item?.id }, '', targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Browser Back/Forward navigation listener
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRouteFromLocation();
      setActivePage(route.page);
      setSelectedFabric(route.fabric);
      setSelectedGarment(route.garment);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Metadata updates per route
  useEffect(() => {
    let title = 'Vasanthaa Textiless | Woven Fabric Manufacturer & Apparel OEM | Erode, India';
    let desc = 'Established in 1998 in Erode, Tamil Nadu. Vasanthaa Textiless delivers end-to-end woven textile manufacturing, custom dyeing, printing, and downstream cut-and-sew apparel export.';
    let canonical = 'https://vasanthaatextiless.in/';
    let ogImage = '/images/hero-craft.jpg';
    let schemaJson = null;

    if (activePage === 'catalog') {
      title = 'Woven Fabric Catalog | Cotton Twill, Drill, Poplin & Blends | Vasanthaa Textiless Erode';
      desc = 'Explore export-grade woven fabric collections engineered in Erode: combed cotton twill, heavy drill, unbleached gada greige, double gauze, poplin, and pure linen.';
      canonical = 'https://vasanthaatextiless.in/catalog';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://vasanthaatextiless.in/catalog#collection",
        "name": "Woven Fabric Collections & Technical Substrates",
        "description": desc,
        "url": canonical,
        "isPartOf": { "@id": "https://vasanthaatextiless.in/#website" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": FABRICS.map((f, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://vasanthaatextiless.in/fabric/${f.id}`,
            "name": f.name
          }))
        }
      };
    } else if (activePage === 'garments') {
      title = 'Custom Woven Garment Manufacturer India | Apparel OEM Coordination | Vasanthaa Textiless';
      desc = 'Export-grade cut-and-sew apparel manufacturing in Tamil Nadu. Full-package woven shirts, cotton kurtas, traditional dhotis, and canvas tote bags with AQL 2.5 standards.';
      canonical = 'https://vasanthaatextiless.in/garments';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://vasanthaatextiless.in/garments#collection",
        "name": "Woven Apparel Manufacturing & OEM Programs",
        "description": desc,
        "url": canonical,
        "isPartOf": { "@id": "https://vasanthaatextiless.in/#website" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": GARMENTS.map((g, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://vasanthaatextiless.in/garments/${g.id}`,
            "name": g.name
          }))
        }
      };
    } else if (activePage === 'fabric-detail' && selectedFabric) {
      title = selectedFabric.seoTitle || `${selectedFabric.name} Sourcing & Manufacturing | Vasanthaa Textiless Erode`;
      desc = selectedFabric.seoDesc || `Technical B2B specifications for ${selectedFabric.name} (${selectedFabric.gsm}, ${selectedFabric.fiber}, ${selectedFabric.weave}). Custom dyeing, lab dips, and bulk production in Erode textile hub.`;
      canonical = `https://vasanthaatextiless.in/fabric/${selectedFabric.id}`;
      ogImage = selectedFabric.image;

      schemaJson = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonical}#product`,
        "name": selectedFabric.name,
        "image": [`https://vasanthaatextiless.in${selectedFabric.image.startsWith('/') ? '' : '/'}${selectedFabric.image}`],
        "description": selectedFabric.description,
        "brand": { "@type": "Brand", "name": "Vasanthaa Textiless" },
        "manufacturer": { "@id": "https://vasanthaatextiless.in/#organization" },
        "material": selectedFabric.fiber,
        "pattern": selectedFabric.weave,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": selectedFabric.moqBulk
          }
        }
      };
    } else if (activePage === 'garment-detail' && selectedGarment) {
      title = selectedGarment.seoTitle || `${selectedGarment.name} Manufacturer India | Vasanthaa Textiless`;
      desc = selectedGarment.seoDesc || `Custom ${selectedGarment.name} manufacturing in Tamil Nadu. Export-grade cut-and-sew coordination with AQL 2.5 quality standards.`;
      canonical = `https://vasanthaatextiless.in/garments/${selectedGarment.id}`;
      ogImage = selectedGarment.image;

      schemaJson = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonical}#product`,
        "name": selectedGarment.name,
        "image": [`https://vasanthaatextiless.in${selectedGarment.image.startsWith('/') ? '' : '/'}${selectedGarment.image}`],
        "description": selectedGarment.description,
        "brand": { "@type": "Brand", "name": "Vasanthaa Textiless" },
        "manufacturer": { "@id": "https://vasanthaatextiless.in/#organization" },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": selectedGarment.moqBulk
          }
        }
      };
    } else if (activePage === 'capabilities') {
      title = 'Textile Manufacturing Capabilities | Weaving & Dyeing Coordination | Erode';
      desc = 'End-to-end fabric execution across Erode textile cluster: high-speed airjet/rapier weaving, custom reactive dyeing, rotary printing, commercial finishing, and garmenting.';
      canonical = 'https://vasanthaatextiless.in/capabilities';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://vasanthaatextiless.in/capabilities#service",
        "name": "Centralized Textile Manufacturing Coordination",
        "provider": { "@id": "https://vasanthaatextiless.in/#organization" },
        "description": desc,
        "areaServed": { "@type": "Country", "name": "Worldwide" }
      };
    } else if (activePage === 'quality') {
      title = 'Textile Quality Assurance & Lab Standards | Vasanthaa Textiless Erode';
      desc = 'Four-tier QA protocol adhering to ASTM and ISO standards: 4-Point greige inspection, spectrophotometer lab dips, shrinkage control, and pre-dispatch testing in Erode.';
      canonical = 'https://vasanthaatextiless.in/quality-assurance';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://vasanthaatextiless.in/quality-assurance#service",
        "name": "ASTM D5430 4-Point Fabric Inspection Protocol",
        "provider": { "@id": "https://vasanthaatextiless.in/#organization" },
        "description": desc
      };
    } else if (activePage === 'about') {
      title = 'About Vasanthaa Textiless | 28+ Years Textile Heritage in Erode';
      desc = 'Founded in 1998 by Mr. Vaitheswaran in Erode. Decades of mastery in woven textile sourcing, technical coordination, and trusted supply for garment manufacturers worldwide.';
      canonical = 'https://vasanthaatextiless.in/about';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "https://vasanthaatextiless.in/about#aboutpage",
        "name": "About Vasanthaa Textiless Heritage",
        "description": desc,
        "url": canonical,
        "mainEntity": { "@id": "https://vasanthaatextiless.in/#organization" }
      };
    } else if (activePage === 'resources') {
      title = 'B2B Sourcing FAQs & Procurement Standards | Vasanthaa Textiless Erode';
      desc = 'Answers to common commercial questions regarding MOQs, lab dips, payments, and our centralized weaving & dyeing coordination in Erode.';
      canonical = 'https://vasanthaatextiless.in/resources';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://vasanthaatextiless.in/resources#faq",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    } else if (activePage === 'contact') {
      title = 'Contact Vasanthaa Textiless | Erode Facility & RFQ Desk';
      desc = 'Connect with our commercial fabric desk at Erode, Tamil Nadu. Fast lab dip turnaround, sample swatch dispatch, and bulk order production coordination.';
      canonical = 'https://vasanthaatextiless.in/contact';
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://vasanthaatextiless.in/contact#contactpage",
        "name": "Vasanthaa Textiless Central Sourcing Desk",
        "url": canonical,
        "mainEntity": { "@id": "https://vasanthaatextiless.in/#organization" }
      };
    } else if (activePage === 'not-found') {
      title = '404 - Page Not Found | Vasanthaa Textiless Erode';
      desc = 'The requested woven fabric specification or garment manufacturing page could not be located.';
      canonical = 'https://vasanthaatextiless.in/';
    }

    document.title = title;

    const setMeta = (name, val, isProp = false) => {
      const sel = isProp ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      const el = document.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };

    const formattedOgImage = ogImage.startsWith('http')
      ? ogImage
      : `https://vasanthaatextiless.in${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

    setMeta('description', desc);
    setMeta('robots', activePage === 'not-found' ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    setMeta('og:title', title, true);
    setMeta('og:description', desc, true);
    setMeta('og:url', canonical, true);
    setMeta('og:image', formattedOgImage, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', desc);
    setMeta('twitter:url', canonical);
    setMeta('twitter:image', formattedOgImage);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) linkCanonical.setAttribute('href', canonical);

    // Dynamic Route JSON-LD Injection
    let schemaEl = document.getElementById('dynamic-route-schema');
    if (schemaJson) {
      if (!schemaEl) {
        schemaEl = document.createElement('script');
        schemaEl.id = 'dynamic-route-schema';
        schemaEl.type = 'application/ld+json';
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schemaJson);
    } else if (schemaEl) {
      schemaEl.remove();
    }
  }, [activePage, selectedFabric, selectedGarment]);

  // Swatch management
  const handleAddSwatch = (fabric) => {
    if (!swatches.some(s => s.id === fabric.id)) {
      setSwatches([...swatches, fabric]);
    }
    setIsSwatchDrawerOpen(true);
  };

  const handleRemoveSwatch = (fabricId) => {
    setSwatches(swatches.filter(s => s.id !== fabricId));
  };

  const handleClearSwatches = () => {
    setSwatches([]);
  };

  // RFQ modal management
  const handleOpenRFQ = (item = null) => {
    setRfqPreselectedFabric(item);
    setIsRFQModalOpen(true);
  };

  const handleCloseRFQ = () => {
    setIsRFQModalOpen(false);
  };

  // Navigation handlers
  const handleSelectFabric = (fabric) => {
    navigateTo('fabric-detail', fabric);
  };

  const handleSelectGarment = (garment) => {
    navigateTo('garment-detail', garment);
  };

  const handleBackToCatalog = () => {
    navigateTo('catalog');
  };

  const handleBackToGarments = () => {
    navigateTo('garments');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Global Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={(page) => navigateTo(page)}
        swatchCount={swatches.length}
        onOpenRFQ={handleOpenRFQ}
        onOpenSwatchDrawer={() => setIsSwatchDrawerOpen(true)}
      />

      {/* Main Page Routing */}
      <main style={{ flexGrow: 1 }}>
        {activePage === 'home' && (
          <Home
            setActivePage={(page) => navigateTo(page)}
            onSelectFabric={handleSelectFabric}
            onSelectGarment={handleSelectGarment}
            onAddSwatch={handleAddSwatch}
            swatches={swatches}
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'catalog' && (
          <Catalog
            onSelectFabric={handleSelectFabric}
            onAddSwatch={handleAddSwatch}
            swatches={swatches}
            onOpenRFQ={handleOpenRFQ}
            onOpenSwatchDrawer={() => setIsSwatchDrawerOpen(true)}
          />
        )}

        {activePage === 'fabric-detail' && (
          <FabricDetail
            fabric={selectedFabric}
            onBack={handleBackToCatalog}
            onAddSwatch={handleAddSwatch}
            isSwatchAdded={selectedFabric ? swatches.some(s => s.id === selectedFabric.id) : false}
            onOpenRFQ={handleOpenRFQ}
            onSelectFabric={handleSelectFabric}
            onSelectGarment={handleSelectGarment}
          />
        )}

        {activePage === 'garments' && (
          <Garments
            onSelectGarment={handleSelectGarment}
            onOpenRFQ={handleOpenRFQ}
            onSelectFabric={handleSelectFabric}
          />
        )}

        {activePage === 'garment-detail' && (
          <GarmentDetail
            garment={selectedGarment}
            onBack={handleBackToGarments}
            onOpenRFQ={handleOpenRFQ}
            onSelectGarment={handleSelectGarment}
            onSelectFabric={handleSelectFabric}
          />
        )}

        {activePage === 'capabilities' && (
          <Capabilities
            onOpenRFQ={handleOpenRFQ}
            setActivePage={(page) => navigateTo(page)}
          />
        )}

        {activePage === 'quality' && (
          <QualityAssurance
            onOpenRFQ={handleOpenRFQ}
            setActivePage={(page) => navigateTo(page)}
          />
        )}

        {activePage === 'about' && (
          <About
            onOpenRFQ={handleOpenRFQ}
            setActivePage={(page) => navigateTo(page)}
          />
        )}

        {activePage === 'resources' && (
          <Resources
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'contact' && (
          <Contact />
        )}

        {activePage === 'not-found' && (
          <NotFound
            setActivePage={(page) => navigateTo(page)}
            onOpenRFQ={handleOpenRFQ}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={(page) => navigateTo(page)}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Interactive Modals & Drawers */}
      <RFQModal
        isOpen={isRFQModalOpen}
        onClose={handleCloseRFQ}
        preselectedFabric={rfqPreselectedFabric}
      />

      <SwatchDrawer
        isOpen={isSwatchDrawerOpen}
        onClose={() => setIsSwatchDrawerOpen(false)}
        swatches={swatches}
        onRemoveSwatch={handleRemoveSwatch}
        onClearSwatches={handleClearSwatches}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Floating WhatsApp Concierge */}
      <WhatsAppFloating />

    </div>
  );
}

export default App;
