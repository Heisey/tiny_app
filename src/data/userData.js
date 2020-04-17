const generateRandomString = require('../utils/generateRandomString');
const bcrypt = require('bcrypt');
class USERDB {
  constructor() {
    this._users = {
      "b3k48d": {
        username: "heisey",
        email: "test@123.com",
        password: "123"
      }
    }
  }

  createUser(username, email, password) {
    const id = generateRandomString();

    // ** Encrypt password
  const encryptPassword = bcrypt.hashSync(password, 12);

    this._users[id] = {
      username,
      email,
      password: encryptPassword
    }

    return this._users[id]
  }

  findUser(username) {
    for (let user in this._users) {
      if (this._users[user].username === username) {

        return { user: this._users[user] }
      }
    }
  }

  findUserName(username) {
    for (let user in this._users) {
      if (this._users[user].username === username) {
        return true
      }
    }

    return false
  }

  findEmail(email) {
    for (let user in this._users) {
      if (this._users[user].email === email) {
        return true
      }
    }

    return false
  }

  checkPassword(id, password) {
    if(bcrypt.compareSync(password, this._users[id].password)) {
      return true
    }

    return false;
  }
}

module.exports = USERDB;
