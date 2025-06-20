const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const API_KEY = '31c564cacaac8c2b44d79e2f85fc9b1e'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

async function getWeatherForecast(location) {
    const url = `${BASE_URL}?q=${location}&units=metric&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in weather.js:", error);
        throw error;
    }
}

module.exports = { getWeatherForecast };
