// ???????????????????????? File Modules ??????????????????????????
// ?? Data
const urlData = require('../data/userData')

// ?? utils
const generateRandomString = require('../utils/generateRandomString')

exports.setTemplateVars = (req, res, next) => {
  const templateVars = {
    urls: urlData
  }

  req.templateVars = templateVars;

  next();
}

exports.createURL = (req, res, next) => {

    // ~~ Grab sent data
    const { longURL } = req.body;

    // ~~ Generate a unique id
    const shortURL = generateRandomString();
  

    // ## Create entry in DB
    urlData[shortURL] = longURL;

    res.status(201).redirect(`/urls/${shortURL}`)
}

exports.updateURL = (req, res, next) => {

  // ~~ Get params
  const { shortURL } = req.params;

  // ## update database
  urlData[shortURL] = req.body[shortURL];

  // ^^ 204 response to main info page
  res.status(204).redirect('/urls');
}

exports.deleteURL = (req, res, next) => {

  // ~~ Grab key from params
  const { shortURL } = req.params;

  // ## Delete Entry in DB using key
  delete urlData[shortURL];
  
  // ^^ 204 response to main info page
  res.status(204).redirect('/urls');
}