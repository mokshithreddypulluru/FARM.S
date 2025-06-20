const express = require('express');
const Crop = require('../models/crop'); // Import the Crop model to interact with MongoDB
const router = express.Router();

// Route to fetch all crop advisory data
router.get('/crop-advisory', async (req, res) => {
    try {
        // Fetch all the crop advisory data from MongoDB
        const crops = await Crop.find();
        
        // Send the data as a JSON response
        res.json(crops);
    } catch (err) {
        console.error('Error fetching crop advisory data:', err);
        res.status(500).json({ message: 'Failed to fetch crop data' });
    }
});

module.exports = router;
