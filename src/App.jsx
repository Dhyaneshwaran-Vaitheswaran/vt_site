import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RFQModal } from './components/RFQModal';
import { SwatchDrawer } from './components/SwatchDrawer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { FabricDetail } from './pages/FabricDetail';
import { Capabilities } from './pages/Capabilities';
import { QualityAssurance } from './pages/QualityAssurance';
import { About } from './pages/About';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';

import { FABRICS } from './data/fabrics';

// Route parser for SEO & Browser URL synchronization
function parseRouteFromLocation() {
  if (typeof window === 'undefined') return { page: 'home', fabric: null };
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  
  if (path === '/' || path === '') return { page: 'home', fabric: null };
  if (path === '/catalog') return { page: 'catalog', fabric: null };
  if (path === '/capabilities') return { page: 'capabilities', fabric: null };
  if (path === '/quality-assurance' || path === '/quality') return { page: 'quality', fabric: null };
  if (path === '/about') return { page: 'about', fabric: null };
  if (path === '/resources') return { page: 'resources', fabric: null };
  if (path === '/contact') return { page: 'contact', fabric: null };
  
  if (path.startsWith('/fabric/')) {
    const fabricId = path.replace('/fabric/', '');
    const found = FABRICS.find(f => f.id === fabricId);
    if (found) {
      return { page: 'fabric-detail', fabric: found };
    }
    return { page: 'catalog', fabric: null };
  }

  return { page: 'home', fabric: null };
}

export function App() {
  const initialRoute = parseRouteFromLocation();
  const [activePage, setActivePage] = useState(initialRoute.page);
  const [selectedFabric, setSelectedFabric] = useState(initialRoute.fabric);
  const [swatches, setSwatches] = useState([]);
  
  const [isRFQModalOpen, setIsRFQModalOpen] = useState(false);
  const [rfqPreselectedFabric, setRfqPreselectedFabric] = useState(null);
  const [isSwatchDrawerOpen, setIsSwatchDrawerOpen] = useState(false);

  // Central Navigation & URL State Synchronization
  const navigateTo = (page, fabric = null, replace = false) => {
    setActivePage(page);
    setSelectedFabric(fabric);

    let targetPath = '/';
    if (page === 'catalog') targetPath = '/catalog';
    else if (page === 'capabilities') targetPath = '/capabilities';
    else if (page === 'quality') targetPath = '/quality-assurance';
    else if (page === 'about') targetPath = '/about';
    else if (page === 'resources') targetPath = '/resources';
    else if (page === 'contact') targetPath = '/contact';
    else if (page === 'fabric-detail' && fabric) targetPath = `/fabric/${fabric.id}`;

    if (window.location.pathname !== targetPath) {
      if (replace) {
        window.history.replaceState({ page, fabricId: fabric?.id }, '', targetPath);
      } else {
        window.history.pushState({ page, fabricId: fabric?.id }, '', targetPath);
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
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Metadata updates per route
  useEffect(() => {
    let title = 'Vasanthaa Textiless | Textile Sourcing & Production Partner | Erode, India';
    let desc = 'Established in 1998 in Erode, Tamil Nadu. Vasanthaa Textiless delivers end-to-end woven textile sourcing, airjet weaving coordination, custom dyeing, and finishing for global apparel brands and garment exporters.';
    let canonical = 'https://vasanthaatextiless.in/';

    if (activePage === 'catalog') {
      title = 'Woven Fabric Catalog | Cotton Twill, Drill, Poplin & Blends | Vasanthaa Textiless Erode';
      desc = 'Explore export-grade woven fabric collections engineered in Erode: combed cotton twill, heavy drill, organic cotton, linen dobby, viscose rayon, and yarn-dyed checks.';
      canonical = 'https://vasanthaatextiless.in/catalog';
    } else if (activePage === 'fabric-detail' && selectedFabric) {
      title = `${selectedFabric.name} Sourcing & Manufacturing | Vasanthaa Textiless Erode`;
      desc = `Technical B2B specifications for ${selectedFabric.name} (${selectedFabric.gsm}, ${selectedFabric.fiber}, ${selectedFabric.weave}). Custom dyeing, lab dips, and bulk production in Erode textile hub.`;
      canonical = `https://vasanthaatextiless.in/fabric/${selectedFabric.id}`;
    } else if (activePage === 'capabilities') {
      title = 'Textile Manufacturing Capabilities | Weaving & Dyeing Coordination | Erode';
      desc = 'End-to-end fabric execution across Erode textile cluster: yarn procurement, high-speed airjet/rapier weaving, custom reactive dyeing, rotary printing, and commercial finishing.';
      canonical = 'https://vasanthaatextiless.in/capabilities';
    } else if (activePage === 'quality') {
      title = 'Textile Quality Assurance & Lab Standards | Vasanthaa Textiless Erode';
      desc = 'Four-tier QA protocol adhering to ASTM and ISO standards: 4-Point greige inspection, spectrophotometer lab dips, shrinkage control, and pre-dispatch testing in Erode.';
      canonical = 'https://vasanthaatextiless.in/quality-assurance';
    } else if (activePage === 'about') {
      title = 'About Vasanthaa Textiless | 28+ Years Textile Heritage in Erode Fort';
      desc = 'Founded in 1998 by Mr. Vaitheswaran in Erode Fort. Decades of mastery in woven textile sourcing, technical coordination, and trusted supply for garment manufacturers worldwide.';
      canonical = 'https://vasanthaatextiless.in/about';
    } else if (activePage === 'resources') {
      title = 'B2B Sourcing FAQs & Procurement Standards | Vasanthaa Textiless Erode';
      desc = 'Answers to common commercial questions regarding MOQs, lab dips, payments, and our centralized weaving & dyeing coordination in Erode.';
      canonical = 'https://vasanthaatextiless.in/resources';
    } else if (activePage === 'contact') {
      title = 'Contact Vasanthaa Textiless | Erode Fort Facility & RFQ Desk';
      desc = 'Connect with our commercial fabric desk at Erode Fort, Tamil Nadu. Fast lab dip turnaround, sample swatch dispatch, and bulk order production coordination.';
      canonical = 'https://vasanthaatextiless.in/contact';
    }

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', desc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonical);

    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', desc);

    const twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', canonical);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) linkCanonical.setAttribute('href', canonical);
  }, [activePage, selectedFabric]);

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
  const handleOpenRFQ = (fabric = null) => {
    setRfqPreselectedFabric(fabric);
    setIsRFQModalOpen(true);
  };

  const handleCloseRFQ = () => {
    setIsRFQModalOpen(false);
  };

  // Navigation handlers
  const handleSelectFabric = (fabric) => {
    navigateTo('fabric-detail', fabric);
  };

  const handleBackToCatalog = () => {
    navigateTo('catalog');
  };

  return (
    <div className="site-wrapper">
      
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={(page) => navigateTo(page)}
        swatchCount={swatches.length}
        onOpenRFQ={handleOpenRFQ}
        onOpenSwatchDrawer={() => setIsSwatchDrawerOpen(true)}
      />

      {/* Main Page Routing */}
      <main>
        {activePage === 'home' && (
          <Home
            setActivePage={(page) => navigateTo(page)}
            onSelectFabric={handleSelectFabric}
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
          />
        )}

        {activePage === 'capabilities' && (
          <Capabilities
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'quality' && (
          <QualityAssurance
            onOpenRFQ={handleOpenRFQ}
          />
        )}

        {activePage === 'about' && (
          <About
            onOpenRFQ={handleOpenRFQ}
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
