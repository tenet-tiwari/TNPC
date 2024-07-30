const mongoose = require('mongoose');

const trainingCourseSchema = new mongoose.Schema({
  trainingTopic: { type: String, required: true },
  tutorName: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
});

module.exports = mongoose.model('TrainingCourse', trainingCourseSchema);
