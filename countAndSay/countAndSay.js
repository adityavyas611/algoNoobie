const countAndSay = n => {
  let res = "1";
  for (let i = 1; i < n; i++) {
    res = res
      .replace(/(\d)(?!\1)/g, "$1|")
      .split("|")
      .reduce((res, s) => res + (s ? s.length + s[0] : ""), "");
  }
  return res;
};

module.exports = countAndSay;

