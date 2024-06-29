const express = require('express');
const router = express.Router();
const { getData, updateData } = require('../controllers/dataController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getData);
router.put('/:id', protect, updateData);

module.exports = router;
