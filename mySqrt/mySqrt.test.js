const mySqrt = require('./mySqrt');

describe('Create your own sqrt', () => {
    test('should return 5', () => {
        expect(mySqrt(8)).toBe(2);
    });

    test('should return 0', () => {
        expect(mySqrt(4)).toBe(2);
    });

    test('should return 2', () => {
        expect(mySqrt(2)).toBe(1);
    });
});