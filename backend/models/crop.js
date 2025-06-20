const mongoose = require('mongoose');

// Define the schema for Crop Advisory data
const cropSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: true,  // Crop name (e.g., Wheat, Rice, etc.)
    },
    season: {
        type: String,
        required: true,  // Crop season (e.g., Winter, Kharif, etc.)
    },
    soil_type: {
        type: String,
        required: true,  // Type of soil required for the crop (e.g., Loamy, Clayey)
    },
    recommended_varieties: [{
        type: String,  // List of recommended varieties for the crop
    }],
    optimal_temperature: {
        type: String,
        required: true,  // Optimal temperature range for the crop (e.g., 15-20°C)
    },
    water_requirement: {
        type: String,
        required: true,  // Water requirement for the crop (e.g., 450-650 mm)
    },
    fertilizer_recommendations: {
        nitrogen: {
            type: String,  // Fertilizer recommendation for nitrogen
        },
        phosphorus: {
            type: String,  // Fertilizer recommendation for phosphorus
        },
        potassium: {
            type: String,  // Fertilizer recommendation for potassium
        },
    },
    pest_management: [{
        pest: {
            type: String,  // Pest name (e.g., Stem Rust, Wheat Aphid)
        },
        treatment: {
            type: String,  // Treatment for the pest (e.g., Use fungicide like Mancozeb)
        },
    }],
});

// Create the model for Crop and export it
const Crop = mongoose.model('Crop', cropSchema);

module.exports = Crop;
