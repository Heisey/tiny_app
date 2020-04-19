// ????????????????????????????????????????????????????????????????
// ??????????????????????? URL Controller ?????????????????????????
// ????????????????????????????????????????????????????????????????

// ???????????????????????? File Modules ??????????????????????????
// ?? Data
const URLDB = require('../data/urlData');

// ?? Utilities
const checkHttp = require('../utils/checkHttp');
const generateRandomString = require('../utils/generateRandomString');

// ??????????????????????? Vendor Modules ?????????????????????????
const axios = require('axios');
const chalk = require('chalk');

// ## Start DB
const URLDATA = new URLDB();

// ~~ Get all URL Data
exports.getAll = (req, res, next) => {

  // ## Query DB for all url data
  req.templateVars.urls = URLDATA.getAll();
  
  next();
};

// ~~ Get user URL data
exports.getUserURLS = (req, res, next) => {
  
  // !! Check for user
  if (req.templateVars.user === null) {

    // ~~ set url data to null
    req.templateVars.urls = null;

    return next();
  }
  
  // ## Query DB for user data
  req.templateVars.urls = URLDATA.getUserURLS(req.templateVars.user.username);
  
  next();
};

// ~~ Get Single URL data
exports.getURL = (req, res, next) => {

  // ~~ set short URL value
  req.templateVars.shortURL = req.params.shortURL;

  // ## Query DB for long URL value
  req.templateVars.longURL = URLDATA.getURL(req.templateVars.shortURL).longURL;

  next();
};

// ~~ Check url is valid
exports.checkNewURL = (req, res, next) => {

  // ~~ Get sent data
  const { longURL } = req.body;

  // ^^ Make request to submitted url
  axios
    .get(longURL)
    .then(response => {

      // ~~ if URL is good move to next function
      next();
    })
    .catch(err => {
      // !! Log error to console
      console.log(chalk.red(err));

      // ~~ Set title cookie
      req.session.title = "That page does not exist check url";
      
      // ^^ Redirect to new url form
      return res.redirect('/urls/new');
    });
};

// ~~ Create new URL
exports.createURL = (req, res, next) => {

  // ~~ Grab sent data
  const { longURL } = req.body;

  if (!checkHttp(longURL)) {
    req.session.title = `${longURL} is a Invalid address`;
    
    return res.redirect('/urls/new');
  }

  // ~~ Get User data
  const { username } = req.templateVars.user;

  // ~~ Generate a unique id
  const shortURL = generateRandomString();

  // ## Create entry in DB
  URLDATA.createURL(shortURL, longURL, username);

  // ^^ 201 redirect to single url page
  res.status(201).redirect(`/urls/${shortURL}`);
};

// ~~ Update URL
exports.updateURL = (req, res, next) => {

  // ~~ Get params
  const { shortURL } = req.params;

  // ## update database
  URLDATA.updateURL(shortURL, req.body[shortURL]);

  // ^^ 204 response to main URLS page
  res.status(204).redirect('/urls');
};

// ~~ Delete URL
exports.deleteURL = (req, res, next) => {

  // ~~ Grab key from params
  const { shortURL } = req.params;

  // ## Delete Entry in DB using key
  URLDATA.deleteURL(shortURL);

  // ^^ 204 response to main info page
  res.status(204).redirect('/urls');
};