const titleToNumber = s => {
  let colNum = 0;
  for (let i = s.length - 1, powerOf26 = 1; i >= 0; i--, powerOf26 *= 26) {
    colNum += powerOf26 * (s.charCodeAt(i) - 64);
  }
  return colNum;
};

module.exports = titleToNumber;