const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const studentSchema = new mongoose.Schema({
  gender: { type: String },
  scholarId: {type: String,unique: true},
  branch: { type: String },
  passingYear: { type: String },
});

module.exports = BaseUser.discriminator('student', studentSchema);
