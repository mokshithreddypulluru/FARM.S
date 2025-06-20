
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { getWeatherForecast } = require('./models/weather');  

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());


app.get('/api/crop/crop-advisory-json', (req, res) => {
    const filePath = path.join(__dirname, '../data files/crop_advisory_data.json');
    console.log("Attempting to read file from:", filePath);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error("File does not exist:", filePath);
            return res.status(500).json({ error: 'File not found' });
        }

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.error("Error reading crop advisory data:", err);
                return res.status(500).json({ error: 'Failed to load crop advisory data' });
            }

            try {
                const parsedData = JSON.parse(data);
                console.log("Data successfully parsed:", parsedData);
                res.json(parsedData);
            } catch (e) {
                console.error("Error parsing crop advisory data:", e);
                return res.status(500).json({ error: 'Failed to parse crop advisory data' });
            }
        });
    });
});


app.get('/api/weather/:location', async (req, res) => {
    const location = req.params.location;
    try {
        const weatherData = await getWeatherForecast(location);
        res.json(weatherData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(404).json({ error: 'Weather data not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
