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
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}))

// Connecting Mongoose with the database named splitkaro
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/splitkaro');
    console.log('db connected');
}

// mongoose.set("useCreateIndex", true);

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

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id).exec();
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


passport.use(new GoogleStrategy({
    clientID: "1017271123551-ujo78vkvu69innoun5tllrmtt29rv718.apps.googleusercontent.com",
    clientSecret: "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" ,
    callbackURL: "http://localhost:5000/auth/google/home",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    function(accessToken, refreshToken, profile, cb) {
        console.log(profile);

        User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
        });
    }
));

app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] })
);

app.get("/auth/google/home", 
  passport.authenticate('google', { failureRedirect: "http://localhost:5173" }),
  function(req, res) {
    res.redirect("http://localhost:3000");
  });

app.get("/",function(req,res){
    res.send("Server is up and running");
});


app.post("/login", function(req, res){
  console.log("aa gya");
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.password
  });
  req.login(user, function(err){
    if (err) {
      User.register({username: req.body.username,email:req.body.email}, req.body.password, function(err, user){
        if (err) {
          console.log(err);
        } else {
          passport.authenticate("local")(req, res, function(){
            res.send({message:"sucessfull"})
          });
        }
      });
    } else {
      passport.authenticate("local")(req, res, function(){
      });
    }
  });
});

app.listen(5000,()=>{
    console.log('server started')
});