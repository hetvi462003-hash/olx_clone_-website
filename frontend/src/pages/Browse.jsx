import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, Search, SlidersHorizontal, ChevronDown, 
  LayoutGrid, List, ArrowUpDown, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Browse.css';

// Mock data for initial UI
const initialAds = [
  { id: 1, title: '2024 BMW X6 X Drive 40i', price: 'CI$ 73,900', category: 'Autos & Boats', location: 'On Island', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Morganville West Studio', price: 'CI$ 299,000', category: 'Real Estate', location: 'West Bay', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Chris Craft Catalina 29', price: 'CI$ 159,500', category: 'Autos & Boats', location: 'On Island', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Seagull 1 Bed 1 Bath', price: 'CI$ 2,800/mo', category: 'Real Estate', location: '7 Mile Beach', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Designer Handbag Collection', price: 'CI$ 1,200', category: 'Buy & Sell', location: 'George Town', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'Modern Office Space', price: 'CI$ 4,500/mo', category: 'Real Estate', location: 'Camana Bay', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
];

const categories = [
  "All Categories", "Real Estate", "Autos & Boats", "Buy & Sell", "Jobs", "Services", "Community"
];

const locations = [
  "All Locations", "George Town", "West Bay", "Bodden Town", "On Island", "Seven Mile Beach"
];

export default function Browse() {
  const [ads, setAds] = useState(initialAds);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="browse-page container">
      {/* Search & Header */}
      <section className="browse-header">
        <div className="header-text">
          <h1>Browse Listings</h1>
          <p>Discover {ads.length} premium results in the Cayman Islands</p>
        </div>
        <div className="header-controls">
          <div className="view-switch glass-card">
            <button 
              className={viewMode === 'grid' ? 'active' : ''} 
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              className={viewMode === 'list' ? 'active' : ''} 
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
          <button className="filter-toggle-btn btn-secondary" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <SlidersHorizontal size={18} /> Filters
          </button>
        </div>
      </section>

      <div className="browse-layout">
        {/* Sidebar Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.aside 
              className="browse-sidebar"
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="filter-group glass-card">
                <div className="filter-title">
                  <h3>Categories</h3>
                  <ChevronDown size={16} />
                </div>
                <div className="filter-options">
                  {categories.map(cat => (
                    <label key={cat} className="filter-checkbox">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group glass-card">
                <div className="filter-title">
                  <h3>Price Range</h3>
                </div>
                <div className="price-inputs">
                  <input type="number" placeholder="Min" />
                  <span className="separator">-</span>
                  <input type="number" placeholder="Max" />
                </div>
              </div>

              <div className="filter-group glass-card">
                <div className="filter-title">
                  <h3>Location</h3>
                </div>
                <select className="filter-select">
                  {locations.map(loc => <option key={loc}>{loc}</option>)}
                </select>
              </div>

              <button className="btn-primary w-full mt-4">Apply Filters</button>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Listings Grid */}
        <main className={`listings-content ${viewMode}`}>
          <div className="listings-toolbar">
            <div className="active-filters">
              {selectedCategory !== "All Categories" && (
                <span className="filter-tag">
                  {selectedCategory} <X size={14} onClick={() => setSelectedCategory("All Categories")} />
                </span>
              )}
            </div>
            <div className="sort-control">
              <span>Sort by:</span>
              <div className="sort-dropdown">
                Newest First <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <motion.div 
            className={`ads-grid ${viewMode}`}
            layout
          >
            {ads.map((ad, index) => (
              <motion.div 
                key={ad.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/ad/${ad.id}`} className="ad-link">
                  <div className="ad-card glass-card">
                    <div className="ad-image">
                      <img src={ad.image} alt={ad.title} />
                      <span className="ad-badge">Premium</span>
                    </div>
                    <div className="ad-details">
                      <h3>{ad.title}</h3>
                      <p className="ad-category">{ad.category}</p>
                      <div className="ad-footer">
                        <span className="ad-price">{ad.price}</span>
                        <span className="ad-location">{ad.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
