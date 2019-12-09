const twoSum = require('./twoSum');

describe('adding two values of array === target',() => {
    test('should return array of two indices', () => {
        expect(twoSum([2,7,11,15],9)).toEqual([0,1]);
    });

    test('should return empty array if empty array given', () => {
        expect(twoSum([],9)).toEqual([]);
    });

    test('should return array if negative values', () => {
        expect(twoSum([-2,-7,11,15],-9)).toEqual([0,1]);
    });

    test('should return empty array if array elements is not number', () => {
        expect(twoSum(['a','b','c','d'],9)).toEqual([]);
    })

    test('should always return an array', () => {
        expect(typeof twoSum([2,3,4,5],7)).toBe('object');
    })
});