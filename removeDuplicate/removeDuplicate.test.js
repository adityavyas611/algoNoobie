const removeDuplicate = require('./removeDuplicate');

describe('Implement atoi which converts a string to an integer', () => {
    test('should remove duplicate and return length',() => {
        expect(removeDuplicate([1,1,2])).toBe(2);
    });

    test('should remove duplicate and return length',() => {
        expect(removeDuplicate([0,0,1,1,1,2,2,3,3,4])).toBe(5);
    });

    test('should return 0 if empty array',() => {
        expect(removeDuplicate([])).toBe(0);
    });

    test('should throw error',() => {
        expect(() => removeDuplicate("abcd")).toThrow();
    });
});