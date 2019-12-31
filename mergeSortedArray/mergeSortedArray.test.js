const merge = require('./mergeSortedArray');

describe('Merge Sorted Array', () => {
    test('should return [1,2,3,2,5,6]', () => {
        expect(merge([1,2,3,0,0,0],3,[2,5,6],3)).toEqual([1,2,2,3,5,6]);
    });
})