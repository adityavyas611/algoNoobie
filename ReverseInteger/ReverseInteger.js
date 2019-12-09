const ReverseInteger = x => {
  const reversedNumber = x
    .toString()
    .split("")
    .filter(letter => letter !== "-")
    .reverse()
    .join("");

  if (reversedNumber > Math.pow(2, 31)) {
    return 0;
  }

  return x < 0 ? Number("-" + reversedNumber) : Number(reversedNumber);
};

module.exports = ReverseInteger;
