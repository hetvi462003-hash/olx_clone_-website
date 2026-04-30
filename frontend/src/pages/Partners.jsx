import { motion } from 'framer-motion';
import { Handshake, Building2, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './Partners.css';

const partnerTypes = [
  {
    title: "Real Estate Agencies",
    desc: "Streamline your listings and reach serious buyers instantly.",
    icon: <Building2 size={32} />
  },
  {
    title: "Car Dealerships",
    desc: "The #1 destination for auto sales in the Cayman Islands.",
    icon: <Zap size={32} />
  },
  {
    title: "Service Providers",
    desc: "Grow your client base with a verified professional profile.",
    icon: <Shield size={32} />
  }
];

export default function Partners() {
  return (
    <div className="partners-page">
      <section className="partners-hero container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Handshake size={64} color="var(--primary-color)" className="mb-6" />
          <h1>Build the Future <br/><span>With Us</span></h1>
          <p>Join our ecosystem of trusted partners and grow your business with the island's leading digital marketplace.</p>
          <button className="btn-primary">Become a Partner</button>
        </motion.div>
      </section>

      <section className="partnership-types container">
        <div className="grid">
          {partnerTypes.map((type, i) => (
            <motion.div 
              key={type.title}
              className="type-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="icon-box">{type.icon}</div>
              <h3>{type.title}</h3>
              <p>{type.desc}</p>
              <ul className="benefits-mini">
                <li><CheckCircle size={14} /> Bulk Listing Tools</li>
                <li><CheckCircle size={14} /> Priority Verification</li>
                <li><CheckCircle size={14} /> Custom Dashboard</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="partner-steps container">
        <h2 className="section-title text-center">How to Partner</h2>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-num">01</div>
            <h3>Apply</h3>
            <p>Tell us about your business and goals.</p>
          </div>
          <div className="step-item">
            <div className="step-num">02</div>
            <h3>Verify</h3>
            <p>Our team reviews your credentials for trust.</p>
          </div>
          <div className="step-item">
            <div className="step-num">03</div>
            <h3>Go Live</h3>
            <p>Start reaching thousands of customers.</p>
          </div>
        </div>
      </section>

      <section className="cta-banner container">
        <div className="glass-card cta-content">
          <h2>Ready to elevate your business?</h2>
          <p>Contact our partnership team for a discovery call.</p>
          <button className="btn-primary">Get in Touch <ArrowRight size={18} /></button>
        </div>
      </section>
    </div>
  );
}
