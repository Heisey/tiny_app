
const USERDB = require('../data/userData')

const userData = new USERDB();

exports.findUser = (req, res, next) => {

  const { username, password } = req.body;

  const user = userData.findUser(username, password);

  if (user) {
    req.templateVars.user = user
  }

  
  
  next();
}

exports.login = (req, res, next) => {

  req.session.templateVars = req.templateVars
  
  res.status(200).redirect('../urls')
}

exports.create = (req, res, next) => {

  res.send('hello')
}