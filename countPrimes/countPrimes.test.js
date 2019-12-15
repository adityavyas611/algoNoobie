const countPrimes = require('./countPrimes');

describe('return the index if the target is found. If not, return the index where it would be if it were inserted in order', () => {
    test('should return 4', () => {
        expect(countPrimes(10)).toBe(4);
    });

    test('should return 8', () => {
        expect(countPrimes(20)).toBe(8);
    });

    test('should return 10', () => {
        expect(countPrimes(30)).toBe(10);
    });

    test('should return 12', () => {
        expect(countPrimes(40)).toBe(12);
    });
});