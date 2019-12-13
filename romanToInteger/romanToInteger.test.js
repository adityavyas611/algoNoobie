const romanToInteger = require('./romanToInteger');

describe('Convert Roman Number to Integer Number', () => {
    test('should convert III to 3', () => {
        expect(romanToInteger('III')).toBe(3);
    });

    test('should convert IV to 4', () => {
        expect(romanToInteger('IV')).toBe(4);
    });

    test('should convert IX to 9', () => {
        expect(romanToInteger('IX')).toBe(9);
    });

    test('should convert LVIII to 58', () => {
        expect(romanToInteger('LVIII')).toBe(58);
    });

    test('should convert MCMXCV to 1995', () => {
        expect(romanToInteger('MCMXCV')).toBe(1995);
    });
});