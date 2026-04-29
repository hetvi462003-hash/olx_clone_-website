import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <motion.footer 
      className="footer section-glass"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container footer-container">
        <motion.div 
          className="footer-brand"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="navbar-logo">
            eCay<span>Trade+</span>
          </Link>
          <p className="footer-desc">
            The premier online classifieds for the Cayman Islands. Buy, Sell, and Trade with confidence.
          </p>
        </motion.div>
        
        <div className="footer-links-grid">
          {[
            {
              title: "About us",
              links: [
                {name: "About us", path: "/page/about-us"},
                {name: "Advertise with us", path: "/page/advertise-with-us"},
                {name: "Careers", path: "/page/careers"},
                {name: "Partners", path: "/page/partners"}
              ]
            },
            {
              title: "Guides & Help",
              links: [
                {name: "Safety Tips / Scams", path: "/page/safety-tips"},
                {name: "Posting Policy", path: "/page/posting-policy"},
                {name: "Privacy Policy", path: "/page/privacy-policy"},
                {name: "Terms & Conditions", path: "/page/terms-conditions"}
              ]
            },
            {
              title: "Contact Us",
              links: [
                {name: "General Questions", path: "/page/general-questions"},
                {name: "Feedback", path: "/page/feedback"},
                {name: "Report Ad", path: "/page/report-ad"},
                {name: "Support", path: "/page/support"}
              ]
            }
          ].map((column, colIdx) => (
            <motion.div 
              key={column.title}
              className="footer-column"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (colIdx * 0.1) }}
            >
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link to={link.path}>{link.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        className="footer-bottom container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>&copy; {new Date().getFullYear()} eCayTrade+. Developed by AI. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}
