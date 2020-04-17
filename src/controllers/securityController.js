exports.isLoggedIn = (req, res, next) => {
  if (req.templateVars.user === null) {
    return res.redirect('/urls')
  }

  next()
}