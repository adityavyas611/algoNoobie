const maxProfit = require('./maxProfit');

describe('Find Max Profit', () => {
    test('should return 5', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });

    test('should return 0', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });
})