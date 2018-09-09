const express = require('express');
const router = express.Router();

//User model
const User = require('../../models/Users');

//@route GET api/users
//@desc Get all users
//@access public

router.get('/', (req, res) => {
    console.log('inside get method');
    User.find()
    .then(users => res.json(users))
});

//@route POST api/users
//@desc Save new user
//@access public

router.post('/', (req, res) => {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        newUser.save().then(user => res.json(user));
    });

module.exports = router;