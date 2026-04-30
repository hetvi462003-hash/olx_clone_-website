import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, HelpCircle, Send, ArrowRight } from 'lucide-react';
import './Support.css';

const faqs = [
  {
    q: "How do I post a featured ad?",
    a: "You can post a featured ad by selecting the 'Featured' option during the post-ad process or by upgrading an existing ad from your dashboard."
  },
  {
    q: "Is eCayTrade+ free to use?",
    a: "Yes! Browsing and posting standard ads is completely free. We only charge for premium features like featured placements and business verified profiles."
  },
  {
    q: "How do I report a suspicious user?",
    a: "Every ad has a 'Report' button. You can also contact our support team directly via the contact form on this page."
  },
  {
    q: "Can I sell cars and real estate?",
    a: "Absolutely. We have dedicated categories for Autos and Real Estate with specialized listing tools for each."
  }
];

export default function Support() {
  return (
    <div className="support-page">
      <section className="support-hero container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>How can we <br/><span>Help You?</span></h1>
          <p>Whether you have a question about our features, pricing, or anything else, our team is ready to answer all your questions.</p>
        </motion.div>
      </section>

      <section className="contact-methods container">
        <div className="grid">
          <div className="method-card glass-card">
            <Mail size={32} color="var(--primary-color)" />
            <h3>Email Us</h3>
            <p>support@ecaytrade.ky</p>
            <span>Response within 24 hours</span>
          </div>
          <div className="method-card glass-card">
            <Phone size={32} color="var(--secondary-color)" />
            <h3>Call Us</h3>
            <p>+1 (345) 555-0123</p>
            <span>Mon-Fri, 9am - 6pm</span>
          </div>
          <div className="method-card glass-card">
            <MessageSquare size={32} color="var(--accent-color)" />
            <h3>Live Chat</h3>
            <p>Available on Dashboard</p>
            <span>Instant Response</span>
          </div>
        </div>
      </section>

      <section className="support-content container">
        <div className="support-grid">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Send us a Message</h2>
            <form className="premium-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="input-group">
                <label>Subject</label>
                <select>
                  <option>General Question</option>
                  <option>Technical Support</option>
                  <option>Billing Inquiry</option>
                  <option>Report an Issue</option>
                </select>
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea placeholder="How can we help you today?"></textarea>
              </div>
              <button type="button" className="btn-primary">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="faq-wrapper">
            <div className="section-header-mini">
              <HelpCircle size={24} color="var(--primary-color)" />
              <h2>Frequent Questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  className="faq-item glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="help-hub-cta">
              <p>Can't find what you're looking for?</p>
              <Link to="/page/help-center" className="link-with-arrow">
                Visit Knowledge Base <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper Link for internal use (if needed)
function Link({ children, to, className }) {
  return <a href={to} className={className}>{children}</a>;
}
