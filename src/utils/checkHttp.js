const checkHTTP = (str) => {
  let textArea = str;
  if (textArea.indexOf("http://") === 0 || textArea.indexOf("https://") === 0) {
    return true;
  }

  return false;
};

module.exports = checkHTTP;