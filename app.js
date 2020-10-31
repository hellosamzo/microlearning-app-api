const express = require('express');
const app = express();

const genreRoute = require('./api/routes/genres');

app.use('/genres', genreRoute);

module.exports = app;