const mongoose = require('mongoose');
 
// Creating custom url link to mongodb instance
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/greenhouse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;