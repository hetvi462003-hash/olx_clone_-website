import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import './Assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-assistant">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="assistant-chat glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
          >
            <div className="chat-header">
              <div className="bot-info">
                <div className="bot-avatar">🤖</div>
                <div>
                  <h4>CayAssistant</h4>
                  <p>Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="close-chat">
                <X size={18} />
              </button>
            </div>
            
            <div className="chat-body">
              <div className="message bot">
                Hello! How can I help you today? You can ask me about posting ads or finding deals.
              </div>
            </div>

            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button className="send-btn">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        className="assistant-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default Assistant;
