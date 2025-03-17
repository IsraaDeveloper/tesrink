const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
    origin: "https://yellowstriker.netlify.app" // Ganti dengan URL frontend Netlify
}));
app.use(express.json()); // Memastikan request body bisa dibaca dalam format JSON
app.use(express.urlencoded({ extended: true })); // Untuk menangani request dari form

// Endpoint GET
app.get('/', (req, res) => {
    res.send('Hello from Vercel');
});

// Endpoint POST
app.post('/api/data', (req, res) => {
    const { name, message } = req.body;

    if (!name || !message) {
        return res.status(400).json({ error: "Name and message are required" });
    }

    res.json({
        success: true,
        response: `Hello ${name}, you said: "${message}"`
    });
});

module.exports = app;
