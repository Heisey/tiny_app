const generateRandomString = require('../utils/generateRandomString');

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

    this._users[id] = {
      username,
      email,
      password
    }
  }

  findUser(username, password) {
    for (let user in this._users) {
      if (this._users[user].username === username && this._users[user].password === password) {
        return this._users[user]
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
}

module.exports = USERDB;
