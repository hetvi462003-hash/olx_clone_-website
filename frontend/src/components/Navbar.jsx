import { Link } from 'react-router-dom';
import { PlusCircle, LogIn, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  return (
    <motion.header 
      className="navbar-header glass-card"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          eCay<motion.span 
            initial={{ color: "#0f172a" }}
            animate={{ color: "#3b82f6" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >Trade+</motion.span>
        </Link>
        
        <motion.div 
          className="navbar-search"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <input type="text" placeholder="Search everywhere..." />
          <button className="search-btn"><Search size={18} /></button>
        </motion.div>

        <nav className="navbar-links">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/post-ad" className="btn-primary">
              <PlusCircle size={18} /> Post Ad
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/dashboard" className="nav-icon-link">
              <div className="nav-avatar-mini">JD</div>
              <span>My Account</span>
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
