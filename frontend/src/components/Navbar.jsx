import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, PlusCircle, Bell, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Transform values for scroll effect
  const headerPadding = useTransform(scrollY, [0, 100], ["1.5rem 0", "1rem 0"]);

  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, text: 'Your ad "Tesla Model 3" is now live!', time: '2h ago' },
    { id: 2, text: 'You have a new message from Rahul.', time: '5h ago' },
  ];

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
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <motion.button 
            className="action-icon theme-toggle hide-mobile" 
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          
          <div className="notification-wrapper hide-mobile">
            <motion.button 
              className="action-icon" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={20} />
              <span className="notification-badge">2</span>
            </motion.button>

            {showNotifications && (
              <motion.div 
                className="notification-dropdown glass-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="dropdown-header">
                  <strong>Notifications</strong>
                </div>
                {notifications.map(n => (
                  <div key={n.id} className="notification-item">
                    <p>{n.text}</p>
                    <span>{n.time}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          
          <Link to="/post-ad" className="post-ad-btn hide-mobile">
            <PlusCircle size={20} />
            <span>Post an Ad</span>
          </Link>

          {user ? (
            <div className="user-nav-item" onClick={() => setShowUserMenu(!showUserMenu)}>
              <motion.div className="avatar-wrapper" whileHover={{ scale: 1.05 }}>
                <span className="user-initial">{user.name.charAt(0)}</span>
              </motion.div>
              {showUserMenu && (
                <motion.div 
                  className="user-dropdown glass-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="dropdown-header">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                  </div>
                  <Link to="/dashboard" className="dropdown-item">My Dashboard</Link>
                  <button onClick={logout} className="dropdown-item logout-btn">Logout</button>
                </motion.div>
              )}
            </div>
          ) : (
            <div className="auth-links hide-mobile">
              <Link to="/login" className="nav-link login-link">Login</Link>
              <Link to="/signup" className="signup-btn-mini">Sign Up</Link>
            </div>
          )}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="mobile-nav-drawer glass-card"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="mobile-links">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/browse" onClick={() => setIsMenuOpen(false)}>Browse</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/post-ad" className="mobile-post-btn" onClick={() => setIsMenuOpen(false)}>
                  Post an Ad
                </Link>
                <hr className="mobile-divider" />
                <button className="mobile-theme-toggle" onClick={() => { toggleTheme(); setIsMenuOpen(false); }}>
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div 
        className="scroll-progress" 
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} 
      />
    </motion.header>
  );
}
