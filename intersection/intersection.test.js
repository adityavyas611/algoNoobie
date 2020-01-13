const intersection = require('./intersection');

describe('Check for Intersection', () => {
    test('should return true', () => {
        expect(intersection([1,2,2,1],[2,2])).toEqual([2]);
    });

    test('should return false', () => {
        expect(intersection([4,9,5],[9,4,9,8,4])).toEqual([4,9]);
    });
})