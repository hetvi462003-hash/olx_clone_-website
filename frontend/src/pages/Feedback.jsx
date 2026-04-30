import { motion } from 'framer-motion';
import { Heart, Star, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import './Feedback.css';

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="feedback-success container">
        <motion.div 
          className="glass-card success-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Heart size={80} color="#ef4444" fill="#ef4444" />
          <h1>You're the Best!</h1>
          <p>Thank you for your feedback. We read every message and use it to build a better eCayTrade+ for the entire Cayman community.</p>
          <button className="btn-primary" onClick={() => setSubmitted(false)}>Back to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="feedback-page container">
      <section className="feedback-hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Share Your <span>Experience</span></h1>
          <p>Your feedback helps us grow. Tell us what you love, and what we can do better.</p>
        </motion.div>
      </section>

      <motion.div 
        className="feedback-form-wrapper glass-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="premium-form">
          <div className="rating-section">
            <h3>How would you rate eCayTrade+?</h3>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setRating(star)}
                >
                  <Star 
                    size={40} 
                    color={star <= rating ? "#f59e0b" : "#cbd5e1"} 
                    fill={star <= rating ? "#f59e0b" : "transparent"} 
                  />
                </motion.button>
              ))}
            </div>
            <p>{rating > 0 ? `You gave us ${rating} stars!` : "Select a rating"}</p>
          </div>

          <div className="input-group">
            <label>What do you like most about the platform?</label>
            <input type="text" placeholder="e.g. The design, the speed, the community..." />
          </div>

          <div className="input-group">
            <label>What can we improve?</label>
            <textarea placeholder="Tell us your thoughts..." required></textarea>
          </div>

          <div className="form-footer">
            <div className="footer-note">
              <MessageSquare size={16} color="var(--primary-color)" />
              <span>We value your honest opinion.</span>
            </div>
            <button type="submit" className="btn-primary">
              Submit Feedback <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
