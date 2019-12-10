const stringToInteger = require('./stringToInteger');

describe('Implement atoi which converts a string to an integer', () => {
    test('should convert normal string to number',() => {
        expect(stringToInteger("42")).toBe(42);
    });

    test('should convert whitespaces string into signed integer',() => {
        expect(stringToInteger("   -42")).toBe(-42);
    });

    test('should convert into integer',() => {
        expect(stringToInteger("4193 with words")).toBe(4193);
    });

    test('should return 0',() => {
        expect(stringToInteger("words and 987")).toBe(0);
    });

    test('should return negative -2^31',() => {
        expect(stringToInteger("-91283472332")).toBe(-2147483648);
    });
});