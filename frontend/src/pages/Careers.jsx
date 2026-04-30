import { motion } from 'framer-motion';
import { Briefcase, Heart, Lightbulb, TrendingUp, ArrowRight, MapPin, Clock } from 'lucide-react';
import './Careers.css';

const jobs = [
  { id: 1, title: "Senior Product Designer", dept: "Design", location: "George Town", type: "Full-time" },
  { id: 2, title: "Frontend Developer (React)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { id: 3, title: "Marketing Manager", dept: "Growth", location: "West Bay", type: "Contract" },
  { id: 4, title: "Trust & Safety Specialist", dept: "Operations", location: "George Town", type: "Full-time" }
];

export default function Careers() {
  return (
    <div className="careers-page">
      <section className="careers-hero container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Join the Future of <br/><span>Cayman Commerce</span></h1>
          <p>We're looking for passionate builders, thinkers, and dreamers to help us redefine how the island trades.</p>
          <div className="hero-btns">
            <a href="#openings" className="btn-primary">View Openings</a>
            <button className="btn-secondary">Our Culture</button>
          </div>
        </motion.div>
      </section>

      <section className="culture-section container">
        <h2 className="section-title text-center">Why eCayTrade+?</h2>
        <div className="culture-grid">
          <div className="culture-card glass-card">
            <Heart size={32} color="#ef4444" />
            <h3>People First</h3>
            <p>We believe in a work-life balance that actually works. Your well-being is our priority.</p>
          </div>
          <div className="culture-card glass-card">
            <Lightbulb size={32} color="#eab308" />
            <h3>Innovation Led</h3>
            <p>We don't just follow trends; we set them. Work with the latest tech stacks.</p>
          </div>
          <div className="culture-card glass-card">
            <TrendingUp size={32} color="#22c55e" />
            <h3>Growth Mindset</h3>
            <p>Continuous learning is in our DNA. We invest in your professional development.</p>
          </div>
        </div>
      </section>

      <section id="openings" className="openings-section container">
        <div className="section-header">
          <h2 className="section-title">Open Roles</h2>
          <p>Find your next challenge</p>
        </div>
        
        <div className="jobs-list">
          {jobs.map((job, i) => (
            <motion.div 
              key={job.id}
              className="job-item glass-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 10, backgroundColor: "var(--bg-card-hover)" }}
            >
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><Briefcase size={14} /> {job.dept}</span>
                  <span><MapPin size={14} /> {job.location}</span>
                  <span><Clock size={14} /> {job.type}</span>
                </div>
              </div>
              <button className="apply-btn">
                Apply Now <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="perks-banner container">
        <div className="glass-card perks-wrapper">
          <h2>Perks & Benefits</h2>
          <div className="perks-grid">
            <div className="perk">🏠 Remote Work Options</div>
            <div className="perk">🍎 Health Insurance</div>
            <div className="perk">✈️ Unlimited PTO</div>
            <div className="perk">💻 Latest Apple Gear</div>
            <div className="perk">☕ Daily Free Coffee</div>
            <div className="perk">🎉 Team Retreats</div>
          </div>
        </div>
      </section>
    </div>
  );
}
