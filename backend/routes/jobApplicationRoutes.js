const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');
const upload = require('../middleware/multerConfig');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware set up

// Route to apply to a job
router.post('/apply/:id', authMiddleware(['student']), upload.single('resume'), jobApplicationController.applyToJob);

router.get('/all', authMiddleware(['admin']), jobApplicationController.getAllApplications);

router.delete('/:id', authMiddleware(['admin']), jobApplicationController.deleteApplication);

module.exports = router;
