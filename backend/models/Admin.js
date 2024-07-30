const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const adminSchema = new mongoose.Schema({
  adminPassKey: { type: String },
});

module.exports = BaseUser.discriminator('admin', adminSchema);
