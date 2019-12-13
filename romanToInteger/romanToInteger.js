const romanToInteger = s => {
  const romanDictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  return s.split("").reduce((accumulator, current, index, splitArray) => {
    if (romanDictionary[current] < romanDictionary[splitArray[index + 1]]) {
      accumulator -= romanDictionary[current];
    } else {
      accumulator += romanDictionary[current];
    }
    return accumulator;
  }, 0);
};

module.exports = romanToInteger;