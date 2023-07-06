const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  // Create Plant Status Schema (new model)
  // Use separate schema is there's a defined list of values (will we use pre-defined categories?). If so have separate category schema
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
