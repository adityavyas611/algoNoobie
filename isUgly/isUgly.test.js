const isUgly = require('./isUgly');

describe('Convert Number to Excel Title', () => {
    test('should return true', () => {
        expect(isUgly(6)).toBe(true);
    });

    test('should return true', () => {
        expect(isUgly(8)).toBe(true);
    });

    test('should return false', () => {
        expect(isUgly(14)).toBe(false);
    });
});