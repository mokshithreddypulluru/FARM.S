const express = require('express');
const Crop = require('../models/crop'); // Import the crop model
const router = express.Router();

// Route to get all crop advisory data
router.get('/crop-advisory', async (req, res) => {
    try {
        const crops = await Crop.find();  // Fetch all crops from the database
        res.json(crops);
    } catch (err) {
        console.error('Error fetching crop advisory data:', err);
        res.status(500).json({ message: 'Failed to fetch crop data' });
    }
});

module.exports = router;
