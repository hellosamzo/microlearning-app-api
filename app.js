const express = require('express');
const app = express();

const genreRoute = require('./api/routes/genres');
const urlRoute = require('./api/routes/urls');

// routes
app.use('/genres', genreRoute);
app.use('/urls', urlRoute);

module.exports = app;