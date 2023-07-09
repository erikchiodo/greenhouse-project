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
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
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
    trim: true,
  },
  productDetails: {
    type: String,
    required: true,
    trim: true,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;