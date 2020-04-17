const USERDB = require('../data/userData')

const userData = new USERDB();



exports.findUser = (req, res, next) => {

  const { username, password } = req.body;

  const user = userData.findUser(username).user;

  console.log(req.body)
  console.log(user.id)

  if (!userData.checkPassword(user.id, password)) {
    res.redirect('/login')
  }

  if (user) {
    req.templateVars.user = user;
  }

  next();
}

exports.login = (req, res, next) => {

  req.session.user = req.templateVars

  res.status(200).redirect('../urls')
}

exports.logout = (req, res, next) => {

  req.session.user = undefined;
  
  res.redirect('/urls')
}

exports.create = (req, res, next) => {

  res.redirect('/urls')
}

exports.signup = (req, res, next) => {

  const { email, username, password } = req.body;

  if (userData.findUserName(username)) {
    
    req.templateVars.title = 'Sorry that Username is taken';

    return res.redirect('/user/signup');
  } else if (userData.findEmail(email) ) {
    
    req.templateVars.title = "Sorry that email is taken"

    return res.redirect('/user/signup')
  }
  const user = userData.createUser(username, email, password)
  
  req.session.user = user;

  res.redirect('../urls')
}

