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
    <div style={{ backgroundColor: '#FBF9F5', paddingBottom: '6rem' }}>
      
      {/* Catalog Header Banner */}
      <section style={{
        backgroundColor: '#0F172A',
        color: '#FFFFFF',
        padding: '4rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>B2B WOVEN FABRIC PORTFOLIO</span>
            <h1 style={{ color: '#FFFFFF', fontSize: '2.75rem', marginBottom: '1rem' }}>
              Specialty Woven Fabrics & Substrates
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.125rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              All fabrics are coordinated directly from certified spinning and air-jet/rapier weaving mills in the Erode textile cluster. Complete technical spec sheets, lab dips, and physical swatch feelers available for each construction.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> Request Custom Spec Quote
              </button>
              <button
                onClick={onOpenSwatchDrawer}
                className="btn btn-outline-light"
              >
                <ShoppingBag size={16} /> View Selected Swatches ({swatches.length})
              </button>
              <button
                onClick={() => window.print()}
                className="btn btn-outline-light"
                title="Print or Save Fabric Catalog Specification Table"
              >
                <Printer size={16} /> Print / Save Catalog Specs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '1.25rem 0',
        position: 'sticky',
        top: '64px',
        zIndex: 900,
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '400px' }}>
              <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search twill, drill, linen, GSM, application..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingLeft: '2.5rem', margin: 0 }}
              />
            </div>

            {/* Weight Filter Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748B' }}>Weight:</span>
              <select
                className="form-select"
                style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
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
                style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.85rem' }}
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
            paddingTop: '0.875rem',
            whiteSpace: 'nowrap',
            paddingBottom: '0.25rem'
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.375rem 0.875rem',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#C51E3A' : '#E2E8F0',
                  backgroundColor: selectedCategory === cat ? '#C51E3A' : '#F8FAFC',
                  color: selectedCategory === cat ? '#FFFFFF' : '#475569',
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
      <section style={{ paddingTop: '3rem' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.9375rem', color: '#64748B' }}>
              Showing <strong style={{ color: '#0F172A' }}>{filteredFabrics.length}</strong> industrial fabric constructions
            </div>
            {(searchQuery || selectedCategory !== 'All Fabrics' || selectedWeight !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Fabrics');
                  setSelectedWeight('all');
                }}
                style={{ background: 'none', border: 'none', color: '#C51E3A', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {filteredFabrics.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 1rem', backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <Filter size={48} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ color: '#0F172A', marginBottom: '0.5rem' }}>No Matching Fabrics Found</h3>
              <p style={{ color: '#64748B', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                We coordinate bespoke weaves and custom yarn blends beyond our standard catalog. Send us your fabric composition or target swatch for a custom production quote.
              </p>
              <button
                onClick={() => onOpenRFQ(null)}
                className="btn btn-primary"
              >
                Inquire on Bespoke Fabric
              </button>
            </div>
          ) : (
            <div className="grid-3">
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
