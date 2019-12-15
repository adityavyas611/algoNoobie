const searchInsertPosition = require('./searchInsertPosition');

describe('return the index if the target is found. If not, return the index where it would be if it were inserted in order', () => {
    test('should return 2', () => {
        expect(searchInsertPosition([1,3,5,6],5)).toBe(2);
    });

    test('should return 1', () => {
        expect(searchInsertPosition([1,3,5,6],2)).toBe(1);
    });

    test('should return 4', () => {
        expect(searchInsertPosition([1,3,5,6],7)).toBe(4);
    });

    test('should return 0', () => {
        expect(searchInsertPosition([1,3,5,6],0)).toBe(0);
    });
});