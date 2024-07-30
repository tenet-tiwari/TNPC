
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig'); 
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Register route
router.post('/register', upload.single('image'), authController.register);

// Login route
router.post('/login', authController.login);

router.get('/verification', authController.verifyTokenAndRole);

router.get('/',authMiddleware(['admin']),authController.getAllUsers);

module.exports = router;


