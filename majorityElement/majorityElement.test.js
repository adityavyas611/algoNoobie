const majorityElement = require('./majorityElement');


describe('The majority element is the element that appears more than ⌊ n/2 ⌋ times', () => {
    test('should return 3', () => {
        expect(majorityElement([3,2,3])).toBe(3);
    });

    test('should return 2', () => {
        expect(majorityElement([2,2,1,1,1,2,2])).toBe(2);
    });

    test('should return 0', () => {
        expect(majorityElement([])).toBe(0);
    });

});