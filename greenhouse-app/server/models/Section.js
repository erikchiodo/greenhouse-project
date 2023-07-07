// section.js
const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({

  type: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
});

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
