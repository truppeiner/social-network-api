const router = require('express').Router();

const { Router } = require('express');
const {
    getAllThought,
    createThought
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);


module.exports = router;
