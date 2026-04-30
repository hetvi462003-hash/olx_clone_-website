import { motion } from 'framer-motion';
import { ShieldAlert, AlertCircle, FileText, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import './ReportAd.css';

export default function ReportAd() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="report-success container">
        <motion.div 
          className="glass-card success-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <CheckCircle2 size={80} color="#10b981" />
          <h1>Report Submitted</h1>
          <p>Thank you for helping us keep eCayTrade+ safe. Our trust and safety team will review your report within 24 hours.</p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another Report</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="report-page container">
      <section className="report-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="alert-badge"><ShieldAlert size={18} /> Safety Concern</div>
          <h1>Report a Listing</h1>
          <p>Is something not right? Help us by providing details about the listing or user you're concerned about.</p>
        </motion.div>
      </section>

      <motion.div 
        className="report-form-wrapper glass-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="premium-form">
          <div className="form-section">
            <div className="section-title-mini">
              <AlertCircle size={20} color="var(--primary-color)" />
              <h3>Listing Details</h3>
            </div>
            <div className="input-group">
              <label>Listing URL or ID</label>
              <input type="text" placeholder="e.g. ecaytrade.ky/ad/12345" required />
            </div>
            <div className="input-group">
              <label>Reason for Reporting</label>
              <select required>
                <option value="">Select a reason</option>
                <option>Prohibited Item</option>
                <option>Fraud / Scam</option>
                <option>Duplicate Listing</option>
                <option>Inaccurate Details</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <div className="section-title-mini">
              <FileText size={20} color="var(--primary-color)" />
              <h3>Additional Information</h3>
            </div>
            <div className="input-group">
              <label>Details</label>
              <textarea placeholder="Please describe the issue in detail..." required></textarea>
            </div>
            <div className="input-group">
              <label>Your Email (Optional)</label>
              <input type="email" placeholder="For follow-up questions" />
            </div>
          </div>

          <div className="form-footer">
            <p><ShieldAlert size={14} /> This report will be handled confidentially.</p>
            <button type="submit" className="btn-primary">
              Submit Report <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
