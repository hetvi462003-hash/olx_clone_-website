import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('requests');

  // Initialize empty data for new users
  const myRequests = [];
  const savedAds = [];

  if (loading) return <div className="loading-screen">Loading dashboard...</div>;
  if (!user) return <div className="loading-screen">Please login to view your dashboard.</div>;

  return (
    <motion.div 
      className="dashboard-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="dashboard-header">
        <div className="user-profile-summary">
          <div className="user-avatar-main">{user.name.charAt(0)}</div>
          <div className="user-text">
            <h1>Welcome back, {user.name.split(' ')[0]}!</h1>
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
