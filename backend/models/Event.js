const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  speaker: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
