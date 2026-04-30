import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page container">
      <motion.div 
        className="not-found-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="error-code">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          >
            404
          </motion.h1>
          <div className="code-shadow"></div>
        </div>
        
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        
        <div className="search-bar-404 glass-card">
          <Search size={20} />
          <input type="text" placeholder="Try searching for something else..." />
        </div>

        <div className="not-found-actions">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <button className="btn-secondary" onClick={() => window.history.back()}>
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
    </div>
  );
}
