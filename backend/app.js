const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: "krdu-split",
    resave: false,
    saveUninitialized: false
  }));
  
app.use(passport.initialize());
app.use(passport.session());

// Connecting Mongoose with the database named splitkaro
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/splitkaro');
    console.log('db connected');
}

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    googleId:String,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// using a Collection named User
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: 1017271123551-ujo78vkvu69innoun5tllrmtt29rv718.apps.googleusercontent.com,
    clientSecret: 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 ,
    callbackURL: "http://localhost:3000/auth/google/",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);

        User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
        });
    }
));


app.post("/",function(req,res){
    console.log(req.body.username);
});

// psuedocode for the type i have to use in react.js for passing data in the react application

// const handleSubmit = async (e)=>{
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/demo',{
//       method:'POST',
//       body:JSON.stringify(form),
//       headers:{
//         'Content-Type':'application/json'
//       }
//     })
//     const data = await response.json();
//    console.log(data);
//   }



//   const getUsers = async ()=>{
//     const response = await fetch('http://localhost:5000/demo',{
//       method:'GET',
//     })
//    const data = await response.json();
//    setUsers(data);
//   }

server.listen(5000,()=>{
    console.log('server started')
});