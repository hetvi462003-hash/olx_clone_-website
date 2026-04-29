const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Ad = require('../models/Ad');

// ── Multer config (store in uploads/) ──────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },            // 10 MB per image
  fileFilter: (req, file, cb) => {
    const ok = /jpeg|jpg|png|webp|gif/.test(file.mimetype);
    ok ? cb(null, true) : cb(new Error('Only image files allowed'));
  },
});

// ── GET /api/ads  (all ads, optional ?category=real-estate) ────────
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      // "real-estate" → "Real Estate"
      const label = req.query.category
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      filter.category = label;
    }
    const ads = await Ad.find(filter).sort({ createdAt: -1 });
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── GET /api/ads/:id  (single ad) ─────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: 'Ad not found' });
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── POST /api/ads  (create ad + upload images) ─────────────────────
router.post('/', upload.array('images', 10), async (req, res) => {
  try {
    const { title, category, price, location, description, sellerName, sellerPhone } = req.body;

    // Build image URL list from uploaded files
    const imageUrls = req.files
      ? req.files.map(f => `/uploads/${f.filename}`)
      : [];

    const ad = new Ad({
      title,
      category,
      price,
      location,
      description,
      images: imageUrls,
      seller: {
        name: sellerName || 'Anonymous Seller',
        phone: sellerPhone || 'Not provided',
        memberSince: `Member since ${new Date().getFullYear()}`,
      },
    });

    const saved = await ad.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ── POST /api/ads/seed  (JSON body, no file upload – for seeding) ──
router.post('/seed', async (req, res) => {
  try {
    const ad = new Ad(req.body);
    const saved = await ad.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ── DELETE /api/ads/:id ────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    await Ad.findByIdAndDelete(req.params.id);
    res.json({ message: 'Ad deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
