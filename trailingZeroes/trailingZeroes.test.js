const trailingZeroes = require('./trailingZeroes');

describe('Trailing zeroes in factorial.', () => {
    test('should return 0', () => {
        expect(trailingZeroes(3)).toBe(0);
    });

    test('should return 1', () => {
        expect(trailingZeroes(5)).toBe(1);
    });
});