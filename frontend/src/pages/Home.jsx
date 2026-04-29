import { 
  Home as HomeIcon, Car, ShoppingBag, Briefcase, Wrench, Users 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const categories = [
  { id: 1, slug: 'real-estate', name: 'Real Estate', icon: <HomeIcon size={32} />, count: '2,311 ads', color: '#10b981' },
  { id: 2, slug: 'autos-boats', name: 'Autos & Boats', icon: <Car size={32} />, count: '2,608 ads', color: '#f59e0b' },
  { id: 3, slug: 'buy-sell', name: 'Buy & Sell', icon: <ShoppingBag size={32} />, count: '11,916 ads', color: '#3b82f6' },
  { id: 4, slug: 'jobs', name: 'Jobs', icon: <Briefcase size={32} />, count: '411 ads', color: '#8b5cf6' },
  { id: 5, slug: 'services-specials', name: 'Services & Specials', icon: <Wrench size={32} />, count: '929 ads', color: '#ec4899' },
  { id: 6, slug: 'community', name: 'Community', icon: <Users size={32} />, count: '29 ads', color: '#14b8a6' },
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
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Banner Area */}
      <section className="hero-banner">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1>Discover & Trade in the Cayman Islands</h1>
            <p>The premium online classifieds to buy, sell, and connect instantly.</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Explore Categories
        </motion.h2>
        
        <motion.div 
          className="category-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
              <Link to={`/category/${cat.slug}`} className="category-link">
                <div className="category-card glass-card" style={{height: "100%"}}>
                  <div className="category-icon" style={{ backgroundColor: `${cat.color}15`, color: cat.color }}>
                    {cat.icon}
                  </div>
                  <div className="category-info">
                    <h3>{cat.name}</h3>
                    <p>{cat.count}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Ads */}
      <section className="featured-section container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Ads
        </motion.h2>
        <motion.div 
          className="ads-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredAds.map((ad) => (
            <motion.div key={ad.id} variants={itemVariants} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
              <Link to={`/ad/${ad.id}`} className="ad-link">
                <div className="ad-card glass-card" style={{height: "100%"}}>
                  <div className="ad-image">
                    <img src={ad.image} alt={ad.title} />
                    <span className="ad-category-badge">{ad.categoryLabel}</span>
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
      </section>
    </motion.div>
  );
}
