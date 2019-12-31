const plusOne = require('./plusOne');

describe('plusone last element', () => {
    test('should return [1,2,4]', () => {
        expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });

    test('should return [4,3,2,1]', () => {
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });
})