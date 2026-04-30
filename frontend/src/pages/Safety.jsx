import { motion } from 'framer-motion';
import { ShieldAlert, Eye, Lock, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import './Safety.css';

const safetyTips = [
  {
    title: "Meet in Public",
    desc: "Always arrange to meet the buyer or seller in a well-lit, public place like a coffee shop or a police station parking lot.",
    icon: <ShieldCheck size={32} color="#10b981" />
  },
  {
    title: "Avoid Prepayments",
    desc: "Never send money via wire transfer or digital apps before seeing the item in person. Transactions should happen at the time of exchange.",
    icon: <Lock size={32} color="#3b82f6" />
  },
  {
    title: "Inspect the Item",
    desc: "Thoroughly check the condition of the item before making payment. For electronics, test them to ensure they work as described.",
    icon: <Eye size={32} color="#f59e0b" />
  },
  {
    title: "Trust Your Gut",
    desc: "If a deal seems too good to be true, it probably is. Don't feel pressured to complete a transaction if something feels off.",
    icon: <AlertTriangle size={32} color="#ef4444" />
  }
];

export default function Safety() {
  return (
    <div className="safety-page">
      <section className="safety-hero container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="safety-badge">
            <ShieldAlert size={18} /> Safety First
          </div>
          <h1>Your Safety is Our <br/><span>Top Priority</span></h1>
          <p>We work round the clock to keep eCayTrade+ a safe place for everyone. Follow these simple guidelines to trade with confidence.</p>
        </motion.div>
      </section>

      <section className="tips-grid container">
        {safetyTips.map((tip, i) => (
          <motion.div 
            key={tip.title}
            className="tip-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="tip-icon">{tip.icon}</div>
            <h3>{tip.title}</h3>
            <p>{tip.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="report-section container">
        <div className="glass-card report-wrapper">
          <div className="report-text">
            <h2>See something suspicious?</h2>
            <p>If you encounter a suspicious listing or a fraudulent user, report it to our trust and safety team immediately.</p>
            <button className="btn-primary">Report a Scam <ArrowRight size={18} /></button>
          </div>
          <div className="report-illustration">
            <div className="shield-ring ring-1"></div>
            <div className="shield-ring ring-2"></div>
            <ShieldAlert size={100} color="var(--primary-color)" />
          </div>
        </div>
      </section>

      <section className="scam-alerts container">
        <h2 className="section-title">Common Scam Alerts</h2>
        <div className="alerts-list">
          <div className="alert-item glass-card">
            <div className="alert-header">
              <CheckCircle size={20} color="#10b981" />
              <h4>Overpayment Scams</h4>
            </div>
            <p>A buyer sends you a check for more than the item's price and asks you to wire back the difference. The check will eventually bounce.</p>
          </div>
          <div className="alert-item glass-card">
            <div className="alert-header">
              <CheckCircle size={20} color="#10b981" />
              <h4>Fake Shipping Services</h4>
            </div>
            <p>The seller claims they will use a specific shipping company to protect your money. These sites are often fake clones of real companies.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
