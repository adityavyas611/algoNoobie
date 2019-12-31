const convertToTitle = (n) => {
        
  let char_initial = 64;
  let columnTitle = "";
  
  while(n > 0) {
      let rem = n % 26 === 0 ? 26 : n % 26;
      n = ( n - rem) / 26;
      columnTitle = String.fromCharCode(char_initial + rem) + columnTitle;
  }
  return columnTitle;
};

module.exports = convertToTitle;
