const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],           // array of file paths / URLs
  features: { type: Object, default: {} },
  seller: {
    name:        { type: String, default: 'Anonymous Seller' },
    phone:       { type: String, default: 'Not provided' },
    memberSince: { type: String, default: 'New member' },
  },
  posted: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Ad', AdSchema);
