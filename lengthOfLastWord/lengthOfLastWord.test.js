const lengthOfLastWord = require('./lengthOfLastWord');

describe('Length of Last Word', () => {
    test('should return 5', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    })
})