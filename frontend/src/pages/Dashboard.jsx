import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Dashboard.css';

const myRequests = [
  { id: 1, title: 'Harmony 7 - End Unit', type: 'Viewing', date: '2026-05-02', time: '10:30 AM', status: 'Approved', seller: 'Bock Property Ltd' },
  { id: 2, title: 'Senior Software Engineer', type: 'Interview', date: '2026-05-05', time: '02:00 PM', status: 'Pending', seller: 'Tech Solutions Ltd' },
];

const savedAds = [
  { id: 3, title: 'Modern Studio in West Bay', price: 'CI$ 1,800/mo', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: '2022 Tesla Model 3', price: 'CI$ 45,000', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=400' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('requests');

  return (
    <motion.div 
      className="dashboard-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="dashboard-header">
        <div className="user-profile-summary">
          <div className="user-avatar-main">JD</div>
          <div className="user-text">
            <h1>Welcome back, John!</h1>
            <p>Manage your bookings, messages, and saved items.</p>
          </div>
        </div>
        <div className="dashboard-quick-stats">
          <div className="dash-stat-box">
            <span className="stat-num">{myRequests.length}</span>
            <span className="stat-label">Requests</span>
          </div>
          <div className="dash-stat-box">
            <span className="stat-num">{savedAds.length}</span>
            <span className="stat-label">Saved</span>
          </div>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'requests' ? 'active' : ''} 
          onClick={() => setActiveTab('requests')}
        >
          My Requests
        </button>
        <button 
          className={activeTab === 'saved' ? 'active' : ''} 
          onClick={() => setActiveTab('saved')}
        >
          Saved Items
        </button>
        <button 
          className={activeTab === 'settings' ? 'active' : ''} 
          onClick={() => setActiveTab('settings')}
        >
          Account Settings
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'requests' && (
          <motion.div className="requests-list" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {myRequests.map((req) => (
              <div key={req.id} className="request-card glass-card">
                <div className="req-icon">{req.type === 'Interview' ? '🤝' : '🏠'}</div>
                <div className="req-details">
                  <h3>{req.title}</h3>
                  <p><strong>Type:</strong> {req.type} with {req.seller}</p>
                  <p><strong>Schedule:</strong> {req.date} at {req.time}</p>
                </div>
                <div className="req-status-box">
                  <span className={`status-badge ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>
                  {req.status === 'Approved' && <p className="status-note">Please check your email for details.</p>}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'saved' && (
          <motion.div className="ads-grid" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            {savedAds.map((ad) => (
              <div key={ad.id} className="ad-card glass-card">
                <div className="ad-image">
                  <img src={ad.image} alt={ad.title} />
                  <button className="remove-saved">✕</button>
                </div>
                <div className="ad-details">
                  <h3>{ad.title}</h3>
                  <p className="ad-price">{ad.price}</p>
                  <Link to={`/ad/${ad.id}`} className="btn-view-dash">View Ad</Link>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-placeholder glass-card">
            <h3>Profile Settings</h3>
            <p>Update your email, phone number, and password here.</p>
            <button className="btn-blue-solid" style={{marginTop: '1.5rem'}}>Update Profile</button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
