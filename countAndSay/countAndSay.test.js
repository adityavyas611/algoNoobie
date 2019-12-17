const countAndSay = require('./countAndSay');

describe('The count-and-say sequence is the sequence of integers', () => {
    test('should return 1', () => {
        expect(countAndSay(1)).toBe("1");
    });

    test('should return 1211', () => {
        expect(countAndSay(4)).toBe("1211");
    });
});