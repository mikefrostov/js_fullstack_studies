const express = require ('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const app = express();

app.get('/', (req, res) => {
  res.send({ h1: 'dummy' });
});

passport.use(new GoogleStrategy());


//getting port from environment variable PORT or 5001
const PORT = process.env.PORT || 5001;

app.listen(PORT , function(){
    console.log('Server running on 5001...');
});
