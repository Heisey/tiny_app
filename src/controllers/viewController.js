

exports.showAll = (req, res, next) => {
  const templateVars = req.templateVars;

  res.status(200).render('index', templateVars);
}

exports.getURLForm = (req, res, next) => {
  const templateVars = req.templateVars;
  res.status(200).render('newURL', templateVars)
}

exports.getOne = (req, res, next) => {
  const templateVars = req.templateVars;

  templateVars.shortURL = req.params.shortURL;
  templateVars.longURL = urlData[templateVars.shortURL]

  res.status(200).render('singleURL', templateVars)
}

exports.getUserForm = (req, res, next) => {

  const templateVars = req.templateVars

  if (templateVars.title = undefined) {
    templateVars.title = ''
  }

  res.render('signUpUser', templateVars)
}