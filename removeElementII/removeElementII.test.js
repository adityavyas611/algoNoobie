const removeElementII = require('./removeElementII');

describe('Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.', () => {
    test('should return 5 as 1 are thrice', () => {
        expect(removeElementII([1,1,1,2,2,3])).toBe(5);
    });

    test('should return 7 as 1 will be twice', () => {
        expect(removeElementII([0,0,1,1,1,1,2,3,3])).toBe(7);
    });
});