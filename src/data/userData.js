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

    const user = {
      username,
      email,
      password: encryptPassword,
      id
    }
    this._users[id] = user

    return user
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
    console.log(id)
    if(bcrypt.compareSync(password, this._users[id].password)) {
      return true
    }

    return false;
  }
}

module.exports = USERDB;
