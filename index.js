const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).sendFile(`${__dirname}/public/index.html`)
})

app.get('/style.css', (req, res) => {
    res.status(200).sendFile(`${__dirname}/public/style.css`)
})

app.get('/script.js', (req, res) => {
    res.status(200).sendFile(`${__dirname}/public/script.js`)
})

app.listen(3000)