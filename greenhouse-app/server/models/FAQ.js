<<<<<<< Updated upstream
const mongoose = require('mongoose');

=======
const mongoose = require(‘mongoose’);
>>>>>>> Stashed changes
const faqSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
<<<<<<< Updated upstream
    type: {
=======
    common_name: {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
=======
const FAQ = mongoose.model(‘FAQ’, faqSchema);
module.exports = FAQ;
>>>>>>> Stashed changes
