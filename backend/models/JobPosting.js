const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema({
  jobRole: { type: String, required: true },
  companyName: { type: String, required: true },
  jobDescription: { type: String, required: true },
  skillsRequired: { type: [String], required: true },
  ctcOffered: { type: String, required: true },
  jobLocation: { type: String, required: true },
  eligibleBranches: { type: [String], required: true },
  eligibilityCriteria: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobPosting', JobPostingSchema);
