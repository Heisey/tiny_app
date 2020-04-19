const generateRandomString = require('../utils/generateRandomString');
const bcrypt = require('bcrypt');
class USERDB {
  constructor() {
    this._users = {};
  }

  /**
   * Create and return new User
   * @param {string} username - username
   * @param {string} email - user email
   * @param {string} password - user password
   */
  createUser(username, email, password) {

    // ~~ Generate random id
    const id = generateRandomString();

    // ** Encrypt password
    const encryptPassword = bcrypt.hashSync(password, 12);

    // ~~ Create User Obj
    const user = {
      username,
      email,
      password: encryptPassword,
      id
    };

    // ## Add user to DB
    this._users[id] = user;

    return user;
  }

  /**
   * Find User by username returns user
   * @param {string} username - username
   */
  findUser(username) {
    for (let user in this._users) {
      if (this._users[user].username === username) {

        return { user: this._users[user] };
      }
    }
  }

  /**
   * Check for user name Return true or false
   * @param {string} username - user username
   */
  findUserName(username) {
    for (let user in this._users) {
      if (this._users[user].username === username) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check for email Return true or false
   * @param {string} email - user email
   */
  findEmail(email) {
    for (let user in this._users) {
      if (this._users[user].email === email) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check User password
   * @param {string} id - user username
   * @param {string} password - user password
   */
  checkPassword(id, password) {
    
    if (bcrypt.compareSync(password, this._users[id].password)) {
      return true;
    }

    return false;
  }
}

module.exports = USERDB;
