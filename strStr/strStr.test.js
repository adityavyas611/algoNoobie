const strStr = require('./strStr');

describe('Stack Implementation using Object',() => {
    test('should return min value',() => {
        expect(strStr('hello','ll')).toBe(2);
    });
    
    test('should return top value',() => {
        expect(strStr('aaaaa','bba')).toBe(-1);
    });

    test('should return top value',() => {
        expect(strStr('abcd','bc')).toBe(1);
    });
});