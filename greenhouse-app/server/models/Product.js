const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
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
<<<<<<< HEAD
    ref: 'Category',
    required: true
  },
  faqs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'FAQ',
    },
  ],
=======
    ref: "Category",
    required: true,
  },
>>>>>>> 607ee1ea3730977c0bbfdf3f3c75f18102582601
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
