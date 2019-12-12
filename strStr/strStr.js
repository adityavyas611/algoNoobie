const strStr = function(haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};

module.exports = strStr;