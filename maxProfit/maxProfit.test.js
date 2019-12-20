const maxProfit = require('./maxProfit');

describe('Best Time to Buy and Sell Stock', () => {
    test('should return 5', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });

    test('should return 0', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });

    test('should return 2', () => {
        expect(maxProfit([2,4,1])).toBe(2);
    });
});