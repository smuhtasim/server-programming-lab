const express = require('express');
const router = express.Router();
const {getLogin, getRegister, postLogin, postRegister} = require('./../controllers/users.controllers');

router.get('/login',getLogin);
router.post('/login',postLogin);
router.get('/register',getRegister);
router.post('/register',postLogin);

module.exports = router;