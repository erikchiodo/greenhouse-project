const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
