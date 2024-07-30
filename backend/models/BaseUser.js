const mongoose = require('mongoose');

const baseUserSchema = new mongoose.Schema({
  role: { type: String, enum: ['student', 'admin'], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
}, { discriminatorKey: 'role', timestamps: true });

module.exports = mongoose.model('BaseUser', baseUserSchema);
