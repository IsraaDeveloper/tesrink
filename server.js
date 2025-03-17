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

app.listen(3000, () => console.log('Server running on port 3000'));