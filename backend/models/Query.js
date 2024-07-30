const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  scholarId: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true },
  query: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Query', querySchema);
