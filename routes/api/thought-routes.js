const router = require('express').Router();

const { Router } = require('express');
const {
    getAllThought,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


module.exports = router;
