const bcrypt = require('bcrypt')

exports.isLoggedIn = (req, res, next) => {
  if (req.templateVars.user === null) {
    req.session.title = "You must make a account first"
    return res.redirect('/user/signup')
  }

  next()
}
