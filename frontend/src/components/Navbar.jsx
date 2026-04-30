import { Link, useLocation } from 'react-router-dom';
import { PlusCircle, User, Bell, Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  
  // Transform values for scroll effect
  const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem 0", "1rem 0"]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setIsScrolled(v > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header 
      className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}
      style={{ padding: headerPadding }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.div 
            className="logo-icon"
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            e
          </motion.div>
          <span>CayTrade<span className="plus">+</span></span>
        </Link>
        
        <nav className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
            {location.pathname === '/' && <motion.div layoutId="nav-underline" className="nav-underline" />}
          </Link>
          <Link to="/browse" className="nav-link">Browse</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>

        <div className="navbar-actions">
          <motion.button className="action-icon" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Bell size={20} />
          </motion.button>
          
          <Link to="/post-ad" className="post-ad-btn">
            <PlusCircle size={20} />
            <span>Post an Ad</span>
          </Link>

          <Link to="/dashboard" className="account-trigger">
            <div className="avatar-wrapper">
              <User size={18} />
            </div>
          </Link>
          
          <button className="mobile-menu-btn">
            <Menu size={24} />
          </button>
        </div>
      </div>
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} 
      />
    </motion.header>
  );
}
