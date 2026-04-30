import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Shield, Scale, FileText, Search, ChevronRight, Clock } from 'lucide-react';
import { useState, useMemo } from 'react';
import './LegalPage.css';

const policyData = {
  'privacy-policy': {
    title: 'Privacy Policy',
    icon: <Shield size={32} />,
    lastUpdated: 'April 2026',
    sections: [
      { id: 'data-collection', title: 'Data We Collect', content: 'We collect information you provide directly to us when you create an account, post a listing, or communicate with other users. This includes your name, email, phone number, and any media you upload.' },
      { id: 'usage', title: 'How We Use Data', content: 'We use your data to provide, maintain, and improve our services, to process transactions, and to send you technical notices, updates, and support messages.' },
      { id: 'sharing', title: 'Data Sharing', content: 'We do not share your personal data with third parties except as required by law or to provide services you have requested (e.g., displaying your contact info on a listing).' },
      { id: 'security', title: 'Security Measures', content: 'We employ industry-standard encryption and security protocols to protect your data from unauthorized access or disclosure.' }
    ]
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    icon: <Scale size={32} />,
    lastUpdated: 'April 2026',
    sections: [
      { id: 'acceptance', title: 'Acceptance of Terms', content: 'By accessing or using eCayTrade+, you agree to be bound by these terms. If you do not agree, please do not use our services.' },
      { id: 'user-conduct', title: 'User Conduct', content: 'Users are responsible for their own content and must not post illegal, fraudulent, or offensive material. We reserve the right to remove any content at our discretion.' },
      { id: 'liability', title: 'Limitation of Liability', content: 'eCayTrade+ is a marketplace platform. We are not responsible for the quality, safety, or legality of the items advertised or the truth or accuracy of the listings.' },
      { id: 'termination', title: 'Account Termination', content: 'We may terminate or suspend your account at any time, without prior notice, for conduct that we believe violates these Terms.' }
    ]
  },
  'posting-policy': {
    title: 'Posting Policy',
    icon: <FileText size={32} />,
    lastUpdated: 'April 2026',
    sections: [
      { id: 'prohibited', title: 'Prohibited Items', content: 'We strictly prohibit the sale of weapons, illegal drugs, stolen property, and counterfeit goods. Listings for these items will be removed immediately.' },
      { id: 'duplicate', title: 'Duplicate Listings', content: 'Please do not post the same ad multiple times. Duplicate listings clutter the marketplace and will be deleted.' },
      { id: 'images', title: 'Image Guidelines', content: 'Photos must be of the actual item for sale. Stock photos or misleading images are not allowed and may result in ad removal.' },
      { id: 'accuracy', title: 'Accurate Information', content: 'All price, location, and condition information must be accurate. Misleading potential buyers is grounds for account suspension.' }
    ]
  }
};

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname.split('/').pop();
  const data = policyData[path] || policyData['privacy-policy'];
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = useMemo(() => {
    if (!searchQuery) return data.sections;
    return data.sections.filter(s => 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  return (
    <div className="legal-page container">
      <div className="legal-layout">
        {/* Sidebar Nav */}
        <aside className="legal-sidebar">
          <motion.div 
            className="sidebar-card glass-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sidebar-header">
              {data.icon}
              <h3>{data.title}</h3>
            </div>
            <nav className="section-nav">
              {data.sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="nav-item">
                  <ChevronRight size={14} /> {s.title}
                </a>
              ))}
            </nav>
          </motion.div>
        </aside>

        {/* Main Content */}
        <main className="legal-content">
          <motion.div 
            className="content-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="meta-badge">
              <Clock size={14} /> Last Updated: {data.lastUpdated}
            </div>
            <h1>{data.title}</h1>
            <div className="legal-search glass-card">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search within policy..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <div className="policy-sections">
            {filteredSections.map((section, i) => (
              <motion.section 
                key={section.id} 
                id={section.id}
                className="policy-card glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
              >
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </motion.section>
            ))}
            {filteredSections.length === 0 && (
              <div className="no-results glass-card">
                <Search size={48} opacity={0.2} />
                <p>No sections found matching your search.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
