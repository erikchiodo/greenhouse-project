const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: String,
  },
  status: {
    type: String,
  },
  total: {
    type: String,
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
