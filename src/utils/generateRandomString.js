const randomString = require('randomstring');

const generateRandomString = () => {
  return randomString.generate({
    length: 6,
    charset: 'alphanumeric'
  });
};

module.exports = generateRandomString;