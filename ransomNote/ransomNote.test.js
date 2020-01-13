const ransomNote = require('./ransomNote');

describe('Check for perfect Square', () => {
    test('should return true', () => {
        expect(ransomNote("a", "b")).toBe(false);
    });

    test('should return false', () => {
        expect(ransomNote("aa", "ab")).toBe(false);
    });
})