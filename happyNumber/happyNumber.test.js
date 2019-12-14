const happyNumber = require('./happyNumber');

describe('Write an algorithm to determine if a number is "happy".', () => {
    test('should return true', () => {
        expect(happyNumber(19)).toBe(true);
    });

    test('should return false', () => {
        expect(happyNumber(20)).toBe(false);
    });
})