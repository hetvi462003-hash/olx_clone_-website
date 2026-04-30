import { useState } from 'react';
import API from '../apiConfig';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import './PostAd.css';

// Removed hardcoded API, now using imported config

export default function PostAd() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const isJobPosting = type === 'job-posting';
  const isJobAdvert  = type === 'job-advert';
  const isJobFlow    = isJobPosting || isJobAdvert;

  const [formData, setFormData] = useState({
    title: '',
    category: isJobFlow ? 'Jobs' : '',
    price: '',
    location: '',
    description: '',
    company: '',
    experience: '',
    sellerName: '',
    sellerPhone: '',
  });

  const [images, setImages] = useState([]);        // File objects
  const [previews, setPreviews] = useState([]);    // Preview URLs
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 10) {
      setError('Maximum 10 images allowed.');
      return;
    }
    setImages(prev => [...prev, ...files]);
    const urls = files.map(f => URL.createObjectURL(f));
    setPreviews(prev => [...prev, ...urls]);
    setError('');
  };

  const removeImage = (idx) => {
    setImages(prev => prev.filter((_, i) => i !== idx));
    setPreviews(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', formData.category);
      data.append('price', formData.price || 'Price Upon Request');
      data.append('location', formData.location);
      data.append('description', formData.description);
      data.append('sellerName', formData.sellerName);
      data.append('sellerPhone', formData.sellerPhone);
      if (formData.company)    data.append('company', formData.company);
      if (formData.experience) data.append('experience', formData.experience);

      images.forEach(img => data.append('images', img));

      const res = await fetch(`${API}/api/ads`, {
        method: 'POST',
        body: data,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to post ad');
      }

      const saved = await res.json();
      setSubmitted(true);
      setTimeout(() => navigate(`/ad/${saved._id}`), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const getTitle = () => {
    if (isJobPosting) return 'Create a Job Posting';
    if (isJobAdvert)  return 'Create a Job Advert';
    return 'Post a New Ad';
  };
  const getSubtitle = () => {
    if (isJobPosting) return 'Find the best talent for your company.';
    if (isJobAdvert)  return 'Showcase your skills to potential employers.';
    return 'Fill in the details below to list your item on eCayTrade+.';
  };

  if (submitted) {
    return (
      <motion.div className="post-ad-page container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="post-ad-container glass-card success-container">
          <div className="success-icon-big">🎉</div>
          <h2>Ad Published Successfully!</h2>
          <p>Redirecting you to your listing…</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="post-ad-page container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="post-ad-container glass-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: 'spring', bounce: 0.4 }}
      >
        <h2 className="section-title">{getTitle()}</h2>
        <p className="post-ad-subtitle">{getSubtitle()}</p>

        <form onSubmit={handleSubmit} className="post-ad-form">

          {/* ── Title ── */}
          <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <label htmlFor="title">
              {isJobPosting ? 'Job Title' : isJobAdvert ? 'Profile Headline / Title' : 'Ad Title'}
            </label>
            <input
              type="text" id="title" name="title"
              placeholder={isJobPosting ? 'e.g. Senior Software Engineer' : isJobAdvert ? 'e.g. Professional Accountant with 5yr Experience' : 'e.g. iPhone 14 Pro Max 256GB'}
              value={formData.title} onChange={handleChange} required
            />
          </motion.div>

          {/* ── Category + Price ── */}
          <div className="form-row">
            <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <label htmlFor="category">Category</label>
              <select name="category" id="category" value={formData.category} onChange={handleChange} required disabled={isJobFlow}>
                <option value="">Select a category</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Autos & Boats">Autos & Boats</option>
                <option value="Buy & Sell">Buy & Sell</option>
                <option value="Jobs">Jobs</option>
                <option value="Services & Specials">Services & Specials</option>
                <option value="Community">Community</option>
              </select>
            </motion.div>

            <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <label htmlFor="price">{isJobFlow ? 'Expected Salary (CI$)' : 'Price (CI$)'}</label>
              <input type="text" id="price" name="price" placeholder="e.g. 1500 or Price Upon Request" value={formData.price} onChange={handleChange} />
            </motion.div>
          </div>

          {/* ── Location + Company/Experience ── */}
          <div className="form-row">
            <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <label htmlFor="location">Location / Island</label>
              <select name="location" id="location" value={formData.location} onChange={handleChange} required>
                <option value="">Select Location</option>
                <option value="Grand Cayman">Grand Cayman</option>
                <option value="Cayman Brac">Cayman Brac</option>
                <option value="Little Cayman">Little Cayman</option>
                <option value="All Islands">All Islands</option>
              </select>
            </motion.div>

            {isJobPosting && (
              <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" placeholder="e.g. Tech Solutions Ltd" value={formData.company} onChange={handleChange} required />
              </motion.div>
            )}
            {isJobAdvert && (
              <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
                <label htmlFor="experience">Years of Experience</label>
                <input type="number" id="experience" name="experience" placeholder="e.g. 5" value={formData.experience} onChange={handleChange} required />
              </motion.div>
            )}
          </div>

          {/* ── Description ── */}
          <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
            <label htmlFor="description">
              {isJobPosting ? 'Job Requirements & Description' : isJobAdvert ? 'Your Professional Summary' : 'Description'}
            </label>
            <textarea name="description" id="description" rows="5" placeholder="Provide more details here..." value={formData.description} onChange={handleChange} required />
          </motion.div>

          {/* ── Seller Info ── */}
          <div className="form-row">
            <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75 }}>
              <label htmlFor="sellerName">Your Name</label>
              <input type="text" id="sellerName" name="sellerName" placeholder="e.g. John Smith" value={formData.sellerName} onChange={handleChange} required />
            </motion.div>
            <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.78 }}>
              <label htmlFor="sellerPhone">Phone Number</label>
              <input type="tel" id="sellerPhone" name="sellerPhone" placeholder="e.g. +1 (345) 555-0000" value={formData.sellerPhone} onChange={handleChange} required />
            </motion.div>
          </div>

          {/* ── Image Upload ── */}
          <motion.div className="form-group" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.82 }}>
            <label>Photos <span className="label-hint">(up to 10 images)</span></label>

            <label htmlFor="images" className="image-upload-zone">
              <div className="upload-icon">📷</div>
              <div className="upload-text">Click to upload photos</div>
              <div className="upload-hint">JPG, PNG, WEBP • Max 10MB each</div>
              <input
                type="file" id="images" accept="image/*" multiple
                onChange={handleImages} style={{ display: 'none' }}
              />
            </label>

            {previews.length > 0 && (
              <div className="image-previews">
                <AnimatePresence>
                  {previews.map((url, idx) => (
                    <motion.div
                      key={url} className="preview-thumb"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <img src={url} alt={`preview ${idx + 1}`} />
                      <button type="button" className="remove-img-btn" onClick={() => removeImage(idx)}>✕</button>
                      {idx === 0 && <span className="main-img-label">Main</span>}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>

          {/* ── Error message ── */}
          {error && (
            <motion.div className="form-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              ⚠️ {error}
            </motion.div>
          )}

          {/* ── Submit ── */}
          <motion.div className="form-submit" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
            <motion.button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
            >
              {submitting ? '⏳ Publishing…' : isJobFlow ? 'Publish Job Listing' : 'Publish Ad'}
            </motion.button>
          </motion.div>

        </form>
      </motion.div>
    </motion.div>
  );
}
