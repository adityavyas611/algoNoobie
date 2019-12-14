const happyNumber = (number) => {
    let sum = 0;
    let map = new Map();
  
    while(true) {
      if (number === 1) {
        return true;
      }
      if (map.has(number)) {
        return false;
      }
      else {
        map.set(number, number);
      }
        
      sum = 0;
      while(number !== 0) {
        sum += Math.floor(number % 10) * Math.floor(number % 10);
        number = Math.floor(number / 10);
      }
  
      number = sum;
    }
  };

  module.exports = happyNumber;