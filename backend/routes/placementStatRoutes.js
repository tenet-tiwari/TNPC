const express = require('express');
const router = express.Router();
const placementStatController = require('../controllers/placementStatController');
const upload = require('../middleware/multerConfig');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have auth middleware set up

// Route to add or update placement stats
router.post('/add-update-placement-stat', authMiddleware(['admin']), upload.none(), placementStatController.addOrUpdatePlacementStat);

router.get('/',  placementStatController.getPlacementStats);

module.exports = router;
