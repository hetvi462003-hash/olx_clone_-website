import { motion } from 'framer-motion';
import { Users, Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const stats = [
  { id: 1, label: 'Active Users', value: '50K+', icon: <Users size={28} /> },
  { id: 2, label: 'Daily Ads', value: '2,000+', icon: <Globe size={28} /> },
  { id: 3, label: 'Safe Trades', value: '100%', icon: <ShieldCheck size={28} /> },
  { id: 4, label: 'Fast Sales', value: '24hr', icon: <Zap size={28} /> },
];

const team = [
  { name: 'Marcus Sterling', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Elena Rostova', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'James Carter', role: 'VP of Trust & Safety', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' }
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-content-wrapper">
            <h1 className="gradient-text">Redefining Classifieds <br/>in the Cayman Islands.</h1>
            <p className="about-hero-desc">eCayTrade+ is the next-generation marketplace. We connect thousands of buyers and sellers daily through a blazing fast, ultra-secure, and beautifully designed platform.</p>
            <div className="hero-actions">
              <Link to="/post-ad" className="btn-primary btn-lg">Start Selling <ArrowRight size={20} /></Link>
            </div>
          </div>
        </motion.div>
        
        {/* Abstract Background Elements */}
        <div className="hero-bg-shape shape-1"></div>
        <div className="hero-bg-shape shape-2"></div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-container container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.id} 
              className="stat-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission container">
        <div className="mission-grid">
          <motion.div 
            className="mission-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" />
          </motion.div>
          
          <motion.div 
            className="mission-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Mission</h2>
            <p>At eCayTrade+, we felt the traditional classifieds experience was outdated, slow, and lacked a premium feel. We rebuilt everything from the ground up.</p>
            <p>Our mission is simple: to provide the most aesthetically pleasing, secure, and intuitive digital marketplace for the islands. We believe that buying a second-hand item or hunting for a new home should feel just as premium as shopping at a luxury storefront.</p>
            <ul className="mission-list">
              <li><ShieldCheck size={20} color="var(--primary-color)"/> Verified Users & fraud protection</li>
              <li><Zap size={20} color="var(--primary-color)"/> Sub-second page loads</li>
              <li><Globe size={20} color="var(--primary-color)"/> Island-wide reach</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team container">
        <h2 className="section-title text-center">Meet the Leadership</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              className="team-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
