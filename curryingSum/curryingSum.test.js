const curryingSum = require('./curryingSum');

describe('Find the element from the sorted array', () => {
    test('should return index of max element', () => {
        expect(curryingSum(1)(1).result).toBe(2);
    });

    test('should return index of max element', () => {
        expect(curryingSum(1)(2)(3).result).toBe(6);
    });

    test('should return 0 as we passed two elements', () => {
        expect(curryingSum(1)(2)(3)(4)(5)(6).result).toBe(21);
    });
});