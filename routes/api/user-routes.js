const router = require('express').Router();

const {
    getAllUser,
    createUser
} = require('../../controllers/user-controller');

// api/users
router  
    .route('/')
    .get(getAllUser)
    .post(createUser);

// api/users/:id


module.exports = router;