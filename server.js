require('dotenv').config();
const express = require('express');
const routeBetweenPages = require('./Routes/Static-Routes');
const routeUserData = require('./Routes/Login-Signup-Route');
const path = require('path');
const cookieParser = require('cookie-parser');
const checkAuth = require('./Middlewares/check-authorization');

const PORT = process.env.PORT || 8000;
const app = express();
const connectDB = require('./connect-to-DB.js');

connectDB(process.env.MONGO_URI).then(() => {
    console.log(`Connected to monogoDB`)
}).catch((err) => {
    console.log('Error Occurred while connecting with DB', err);
});

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//to parse cookie between files
app.use(cookieParser());

//HOME PAGE But will be visible for authorized users only (INLINE MIDDLEWARE)
app.get('/home', checkAuth, (req, res) => {
    return res.render('HomePage');
})
// app.use(checkAuth);
app.use('/', routeBetweenPages);
app.use('/user', routeUserData);


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.listen(PORT, () => {
    console.log(`Server started at PORT : ${PORT}`)
})