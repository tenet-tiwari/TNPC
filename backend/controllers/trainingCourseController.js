const TrainingCourse = require('../models/TrainingCourse');

exports.addTrainingCourse = async (req, res) => {
  try {
    const { trainingTopic, tutorName, description, link } = req.body;

    const newTrainingCourse = new TrainingCourse({
      trainingTopic,
      tutorName,
      description,
      link
    });

    await newTrainingCourse.save();

    res.status(201).json({ message: 'Training course added successfully', course: newTrainingCourse });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.getAllTrainings = async (req, res) => {
  try {
    const trainings = await TrainingCourse.find({});
    res.status(200).json(trainings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
