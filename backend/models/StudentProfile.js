const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  studentId: { type:String, required: true },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  portfolioUrl: { type: String },
  resumeUrl: { type: String },
  skills: [
    {
      skillName: { type: String, required: true },
      imageUrl: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
