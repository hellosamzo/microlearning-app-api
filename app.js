const express = require('express');
const app = express();
const morgan = require('morgan');

const genreRoute = require('./api/routes/genres');
const urlRoute = require('./api/routes/urls');

// log requests in console
app.use(morgan('dev'));

// routes
app.use('/genres', genreRoute);
app.use('/urls', urlRoute);

app.use((req, res, next) => {
    const error = new Error('Not found..');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;