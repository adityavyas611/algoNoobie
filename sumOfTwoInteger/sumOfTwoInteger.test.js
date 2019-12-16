const sumOfTwoInteger = require('./sumOfTwoInteger');

describe('the sum of two integers a and b, but you are not allowed to use the operator + and -', () => {
    test('should return 3 when adding 2 numbers', () => {
        expect(sumOfTwoInteger(1,2)).toBe(3);
    });

    test('should return 1 when adding 2 numbers', () => {
        expect(sumOfTwoInteger(-2,3)).toBe(1);
    });
});