const moveZeroes = require('./moveZeroes');

describe('Need to moveZeroes', () => {
    test('should return true', () => {
        expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    });
})