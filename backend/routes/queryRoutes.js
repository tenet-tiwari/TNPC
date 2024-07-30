const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');
const upload = require('../middleware/multerConfig');

// Route to submit a query
router.post('/submit', upload.none(), queryController.submitQuery);

module.exports = router;
