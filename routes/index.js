
var express = require('express');
var router = express.Router();
// const postModel = require("./post")
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require('passport-local')
passport.use(new localStrategy(userModel.authenticate()))
// const upload = require('./multer');
const users = require('./users');

router.get('/', function(req, res, next) {
  res.render('home');
});