const detectCapitalUse = require('./detectCapitalUse');

describe('Check for Intersection', () => {
    test('should return true', () => {
        expect(detectCapitalUse("USA")).toBe(true);
    });

    test('should return false', () => {
        expect(detectCapitalUse("FlaG")).toBe(false);
    });
})