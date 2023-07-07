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

<<<<<<< HEAD
module.exports = FAQ;
=======
const FAQ = mongoose.model(‘FAQ’, faqSchema);
module.exports = FAQ;
>>>>>>> Stashed changes
=======
module.exports = FAQ;
>>>>>>> b6cc010bf3d780d14677e3c78ae6b74239a17d58
