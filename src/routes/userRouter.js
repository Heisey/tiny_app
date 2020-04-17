// ????????????????????????????????????????????????????????????????
// ????????????????????????? url Routes ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ???????????????????????? File Modules ??????????????????????????
// ?? Controllers
const userController = require('../controllers/userController');
const dataController = require('../controllers/dataController')
// const viewController = require('../controllers/viewController');

// ??????????????????????? Vendor Modules ?????????????????????????
const express = require('express');

// ~~ Create router and export
const router = express.Router();
module.exports = router;

router
  .route('/login')
  .post(userController.findUser, userController.login)

router
  .route('/logout')
  .post(userController.logout)

router
  .route('/signup')
  // .get(viewController.signup)
  // .post(userController.signup)