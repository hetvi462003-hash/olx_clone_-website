import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostAd from './pages/PostAd';
import CategoryPage from './pages/CategoryPage';
import InfoPage from './pages/InfoPage';
import AdDetailPage from './pages/AdDetailPage';
import SellerProfilePage from './pages/SellerProfilePage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/ad/:id" element={<AdDetailPage />} />
          <Route path="/seller/:name" element={<SellerProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/page/:pageId" element={<InfoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
