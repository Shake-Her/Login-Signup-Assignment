const express = require('express');
const router = express.Router();
const { handelLogin, handelSignup } = require('../Controllers/login-signup-handler');

router.post('/login', handelLogin);
router.post('/signup', handelSignup);

module.exports = router;