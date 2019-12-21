const maxSubArray = require('./maxSubArray');

describe('The Trees should be same',() => {
    test('should return true if both are same', () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
    });

    test('should return true if both are same', () => {
        expect(maxSubArray([-2,1,-3,4,-5,4])).toBe(4)
    });

    test('should return true if both are same', () => {
        expect(maxSubArray([-2,1,2,1,-5,4])).toBe(4)
    });
});