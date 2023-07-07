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
    description: {
        type: String,
        required: true,
        trim: true
    }
}, {
});


const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;

