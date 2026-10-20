import React, { useState } from 'react';
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

export function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [swatches, setSwatches] = useState([]);
  
  const [isRFQModalOpen, setIsRFQModalOpen] = useState(false);
  const [rfqPreselectedFabric, setRfqPreselectedFabric] = useState(null);
  const [isSwatchDrawerOpen, setIsSwatchDrawerOpen] = useState(false);

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

  // Fabric detail navigation
  const handleSelectFabric = (fabric) => {
    setSelectedFabric(fabric);
    setActivePage('fabric-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setActivePage('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-wrapper">
      
      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        swatchCount={swatches.length}
        onOpenRFQ={handleOpenRFQ}
        onOpenSwatchDrawer={() => setIsSwatchDrawerOpen(true)}
      />

      {/* Main Page Routing */}
      <main>
        {activePage === 'home' && (
          <Home
            setActivePage={setActivePage}
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
        setActivePage={setActivePage}
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
