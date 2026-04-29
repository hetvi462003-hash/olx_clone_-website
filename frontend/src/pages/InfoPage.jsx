import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, Briefcase, Handshake, ShieldAlert, 
  FileCheck, Lock, CheckSquare, HelpCircle, 
  MessageSquare, Flag, HeadphonesIcon 
} from 'lucide-react';
import './InfoPage.css';

const sidebarLinks = [
  { id: 'about-us', label: 'About Us', icon: <Building size={18} /> },
  { id: 'advertise-with-us', label: 'Advertise with us', icon: <Building size={18} /> },
  { id: 'careers', label: 'Careers', icon: <Briefcase size={18} /> },
  { id: 'partners', label: 'Partners', icon: <Handshake size={18} /> },
  { id: 'safety-tips', label: 'Safety Tips / Scams', icon: <ShieldAlert size={18} /> },
  { id: 'posting-policy', label: 'Posting Policy', icon: <FileCheck size={18} /> },
  { id: 'privacy-policy', label: 'Privacy Policy', icon: <Lock size={18} /> },
  { id: 'terms-conditions', label: 'Terms & Conditions', icon: <CheckSquare size={18} /> },
  { id: 'general-questions', label: 'General Questions', icon: <HelpCircle size={18} /> },
  { id: 'feedback', label: 'Feedback', icon: <MessageSquare size={18} /> },
  { id: 'report-ad', label: 'Report Ad', icon: <Flag size={18} /> },
  { id: 'support', label: 'Support', icon: <HeadphonesIcon size={18} /> },
];

const pageContents = {
  'about-us': {
    title: 'About Us',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Learn more about the team behind the Cayman Islands’ premier marketplace.',
    content: ['Welcome to eCayTrade+. We are the premier online classifieds for the Cayman Islands. Our mission is to provide a seamless, secure, and premium marketplace for buying, selling, and trading within our connected community.', 'Evolved from the original eCayTrade, this new platform offers modern features, real-time advanced search, and a blazing fast experience. Whether you are looking for a new car, a dream home, or simply want to declutter, we make it easy.']
  },
  'advertise-with-us': {
    title: 'Advertise with us',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Grow your business by reaching thousands everyday.',
    content: ['Reach thousands of daily visitors across the Cayman Islands.', 'From banner placements to priority listings, we offer tailored advertising solutions to help grow your business. Contact our sales team at sales@ecaytradeplus.ky to discuss how we can feature your brand on our homepage and category sections.']
  },
  'careers': {
    title: 'Careers',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'We are hiring! Join our rapidly growing team.',
    content: ['Join the team building the future of classifieds in the Cayman Islands.', 'We are constantly looking for talented software engineers, marketing specialists, and customer support representatives. We offer competitive salaries, flexible working hours, and health benefits.', 'Send your resume to hr@ecaytradeplus.ky.']
  },
  'partners': {
    title: 'Partners',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Collaborate with the biggest network in the islands.',
    content: ['We collaborate with local businesses, real estate agencies, and car dealerships to bring the best inventory to our users.', 'Become a partner and unlock bulk listing features, API access, and a dedicated Account Manager to streamline your sales.']
  },
  'safety-tips': {
    title: 'Safety Tips / Scams',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Stay safe while trading online.',
    content: ['Your safety is our top priority.', '1. Always meet in a public, well-lit place to complete transactions.', '2. Never transfer money without seeing the item first.', '3. If a deal seems too good to be true, it probably is.', '4. Report any suspicious listings directly to us. We actively ban fraudulent accounts.']
  },
  'posting-policy': {
    title: 'Posting Policy',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'What you can and cannot post.',
    content: ['All listings must adhere to our community guidelines.', 'Duplicate postings, illegal items (such as restricted wildlife or unregistered firearms), and misleading descriptions are strictly prohibited and will be removed.', 'Repeat offenders will face permanent IP bans from the platform.']
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'How we manage and protect your data.',
    content: ['We respect your data.', 'Your personal information is securely encrypted and stored. We never sell your data to third-party ad networks without your explicit consent.', 'Read our full data handling procedures to learn more about our cookie policies and tracker usage.']
  },
  'terms-conditions': {
    title: 'Terms & Conditions',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'The legal agreement for using eCayTrade+.',
    content: ['By using eCayTrade+, you agree to our terms of service.', 'You are responsible for the accuracy of your listings and any interactions with other users. eCayTrade+ assumes no liability for disputes arising from offline transactions.', 'We reserve the right to modify these terms at any time.']
  },
  'general-questions': {
    title: 'General Questions',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Answers to the most common queries.',
    content: ['Have a question? Check our FAQ section or drop us a message.', 'Can I edit my ad after posting? Yes, simply go to your dashboard.', 'How long do ads stay active? Default ads stay active for 30 days.', 'We are here to help you navigate your buying and selling journey.']
  },
  'feedback': {
    title: 'Feedback',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'We value your opinion.',
    content: ['We are constantly looking to improve eCayTrade+.', 'If you have suggestions for new features, design tweaks, or found a bug, let us know! We read every submission. Send your feedback through our contact form and help us build a better marketplace.']
  },
  'report-ad': {
    title: 'Report Ad',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Help us keep the platform clean.',
    content: ['If you spot an ad that violates our policies or appears fraudulent, please use the "Report" button directly on the ad page.', 'Alternatively, you can email trust@ecaytradeplus.ky with the Ad ID and screenshots. Our moderation team reviews reports within 2 hours.']
  },
  'support': {
    title: 'Support',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1200',
    subtitle: 'Get help from our dedicated team.',
    content: ['Facing technical issues? Our support team is available Monday to Friday from 9 AM to 5 PM EST.', 'Open a ticket via your user dashboard and we will get back to you within 24 hours. For urgent matters, call our helpline at +1 (345) 555-0199.']
  }
};

export default function InfoPage() {
  const { pageId } = useParams();
  const location = useLocation();
  const pageData = pageContents[pageId] || {
    title: 'Page Not Found',
    subtitle: 'Error 404',
    content: ['The page you are looking for does not exist or has been moved.']
  };

  return (
    <div className="info-page container">
      <div className="info-layout">
        {/* Main Content Area */}
        <motion.main 
          className="info-main-content glass-card"
          key={pageId} // Forces re-animation when page changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="content-header">
            {pageData.image && (
              <motion.div 
                className="content-banner"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img src={pageData.image} alt={pageData.title} />
              </motion.div>
            )}
            <h1 className="content-title">{pageData.title}</h1>
            <p className="content-subtitle">{pageData.subtitle}</p>
          </div>
          
          <div className="content-body">
            {pageData.content.map((paragraph, idx) => (
              <motion.p 
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="content-footer">
            <p>Last updated: October 2026</p>
          </div>
        </motion.main>
      </div>
    </div>
  );
}
