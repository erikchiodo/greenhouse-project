const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  plantName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  productDetails: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;