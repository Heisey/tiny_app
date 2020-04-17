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