const threeSum = require('./threeSum');

describe('unique triplets in the array which gives the sum of zero', () => {
    test('should return [[-1, 0, 1],[-1, -1, 2]]', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([ [ -1, -1, 2 ], [ -1, 0, 1 ] ]);
    });
});