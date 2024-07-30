const express = require('express');
const router = express.Router();
const trainingCourseController = require('../controllers/trainingCourseController');
const upload = require('../middleware/multerConfig');
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware

// Route to add a new training course
router.post('/add-training', authMiddleware(['admin']), upload.none(), trainingCourseController.addTrainingCourse);

router.get('/all', authMiddleware(['student']), trainingCourseController.getAllTrainings);

module.exports = router;
