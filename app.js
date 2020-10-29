const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        url: 'https://en.wikipedia.org/wiki/Express.js'
    });
});

module.exports = app;