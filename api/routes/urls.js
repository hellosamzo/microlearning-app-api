const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET Request to /urls'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling POST Request to /urls'
    });
});

router.get('/:urlId', (req, res, next) => {
        res.status(200).json({
            message: 'url details',
            urlId: req.params.urlId
        });
});

router.delete('/:urlId', (req, res, next) => {
    res.status(200).json({
        message: 'url deleted',
        urlId: req.params.urlId
    });
});

module.exports = router;

