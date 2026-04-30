import { 
  Home as HomeIcon, Car, ShoppingBag, Briefcase, Wrench, Users, Search, ArrowRight 
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
  { id: 1, slug: 'real-estate', name: 'Real Estate', icon: <HomeIcon size={28} />, count: '2,311 ads', color: '#10b981' },
  { id: 2, slug: 'autos-boats', name: 'Autos & Boats', icon: <Car size={28} />, count: '2,608 ads', color: '#f59e0b' },
  { id: 3, slug: 'buy-sell', name: 'Buy & Sell', icon: <ShoppingBag size={28} />, count: '11,916 ads', color: '#3b82f6' },
  { id: 4, slug: 'jobs', name: 'Jobs', icon: <Briefcase size={28} />, count: '411 ads', color: '#8b5cf6' },
  { id: 5, slug: 'services-specials', name: 'Services & Specials', icon: <Wrench size={28} />, count: '929 ads', color: '#ec4899' },
  { id: 6, slug: 'community', name: 'Community', icon: <Users size={28} />, count: '29 ads', color: '#14b8a6' },
];

const featuredAds = [
  { id: 1, title: '2024 BMW X6 X Drive 40i', price: 'CI$ 73,900', category: 'autos-boats', categoryLabel: 'Autos & Boats', location: 'On Island', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Morganville West Studio', price: 'CI$ 299,000', category: 'real-estate', categoryLabel: 'Real Estate', location: 'West Bay', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Chris Craft Catalina 29', price: 'CI$ 159,500', category: 'autos-boats', categoryLabel: 'Autos & Boats', location: 'On Island', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Seagull 1 Bed 1 Bath', price: 'CI$ 2,800/mo', category: 'real-estate', categoryLabel: 'Real Estate', location: '7 Mile Beach', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: 'Designer Handbag Collection', price: 'CI$ 1,200', category: 'buy-sell', categoryLabel: 'Buy & Sell', location: 'George Town', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400' },
  { id: 6, title: 'Modern Office Space', price: 'CI$ 4,500/mo', category: 'real-estate', categoryLabel: 'Real Estate', location: 'Camana Bay', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
  { id: 7, title: '2023 Toyota Hilux', price: 'CI$ 42,000', category: 'autos-boats', categoryLabel: 'Autos & Boats', location: 'George Town', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400' },
  { id: 8, title: 'Professional Camera Gear', price: 'CI$ 2,500', category: 'buy-sell', categoryLabel: 'Buy & Sell', location: 'Bodden Town', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  show: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 } 
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <motion.div 
          className="blob blob-1"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="blob blob-2"
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 120, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Banner Area */}
      <section className="hero-banner">
        <div className="container">
          <motion.div 
            className="hero-content"
            style={{ y: heroY }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ✨ Trusted by 50,000+ Islanders
            </motion.div>
            <h1>Find Exactly What <br /><span>You're Looking For.</span></h1>
            <p>The Cayman Islands' most premium marketplace for elite deals and community connections.</p>
            
            <motion.div 
              className="hero-search-container"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="search-wrapper glass-card">
                <Search className="search-icon" />
                <input type="text" placeholder="Search for cars, homes, services..." />
                <button className="btn-primary">
                  Search <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Elite Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Browse through our curated selections
          </motion.p>
        </div>
        
        <motion.div 
          className="category-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={`/category/${cat.slug}`} className="category-link">
                <div className="category-card glass-card">
                  <div className="category-icon-wrapper" style={{ '--accent': cat.color }}>
                    <div className="category-icon-bg" />
                    {cat.icon}
                  </div>
                  <div className="category-info">
                    <h3>{cat.name}</h3>
                    <p>{cat.count}</p>
                  </div>
                  <div className="category-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Ads */}
      <section className="featured-section container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Premium Listings
          </motion.h2>
          <motion.div className="header-actions">
            <Link to="/search" className="view-all">View All Ads <ArrowRight size={16} /></Link>
          </motion.div>
        </div>

        <motion.div 
          className="ads-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredAds.map((ad) => (
            <motion.div 
              key={ad.id} 
              variants={itemVariants}
              whileHover={{ y: -12 }}
            >
              <Link to={`/ad/${ad.id}`} className="ad-link">
                <div className="ad-card glass-card">
                  <div className="ad-image">
                    <img src={ad.image} alt={ad.title} loading="lazy" />
                    <div className="ad-overlay">
                      <span className="ad-category-badge">{ad.categoryLabel}</span>
                    </div>
                  </div>
                  <div className="ad-details">
                    <h3>{ad.title}</h3>
                    <div className="ad-meta-top">
                      <span className="ad-location">{ad.location}</span>
                    </div>
                    <div className="ad-footer">
                      <p className="ad-price">{ad.price}</p>
                      <button className="ad-favorite-btn">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
