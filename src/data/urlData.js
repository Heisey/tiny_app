class URLDB {
  constructor() {
    this._urls = {
      "b2xVn2": {
        shortURL: "b2xVn2",
        longURL: "http://www.lighthouselabs.ca",
        username: 'heisey'
      },
      "9sm5xK": {
        longURL: "http://www.google.com",
        shortURL: "9sm5xK",
        username: 'archie'
      }
    };
  }

  getAll() {
    return this._urls;
  }

  getURL(id) {
    return this._urls[id];
  }

  getUserURLS(username) {
    const urls = {}

    for (let url in this._urls) {
      if (this._urls[url].username === username) {
        urls[url] = this._urls[url];
      }
    }

    return urls
  }

  /**
   * Add a description
   * @param {string} shortURL - Add a comment.
   * @param {string} longURL - Add a comment.
   */
  createURL(shortURL, longURL, username) {
    const url = {
      shortURL,
      longURL,
      username
    }
    this._urls[shortURL] = url;
  }

  updateURL(id, data) {
    this._url[id] = data;
  }

  deleteURL(id) {
    delete this._urls[id]
  }
  
}

module.exports = URLDB;