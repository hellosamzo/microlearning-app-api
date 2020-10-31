const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET Request to /genres'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling POST Request to /genres'
    });
});

module.exports = router;

