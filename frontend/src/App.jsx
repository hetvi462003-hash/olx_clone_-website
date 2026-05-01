import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import AboutUs from './pages/AboutUs';
import Advertise from './pages/Advertise';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Safety from './pages/Safety';
import Support from './pages/Support';
import LegalPage from './pages/LegalPage';
import ReportAd from './pages/ReportAd';
import Feedback from './pages/Feedback';
import PostAd from './pages/PostAd';
import CategoryPage from './pages/CategoryPage';
import InfoPage from './pages/InfoPage';
import AdDetailPage from './pages/AdDetailPage';
import SellerProfilePage from './pages/SellerProfilePage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/advertise" element={<Advertise />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms-conditions" element={<LegalPage />} />
          <Route path="/posting-policy" element={<LegalPage />} />
          <Route path="/report-ad" element={<ReportAd />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/ad/:id" element={<AdDetailPage />} />
          <Route path="/seller/:name" element={<SellerProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/page/:pageId" element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
