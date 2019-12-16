const sumOfTwoInteger = (num1, num2) => {
    let num3;
    while ((num3 = num1 & num2) != 0) {
        num1 = num1 ^ num2;
        num2 = num3 << 1;
    }
    return num1 ^ num2;
};

module.exports = sumOfTwoInteger;