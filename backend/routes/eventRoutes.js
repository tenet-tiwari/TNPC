const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const upload = require('../middleware/multerConfig');
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware

// Route to add a new event
router.post('/add-event', authMiddleware(['admin']), upload.none(), eventController.addEvent);

router.get('/all', authMiddleware(['student']), eventController.getAllEvents);

module.exports = router;
