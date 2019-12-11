const rotatedSortArray = require('./rotatedSortArray');

describe('Find the element from the sorted array', () => {
    test('should return element = 0 if the element is present', () => {
        expect(rotatedSortArray([4,5,6,7,0,1,2],0)).toBe(4);
    });

    test('should return -1 if the element is not present', () => {
        expect(rotatedSortArray([4,5,6,7,0,1,2],3)).toBe(-1);
    });
});