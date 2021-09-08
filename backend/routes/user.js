const express = require('express');
const router = express.Router();

const {getUser,newUser,userID, loginUser, logout } =require('../controllers/userController')


router.route('/users').get(getUser);
router.route('/user/new').post(newUser);
router.route('/user/:id').get(userID);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);

module.exports = router;