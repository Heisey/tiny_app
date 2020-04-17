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

  /**
   * Return all URL Data
   */
  getAll() {
    return this._urls;
  }

  /**
   * Return URL Data
   * @param {string} shortURL - URL ID
   */
  getURL(id) {
    return this._urls[id];
  }

  /**
   * Return User URL Data
   * @param {string} shortURL - User ID
   */
  getUserURLS(username) {
    const urls = {};

    for (let url in this._urls) {
      if (this._urls[url].username === username) {
        urls[url] = this._urls[url];
      }
    }

    return urls;
  }

  /**
   * Create new URL
   * @param {string} shortURL - URL ID
   * @param {string} longURL - URL Address
   * @param {string} username - Username
   */
  createURL(shortURL, longURL, username) {
    const url = {
      shortURL,
      longURL,
      username
    };

    this._urls[shortURL] = url;
  }

  /**
   * Update URL
   * @param {string} id - URL ID
   * @param {string} data - updated URL address
   */
  updateURL(id, data) {
    this._urls[id].longURL = data;
  }

  /**
   * Delete URL
   * @param {string} id - URL ID
   */
  deleteURL(id) {
    delete this._urls[id];
  }
  
}

module.exports = URLDB;