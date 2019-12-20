const titleToNumber = require('./titleToNumber');

describe('Title of Excel Sheet to Number', () => {
    test('should return 1', () => {
        expect(titleToNumber('A')).toBe(1);
    });

    test('should return 28', () => {
        expect(titleToNumber('AB')).toBe(28);
    });

    test('should return 701', () => {
        expect(titleToNumber('ZY')).toBe(701);
    });
});