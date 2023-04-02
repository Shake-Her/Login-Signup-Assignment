const { getUser_SessionID } = require('../Services/session-ID-auth');

const checkAuth = async (req, res, next) => {
    const token = req.cookies.sessionID;
    if (!token) {
        return res.redirect('/login');
    }

    //verify token
    const isAuthenticated = getUser_SessionID(token);

    if (!isAuthenticated)
        return res.redirect('/error');

    next();
}

module.exports = checkAuth;