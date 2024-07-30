const mongoose = require('mongoose');

const branchStatSchema = new mongoose.Schema({
  branchName: { type: String ,required:false},
  studentsEligible: { type: Number, required: false },
  offersMade: { type: Number, required: false },
  studentsPlaced: { type: Number, required: false },
});

const placementStatSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  branches: [branchStatSchema],
});

module.exports = mongoose.model('PlacementStat', placementStatSchema);
