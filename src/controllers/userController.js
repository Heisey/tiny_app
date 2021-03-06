// ????????????????????????????????????????????????????????????????
// ?????????????????????? USER Controller ?????????????????????????
// ????????????????????????????????????????????????????????????????

// ???????????????????????? File Modules ??????????????????????????
// ?? Data
const USERDB = require('../data/userData');

// ## Start DB
const userData = new USERDB();

// ~~ Get User Data
exports.findUser = (req, res, next) => {

  // ~~ Grab sent data
  const { username, password } = req.body;

  // ## Query DB by username
  let user;
  if (userData.findUser(username)) {
    user = userData.findUser(username).user;
  }

  // ** Check Password
  if (!user || !userData.checkPassword(user.id, password)) {

    // ^^ 401 Redirect
    return res.status(401).redirect('/user/signup');
  }

  // ~~ set req.template vars if user
  if (user) {
    req.templateVars.user = user;
  }

  next();
};

// ~~ Login User
exports.login = (req, res, next) => {
  
  // ~~ Get user data from cookie
  req.session.user = req.templateVars.user;

  // ^^ Redirect to main URLS
  res.status(200).redirect('../urls');
};

// ~~ Logout User
exports.logout = (req, res, next) => {

  // ~~ Set cookie to undefined
  req.session.user = undefined;

  // ^^ 200 Redirect to main URLS
  res.status(200).redirect('/');
};

// ~~ Signup new User
exports.signup = (req, res, next) => {

  // ~~ Get send data
  const { email, username, password } = req.body;

  // !! Check if username exists
  if (userData.findUserName(username)) {

    // ~~ Set template title
    req.session.title = 'Sorry that Username is taken';
    
    // ^^ Redirect to user signup
    return res.redirect('/user/signup');

    // !! Check if email exists
  } else if (userData.findEmail(email)) {

    // ~~ Set template title
    req.templateVars.title = "Sorry that email is taken";

    // ^^ Redirect to user signup
    return res.redirect('/user/signup');
  }

  // ## Create new user in DB
  const user = userData.createUser(username, email, password);

  // ~~ Attach user to cookie
  req.session.user = user;

  // ^^ Redirect to main url
  res.redirect('../urls');
};

