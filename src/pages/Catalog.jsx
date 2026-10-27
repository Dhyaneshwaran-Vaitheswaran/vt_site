import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Filter, ArrowUpRight, ShoppingBag, Printer, FileText } from 'lucide-react';
import { FABRICS, CATEGORIES } from '../data/fabrics';
import { FabricCard } from '../components/FabricCard';

export const Catalog = ({ onSelectFabric, onAddSwatch, swatches, onOpenRFQ, onOpenSwatchDrawer }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Fabrics');
  const [selectedWeight, setSelectedWeight] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredFabrics = useMemo(() => {
    return FABRICS.filter(fabric => {
      // Search
      const matchesSearch = searchQuery === '' ||
        fabric.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.weave.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.fiber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fabric.applications.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category
      const matchesCategory = selectedCategory === 'All Fabrics' || fabric.category === selectedCategory;

      // Weight
      let matchesWeight = true;
      const gsmNumber = parseInt(fabric.gsm.split('-')[0]) || 200;
      if (selectedWeight === 'light') matchesWeight = gsmNumber < 150;
      else if (selectedWeight === 'medium') matchesWeight = gsmNumber >= 150 && gsmNumber <= 240;
      else if (selectedWeight === 'heavy') matchesWeight = gsmNumber > 240;

      return matchesSearch && matchesCategory && matchesWeight;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedWeight, sortBy]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', paddingBottom: '6rem' }}>

      {/* Catalog Header Banner — Pure Black & Red */}
      <section style={{
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        padding: 'clamp(4rem, 6vw, 5.5rem) 0',
        borderBottom: '1px solid #27272A'
      }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span className="badge badge-red" style={{ marginBottom: '1rem', backgroundColor: '#FEF2F2', color: '#C51E3A' }}>
              B2B WOVEN FABRIC PORTFOLIO
            </span>
            <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', marginBottom: '1rem', fontWeight: 800 }}>
              Specialty Woven Fabrics & Substrates
            </h1>
            <p style={{ color: '#D4D4D8', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: '1.75', marginBottom: '2rem' }}>
              All fabrics are coordinated directly through audited air-jet and rapier weaving facilities in the Erode textile cluster. Complete technical spec sheets, lab dips, and physical swatch feelers available for each construction.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary btn-lg"
              >
                <ArrowUpRight size={18} /> Request Custom Spec Quote
              </button>
              <button
                onClick={onOpenSwatchDrawer}
                className="btn btn-outline-light btn-lg"
              >
                <ShoppingBag size={18} /> View Selected Swatches ({swatches.length})
              </button>
              <button
                onClick={() => window.print()}
                className="btn btn-outline-light btn-lg"
                title="Print or Save Fabric Catalog Specification Table"
              >
                <Printer size={18} /> Print / Save Catalog Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar — Responsive Sticky Bar */}
      <section className="catalog-filter-sticky">
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.85rem'
          }}>

            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 240px', minWidth: '0', maxWidth: '420px' }}>
              <Search size={18} color="#71717A" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search twill, drill, linen, GSM, application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.75rem', margin: 0 }}
              />
            </div>

            {/* Weight & Sort Filter Selectors */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', flexShrink: 0 }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#52525B' }}>Filter:</span>
              <select
                className="form-select"
                style={{ width: 'auto', padding: '0.6rem 0.85rem', fontSize: '0.8125rem' }}
                value={selectedWeight}
                onChange={(e) => setSelectedWeight(e.target.value)}
              >
                <option value="all">All Weights</option>
                <option value="light">Lightweight (&lt; 150 GSM)</option>
                <option value="medium">Midweight (150 - 240 GSM)</option>
                <option value="heavy">Heavyweight (&gt; 240 GSM)</option>
              </select>

              {/* Sort By */}
              <select
                className="form-select"
                style={{ width: 'auto', padding: '0.6rem 0.85rem', fontSize: '0.8125rem' }}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured / Specialties</option>
                <option value="name">Fabric Name (A-Z)</option>
              </select>
            </div>

          </div>

          {/* Category Chips */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingTop: '1rem',
            whiteSpace: 'nowrap',
            paddingBottom: '0.25rem'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  borderRadius: '9999px',
                  border: '1.5px solid',
                  borderColor: selectedCategory === cat ? '#C51E3A' : '#E4E4E7',
                  backgroundColor: selectedCategory === cat ? '#C51E3A' : '#FAFAFA',
                  color: selectedCategory === cat ? '#FFFFFF' : '#18181B',
                  cursor: 'pointer',
                  transition: 'all 150ms ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Catalog Grid Section */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="container">

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.95rem', color: '#52525B' }}>
              Showing <strong style={{ color: '#0A0A0A' }}>{filteredFabrics.length}</strong> industrial fabric constructions
            </div>
            {(searchQuery || selectedCategory !== 'All Fabrics' || selectedWeight !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Fabrics');
                  setSelectedWeight('all');
                }}
                style={{ background: 'none', border: 'none', color: '#C51E3A', fontSize: '0.875rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filteredFabrics.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: '#FAFAFA', borderRadius: '16px', border: '1px solid #E4E4E7' }}>
              <Filter size={48} color="#A1A1AA" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ color: '#0A0A0A', marginBottom: '0.5rem', fontWeight: 700 }}>No Matching Fabrics Found</h3>
              <p style={{ color: '#52525B', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                We coordinate bespoke weaves beyond our standard catalog. Send us your fabric composition or target swatch for a custom production quote.
              </p>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                Inquire on Bespoke Fabric
              </button>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: '2.5rem' }}>
              {filteredFabrics.map(fabric => (
                <FabricCard
                  key={fabric.id}
                  fabric={fabric}
                  onSelectFabric={onSelectFabric}
                  onAddSwatch={onAddSwatch}
                  isSwatchAdded={swatches.some(s => s.id === fabric.id)}
                  onOpenRFQ={onOpenRFQ}
                />
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
