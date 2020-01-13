const isPerfectSquare = require('./validPerfectSquare');

describe('Check for perfect Square', () => {
    test('should return true', () => {
        expect(isPerfectSquare(16)).toBe(true);
    });

    test('should return false', () => {
        expect(isPerfectSquare(14)).toBe(false);
    });
})