import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import './CategoryPage.css';

const dummyData = {
  'real-estate': [
    { id: 1, title: 'Harmony 7 - End Unit w/Pool View', price: 'Price Upon Request', location: 'Prospect', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
    { id: 5, title: 'Seagull 1 Bed 1 Bath', price: 'CI$ 2,800/mo', location: '7 Mile Beach', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
    { id: 6, title: 'Oceanfront Villa', price: 'CI$ 1,200,000', location: 'Rum Point', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
    { id: 13, title: 'Camana Bay Penthouse', price: 'CI$ 8,500/mo', location: 'Seven Mile Beach', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
    { id: 24, title: 'Prime Beachfront Lot', price: 'CI$ 450,000', location: 'North Side', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400', type: 'Lots & Lands' },
    { id: 25, title: 'Downtown Office Space', price: 'CI$ 3,500/mo', location: 'George Town', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400', type: 'Office & Commercial' },
    { id: 26, title: 'Secure Garage Unit', price: 'CI$ 300/mo', location: 'Industrial Park', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=400', type: 'Parking & Storage' },
    { id: 27, title: 'Beachfront Modern Condo', price: 'CI$ 850,000', location: '7 Mile Beach', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
    { id: 28, title: 'Luxury Tropical Estate', price: 'CI$ 3,200,000', location: 'Savannah', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400', type: 'Homes & Apartments' },
  ],
  'autos-boats': [
    { id: 2,  title: '2024 BMW X6 X Drive 40i',      price: 'CI$ 73,900',   location: 'On Island',    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400' },
    { id: 3,  title: 'Chris Craft Catalina 29',      price: 'CI$ 159,500',  location: 'On Island',    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=400' },
    { id: 7,  title: 'Yamaha WaveRunner FX',         price: 'CI$ 12,000',   location: 'Grand Cayman', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=400' },
    { id: 15, title: '2023 Tesla Model 3',           price: 'CI$ 45,000',   location: 'George Town',  image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400' },
    { id: 16, title: 'Boston Whaler 270',            price: 'CI$ 125,000',  location: 'On Island',    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
    { id: 29, title: 'Solar Electric Boat – Eco Cruiser', price: 'CI$ 38,000', location: 'Grand Cayman', image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=400' }
  ],

  'buy-sell': [
    { id: 8, title: 'iPhone 14 Pro Max', price: 'CI$ 800', location: 'George Town', image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=400' },
    { id: 9, title: 'MacBook Pro M2', price: 'CI$ 1,500', location: 'West Bay', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400' },
    { id: 17, title: 'PlayStation 5 Console', price: 'CI$ 450', location: 'Bodden Town', image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=400' },
    { id: 18, title: 'Nikon Z6 II Mirrorless', price: 'CI$ 1,800', location: 'George Town', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' }
  ],
  'jobs': [
    { id: 10, title: 'Senior Software Engineer', price: 'Competitive', location: 'Camana Bay', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400' },
    { id: 19, title: 'Marketing Manager', price: 'CI$ 65k - 85k', location: 'George Town', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400' },
    { id: 20, title: 'Customer Support Lead', price: 'CI$ 40k', location: 'West Bay', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400' }
  ],
  'services-specials': [
    { id: 11, title: 'Plumbing Services', price: 'CI$ 50/hr', location: 'All Islands', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400' },
    { id: 21, title: 'Full Home Cleaning', price: 'CI$ 120', location: 'All Islands', image: 'https://images.unsplash.com/photo-1581578731522-7b794b66a7ae?auto=format&fit=crop&q=80&w=400' },
    { id: 22, title: 'IT Support & Repairs', price: 'CI$ 75/hr', location: 'George Town', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' }
  ],
  'community': [
    { id: 12, title: 'Beach Cleanup Volunteer', price: 'Free', location: 'Seven Mile Beach', image: 'https://images.unsplash.com/photo-1618477461853-488b0a9cdcf8?auto=format&fit=crop&q=80&w=400' },
    { id: 23, title: 'Local Art Workshop', price: 'CI$ 25', location: 'Grand Cayman', image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=400' }
  ]
};

const categoryLabels = {
  'real-estate': 'Real Estate',
  'autos-boats': 'Autos & Boats',
  'buy-sell': 'Buy & Sell',
  'jobs': 'Jobs',
  'services-specials': 'Services & Specials',
  'community': 'Community'
};

const categoryBanners = {
  'real-estate': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
  'autos-boats': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600',
  'buy-sell': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600',
  'jobs': 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600',
  'services-specials': 'https://images.unsplash.com/photo-1581578731522-7b794b66a7ae?auto=format&fit=crop&q=80&w=1600',
  'community': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600'
};

const filterConfigs = {
  'real-estate': {
    tabs: ['Buy (838)', 'Rent (1414)', 'Share (37)'],
    options: ['Homes & Apartments', 'Lots & Lands', 'Office & Commercial', 'Timeshare', 'Parking & Storage']
  },
  'jobs': {
    tabs: ['Full Time (156)', 'Part Time (42)', 'Contract (15)'],
    options: ['All Categories', 'Software', 'Hospitality', 'Accounting', 'Admin', 'Construction']
  },
  'autos-boats': {
    tabs: ['Used (1,240)', 'New (150)', 'Rentals (45)'],
    options: ['All Types', 'Cars & SUVs', 'Boats', 'Trucks', 'Motorcycles']
  },
  'buy-sell': {
    tabs: ['For Sale (8,420)', 'Wanted (320)'],
    options: ['All Categories', 'Electronics', 'Home & Garden', 'Clothing', 'Health & Beauty']
  }
};

const defaultFilter = {
  tabs: ['Browse All', 'Featured'],
  options: ['Select Type', 'Popular', 'Recent']
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const API = 'http://localhost:5000';
const imgSrc = (url) => url?.startsWith('/uploads/') ? `${API}${url}` : url;

const ITEMS_PER_PAGE = 4;

export default function CategoryPage() {
  const { id } = useParams();
  const dummy = dummyData[id] || [];
  const categoryName = categoryLabels[id] || 'Category';
  const bannerImage = categoryBanners[id] || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600';
  const filters = filterConfigs[id] || defaultFilter;

  // Live ads from API (merged on top of dummy data)
  const [liveAds, setLiveAds] = useState([]);
  const [loadingAds, setLoadingAds] = useState(true);

  useEffect(() => {
    setLoadingAds(true);
    // Convert URL id (e.g. 'real-estate') to label (e.g. 'Real Estate')
    const label = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    fetch(`${API}/api/ads?category=${encodeURIComponent(label)}`)
      .then(r => r.ok ? r.json() : [])
      .then(data => { setLiveAds(Array.isArray(data) ? data : []); setLoadingAds(false); })
      .catch(() => { setLiveAds([]); setLoadingAds(false); });
  }, [id]);

  // Merge: live DB ads first (newest), then dummy data
  const ads = [
    ...liveAds.map(a => ({
      id: a._id,
      title: a.title,
      price: a.price,
      location: a.location,
      image: imgSrc(a.images?.[0]) || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400',
      type: a.category,
      isLive: true,
    })),
    ...dummy,
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);
  const totalPages = Math.ceil(ads.length / ITEMS_PER_PAGE);
  const paginatedAds = ads.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Custom Layout for Jobs Category (Enhanced with Premium Animations)
  if (id === 'jobs') {
    return (
      <motion.div 
        className="category-page job-landing-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Advanced Animated Hero */}
        <div className="job-hero">
          <motion.div 
            className="job-hero-bg"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${bannerImage})` }}
          />
          <div className="container job-hero-content">
            <div className="job-brand-header">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >eCay</motion.span>
              <motion.span
                className="brand-accent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >Jobs</motion.span>
            </div>

            <div className="job-search-container">
              <motion.div 
                className="job-search-mini glass-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              >
                <input type="text" placeholder="Enter keywords, skills, or companies..." />
                <button className="search-mini-btn">🔍</button>
              </motion.div>
            </div>

            <motion.h1 
              className="job-main-headline"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              Connecting great candidates <br /> 
              <motion.span 
                initial={{ color: "#ffffff" }}
                animate={{ color: "#3b82f6" }}
                transition={{ delay: 2, duration: 1 }}
              >with great jobs</motion.span>
            </motion.h1>

            <motion.div 
              className="job-hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/post-ad?type=job-posting" className="btn-job-glass">Find Talent</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/post-ad?type=job-advert" className="btn-job-glass">Find Jobs</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="container job-sections-wrapper">
          <Link to="/" className="back-link" style={{marginBottom: '2rem'}}>← Back to Home</Link>
          
          {/* Animated Feature Cards Section */}
          <div className="job-feature-cards">
            <motion.div 
              className="job-feature-card glass-card"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="feature-text">
                <h3>Looking for a Job?</h3>
                <p>Create an advert to professionally and be contacted directly by your future employers.</p>
                <Link to="/post-ad?type=job-advert" className="btn-blue-solid">Create Advert</Link>
              </div>
              <motion.div 
                className="feature-icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >📁</motion.div>
            </motion.div>

            <motion.div 
              className="job-feature-card glass-card"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="feature-text">
                <h3>Find your next hire</h3>
                <p>We can help you expand your reach and get your jobs in front of the right talent.</p>
                <Link to="/post-ad?type=job-posting" className="btn-blue-solid">Create Job Posting</Link>
              </div>
              <motion.div 
                className="feature-icon"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >📢</motion.div>
            </motion.div>
          </div>

          {/* Advertisement Banner with Reveal Animation */}
          <motion.div 
            className="job-footer-ad"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" alt="Ad Banner" />
            <div className="ad-overlay">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >GET UP TO $10,000 CASH BACK | MEGA SAVINGS!</motion.span>
            </div>
          </motion.div>

          <div className="section-header" style={{marginTop: '4rem'}}>
            <h2 className="grid-title">Featured Jobs <span>latest opportunities...</span></h2>
          </div>

          <motion.div 
            className="ads-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {ads.map((ad) => (
              <motion.div key={ad.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Link to={`/ad/${ad.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                  <div className="ad-card glass-card" style={{height: "100%"}}>
                    <div className="ad-image">
                      <img src={ad.image} alt={ad.title} />
                      <span className="ad-category-badge">{categoryName}</span>
                    </div>
                    <div className="ad-details">
                      <h3>{ad.title}</h3>
                      <p className="ad-price">{ad.price}</p>
                      <div className="ad-meta">
                        <span>{ad.location}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Default Layout for other categories
  return (
    <motion.div 
      className="category-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Premium Banner Section */}
      <div className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bannerImage})` }}>
        <div className="container hero-content-wrapper">
          <motion.div 
            className="hero-text-area"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="hero-category-title">{categoryName}</h1>
            
            {/* Filter/Search Box */}
            <div className="category-filter-box glass-card">
              <div className="filter-tabs">
                {filters.tabs.map((tab, idx) => (
                  <button key={tab} className={`filter-tab ${idx === 0 ? 'active' : ''}`}>{tab}</button>
                ))}
              </div>
              <div className="filter-inputs">
                <select className="filter-select">
                  {filters.options.map(opt => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
                <input type="text" placeholder={`Search in ${categoryName}...`} className="filter-search-input" />
                <button className="filter-submit-btn">Search</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container main-content-wrapper">
        <Link to="/" className="back-link">← Back to Home</Link>
        {/* Safety Alert */}
        <motion.div 
          className="safety-alert"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="safety-card">
            <span className="safety-icon">🛡️</span>
            <p><strong>Beware of Scams.</strong> Safety tips on eCayTrade+</p>
          </div>
        </motion.div>

        {/* Advertisement Banner */}
        <motion.div 
          className="ad-placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="ad-inner">
            <span className="ad-text">BCQS | RENTALS</span>
            <button className="ad-btn">SEARCH NOW 🔍</button>
          </div>
        </motion.div>

        <div className="section-header">
          <h2 className="grid-title">
            Featured Ads <span>that might interest you...</span>
          </h2>
        </div>

        {loadingAds ? (
          <div style={{display:'flex',justifyContent:'center',padding:'3rem'}}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{ width: 44, height: 44, border: '4px solid #e2e8f0', borderTopColor: '#3b82f6', borderRadius: '50%' }}
            />
          </div>
        ) : ads.length > 0 ? (
          <>
            <div ref={gridRef} />
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                className="ads-grid"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -10 }}
              >
                {paginatedAds.map((ad) => (
                  <motion.div key={ad.id} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <Link to={`/ad/${ad.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                      <div className="ad-card glass-card" style={{height: "100%"}}>
                        <div className="ad-image">
                          <img src={ad.image} alt={ad.title} />
                          <span className="ad-category-badge">{categoryName}</span>
                        </div>
                        <div className="ad-details">
                          <h3>{ad.title}</h3>
                          <p className="ad-price">{ad.price}</p>
                          <div className="ad-meta">
                            <span>📍 {ad.location}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <motion.div
                className="pagination-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="pagination-info">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, ads.length)} of {ads.length} listings
                </div>
                <div className="pagination-controls">
                  <motion.button
                    className={`page-btn page-nav ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    whileHover={currentPage > 1 ? { scale: 1.08 } : {}}
                    whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
                  >
                    ‹ Prev
                  </motion.button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <motion.button
                      key={page}
                      className={`page-btn ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      {page}
                    </motion.button>
                  ))}

                  <motion.button
                    className={`page-btn page-nav ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    whileHover={currentPage < totalPages ? { scale: 1.08 } : {}}
                    whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
                  >
                    Next ›
                  </motion.button>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div 
            className="no-ads-message glass-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3>No ads found in {categoryName}.</h3>
            <Link to="/post-ad" className="btn-primary" style={{marginTop: '1rem'}}>Post the first one!</Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
