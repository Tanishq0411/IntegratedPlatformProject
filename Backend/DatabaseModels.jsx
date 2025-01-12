const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Validates email format
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);

module.exports = User;
