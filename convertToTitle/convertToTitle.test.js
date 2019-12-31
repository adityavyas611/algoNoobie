const convertToTitle = require('./convertToTitle');

describe('Convert Number to Excel Title', () => {
    test('should return A', () => {
        expect(convertToTitle(1)).toBe('A');
    });

    test('should return AB', () => {
        expect(convertToTitle(28)).toBe('AB');
    });

    test('should return ZY', () => {
        expect(convertToTitle(701)).toBe('ZY');
    });
})