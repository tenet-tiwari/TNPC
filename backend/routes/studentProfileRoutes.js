const express = require('express');
const router = express.Router();
const studentProfileController = require('../controllers/studentProfileController');
const upload = require('../middleware/multerConfig');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add or update student profile
router.post('/edit', authMiddleware(['student']), upload.none(), studentProfileController.addOrUpdateProfile);
router.get('/basic', authMiddleware(['student']), studentProfileController.getProfile);

router.get('/details', authMiddleware(['student']), studentProfileController.getStudentSkills);

router.get('/admin', authMiddleware(['admin']), studentProfileController.getAdminProfile);

module.exports = router;
