const express = require('express');
const router = express.Router();
const jobPostingController = require('../controllers/jobPostingController');
const upload = require('../middleware/multerConfig'); // Assuming you have multer set up as shown previously
const authMiddleware = require('../middleware/authMiddleware'); // Import the authentication middleware

// Route to add a new job posting
router.post('/add-job', authMiddleware(['admin']), upload.none(), jobPostingController.addJobPosting);

router.get('/all-jobs', jobPostingController.getJobPostings);

module.exports = router;
