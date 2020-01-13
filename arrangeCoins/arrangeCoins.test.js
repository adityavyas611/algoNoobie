const arrangeCoins = require('./arrangeCoins');

describe('Check for Intersection', () => {
    test('should return true', () => {
        expect(arrangeCoins(5)).toBe(2);
    });

    test('should return false', () => {
        expect(arrangeCoins(5)).toBe(2);
    });
})