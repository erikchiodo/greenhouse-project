const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  plantStatus: {
    type: String,
    enum: ["SOLD", "NOT_SOLD"],
    default: "NOT_SOLD",
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
