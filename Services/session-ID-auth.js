const jwt = require('jsonwebtoken');
const secretKey = "@Shekhar-Mehta@"; //For this project I'm making this key open to run locally on ur device otherwise always hide this key

const setUser_SessionID = (user) => {
    return jwt.sign({
        userName: user.userName,
        email: user.email
    }, secretKey)
}

const getUser_SessionID = (token) => {
    if (!token) {
        return null;
    }

    return jwt.verify(token, secretKey);
}

module.exports = {
    setUser_SessionID,
    getUser_SessionID
}