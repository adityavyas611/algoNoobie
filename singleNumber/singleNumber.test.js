const singleNumber = require('./singleNumber');

describe('Find the Single Number among Array', () => {
    test('should return 1', () => {
        expect(singleNumber([2,2,1])).toBe("1");
    });

    test('should return 4', () => {
        expect(singleNumber([4,1,2,1,2])).toBe("4");
    });
})