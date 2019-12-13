const missingNumber = require('./missingNumber');

describe('Convert Roman Number to Integer Number', () => {
    test('should return 2 as missing number from range', () => {
        expect(missingNumber([3,0,1])).toBe(2);
    });

    test('should return 8 as missing number from range', () => {
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
    });
});