const renderLogin = async (req, res) => {
    return res.render("LoginPage"); //ejs template rendered
}

const renderSignup = async (req, res) => {
    return res.render("SignUpPage"); //ejs template rendered
}

module.exports = {
    renderLogin,
    renderSignup
}