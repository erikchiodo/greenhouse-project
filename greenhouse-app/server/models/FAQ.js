// FAQ.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  common_name: {
    type: String,
    required: true,
    trim: true
  },

  section: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Section'
    }
  ]
}, {});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
