const findPeakElement = require('./findPeakElement');

describe('Find the element from the sorted array', () => {
    test('should return index of max element', () => {
        expect(findPeakElement([1,2,3,1])).toBe(2);
    });

    test('should return index of max element', () => {
        expect(findPeakElement([1,2,1,3,5,6,4])).toBe(5);
    });

    test('should return 0 as we passed two elements', () => {
        expect(findPeakElement([2,1])).toBe(0);
    });
});