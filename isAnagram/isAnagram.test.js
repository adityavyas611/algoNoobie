const isAnagram = require('./isAnagram');

describe('Check if anagram.', () => {
    test('should return true', () => {
        expect(isAnagram("anagram","nagaram")).toBe(true);
    });

    test('should return false', () => {
        expect(isAnagram("rat","car")).toBe(false);
    });
})