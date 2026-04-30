import { motion } from 'framer-motion';
import { BarChart3, Target, MousePointer2, Rocket, CheckCircle2, MessageSquare } from 'lucide-react';
import './Advertise.css';

const plans = [
  {
    name: "Starter",
    price: "CI$ 49",
    period: "/month",
    features: ["1 Featured Ad", "Basic Analytics", "7 Days Duration", "Email Support"],
    recommended: false
  },
  {
    name: "Premium",
    price: "CI$ 199",
    period: "/month",
    features: ["5 Featured Ads", "Advanced Analytics", "30 Days Duration", "Priority Support", "Homepage Placement"],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Unlimited Ads", "Dedicated Account Manager", "API Access", "Custom Branding", "24/7 Phone Support"],
    recommended: false
  }
];

export default function Advertise() {
  return (
    <div className="advertise-page">
      <section className="advertise-hero container">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Grow Your Business</span>
          <h1>Advertise with the <br/><span>Most Trusted Platform</span></h1>
          <p>Reach over 50,000 active monthly users in the Cayman Islands. Get your products seen by the right people at the right time.</p>
        </motion.div>
      </section>

      <section className="stats-section container">
        <div className="stats-grid">
          <div className="stat-item glass-card">
            <BarChart3 size={32} color="var(--primary-color)" />
            <h3>500K+</h3>
            <p>Monthly Page Views</p>
          </div>
          <div className="stat-item glass-card">
            <Target size={32} color="var(--secondary-color)" />
            <h3>15K+</h3>
            <p>Daily Active Buyers</p>
          </div>
          <div className="stat-item glass-card">
            <MousePointer2 size={32} color="var(--accent-color)" />
            <h3>4.2%</h3>
            <p>Avg. Click-through Rate</p>
          </div>
        </div>
      </section>

      <section className="pricing-section container">
        <h2 className="section-title text-center">Advertising Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card glass-card ${plan.recommended ? 'recommended' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {plan.recommended && <div className="recommended-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map(f => (
                  <li key={f}><CheckCircle2 size={16} /> {f}</li>
                ))}
              </ul>
              <button className={`btn-${plan.recommended ? 'primary' : 'secondary'} w-full`}>Get Started</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact-banner container">
        <div className="glass-card contact-wrapper">
          <div className="contact-info">
            <h2>Need a Custom Solution?</h2>
            <p>Our advertising experts are ready to help you build a campaign that works for your unique goals.</p>
            <button className="btn-primary"><MessageSquare size={18} /> Contact Sales Team</button>
          </div>
          <div className="contact-illustration">
            <Rocket size={120} className="float-animation" />
          </div>
        </div>
      </section>
    </div>
  );
}
