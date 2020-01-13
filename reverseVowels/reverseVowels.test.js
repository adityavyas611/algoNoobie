const reverseVowels = require('./reverseVowels');

describe('Check for perfect Square', () => {
    test('should return true', () => {
        expect(reverseVowels("hello")).toBe("holle");
    });

    test('should return false', () => {
        expect(reverseVowels("leetcode")).toBe("leotcede");
    });
})