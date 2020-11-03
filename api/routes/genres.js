const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling GET Request to /genres'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling POST Request to /genres'
    });
});

router.get('/:genreId', (req, res, next) => {
    const id = req.params.genreId;
    if (id == '1') {
        res.status(200).json({
            message: 'passed in ID of 1',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'passed an invalid ID'
        })
    }
});

router.patch('/:genreId', (req, res, next) => {
   res.status(200).json({
       message: 'patched genre'
   })
});

router.delete('/:genreId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted genre'
    })
 });

module.exports = router;

