const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(cors({
    origin: "https://yellowstriker.netlify.app"
}))


app.get('/', (req, res) => {
    res.send('Hello from Vercel');
});

app.get('/homepic', (req, res) => {
    res.send('Hello from Vercel/homepic')
})

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

app.listen(3000, () => console.log('Server running on port 3000'));
