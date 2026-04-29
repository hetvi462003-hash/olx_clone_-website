import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SellerProfilePage.css';

const sellerData = {
  'Bock Property Ltd': {
    name: 'Bock Property Ltd',
    avatar: 'B',
    memberSince: 'January 2023',
    location: 'Grand Cayman',
    rating: '4.9',
    totalAds: 12,
    verified: true,
    ads: [
      { id: 1, title: 'Harmony 7 - End Unit w/Pool View', price: 'Price Upon Request', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400', location: 'Prospect' },
      { id: 2, title: 'Modern Studio in West Bay', price: 'CI$ 1,800/mo', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400', location: 'West Bay' },
      { id: 3, title: 'Beachfront Villa - 4 Bed', price: 'CI$ 1,200,000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400', location: 'Seven Mile Beach' },
    ]
  }
};

export default function SellerProfilePage() {
  const { name } = useParams();
  const seller = sellerData[name] || sellerData['Bock Property Ltd'];
  const [isFollowing, setIsFollowing] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Profile link copied to clipboard! 📋');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="seller-profile-page container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Seller Profile</span>
      </div>

      <div className="profile-header-premium glass-card">
        <div className="profile-main-info">
          <div className="profile-avatar-large">
            {seller.avatar}
            {seller.verified && <span className="verified-badge">✓</span>}
          </div>
          <div className="profile-text-info">
            <h1>{seller.name}</h1>
            <p className="member-date">Member since {seller.memberSince} • {seller.location}</p>
            <div className="profile-stats-row">
              <div className="profile-stat"><strong>{seller.rating}</strong> Rating</div>
              <div className="profile-stat"><strong>{seller.totalAds}</strong> Active Ads</div>
              <div className="profile-stat"><strong>100%</strong> Response Rate</div>
            </div>
          </div>
        </div>
        <div className="profile-actions-header">
          <button 
            className={`btn-primary ${isFollowing ? 'btn-following' : ''}`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? '✓ Following' : 'Follow Seller'}
          </button>
          <button className="btn-secondary-outline" onClick={handleShare}>Share Profile</button>
        </div>
      </div>

      <div className="seller-listings-section">
        <div className="section-header">
          <h2>Ads by {seller.name} <span>({seller.ads.length})</span></h2>
        </div>

        <motion.div 
          className="ads-grid"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {seller.ads.map((ad) => (
            <motion.div key={ad.id} variants={itemVariants} whileHover={{ y: -10 }}>
              <Link to={`/ad/${ad.id}`} className="ad-link">
                <div className="ad-card glass-card">
                  <div className="ad-image">
                    <img src={ad.image} alt={ad.title} />
                  </div>
                  <div className="ad-details">
                    <h3>{ad.title}</h3>
                    <p className="ad-price">{ad.price}</p>
                    <p className="ad-location">📍 {ad.location}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
