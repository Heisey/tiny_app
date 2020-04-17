class URLDB {
  constructor() {
    this._urls = {
      "b2xVn2": {
        shortURL: "b2xVn2",
        longURL: "http://www.lighthouselabs.ca"
      },
      "9sm5xK": {
        longURL: "http://www.google.com",
        shortURL: "9sm5xK"
      }
    };
  }

  getAll() {
    return this._urls;
  }

  getURL(id) {
    return this._urls[id];
  }

  /**
   * Add a description
   * @param {string} shortURL - Add a comment.
   * @param {string} longURL - Add a comment.
   */
  createURL(shortURL, longURL) {
    const url = {
      shortURL,
      longURL
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