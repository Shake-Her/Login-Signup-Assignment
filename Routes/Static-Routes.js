const express = require('express');
const router = express.Router();
const { renderLogin, renderSignup } = require('../Controllers/static-route-handlers')


const str = "<a href='login'>Login</a> <a href='signup'>Signup</a>"

router.get('/', (req, res) => {
    return res.send(str);
})
router.get('/login', renderLogin);
router.get('/signup', renderSignup);

router.get('/*', (req, res) => {
    return res.render('error');
})

module.exports = router;