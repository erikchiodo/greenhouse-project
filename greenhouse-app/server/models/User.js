const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');
const Post = require('./Post');

const userSchema = new Schema({
  socialTitle: {
    type: String,
    enum: ["Mr.", "Mrs."],
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  birthDate: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  shippingCity: {
    type: String,
    required: true,
  },
  shippingState: {
    type: String,
    required: true,
  },
  shippingZip: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  billingCity: {
    type: String,
    required: true,
  },
  billingState: {
    type: String,
    required: true,
  },
  billingZip: {
    type: String,
    required: true,
  },
  // Schema for Buyer purchasing plant
  orders: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  // Schema for Seller posting plant
  posts: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
