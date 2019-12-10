const removeElement = require('./removeElement');

describe('Implement atoi which converts a string to an integer', () => {
    test('should remove element and return length',() => {
        expect(removeElement([1,1,2],1)).toBe(1);
    });

    test('should remove element and return length',() => {
        expect(removeElement([0,1,2,2,3,0,4,2],2)).toBe(5);
    });

    test('should return 0 if empty array',() => {
        expect(removeElement([])).toBe(0);
    });

    test('should throw error',() => {
        expect(() => removeElement("abcd")).toThrow();
    });
});