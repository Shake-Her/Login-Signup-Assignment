const USER = require('../Models/User-model');
const { setUser_SessionID } = require('../Services/session-ID-auth')

const handelSignup = async (req, res) => {
    const body = req.body;

    try {
        await USER.create({
            userName: body.userName,
            email: body.email,
            password: body.password
        })
    } catch (error) {
        return res.redirect('/login');
    }

    return res.redirect('/login');
}

const handelLogin = async (req, res) => {
    const body = req.body;

    const userData = await USER.findOne({
        email: body.email,
        password: body.password
    })

    if (!userData)
        return res.redirect('/*');

    const jwt_token = setUser_SessionID(userData);
    res.cookie('sessionID', jwt_token);

    return res.redirect('/home');
}

module.exports = {
    handelLogin,
    handelSignup
}