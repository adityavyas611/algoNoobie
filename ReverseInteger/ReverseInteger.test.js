const ReverseInteger = require('./ReverseInteger');

describe('adding two values of array === target',() => {
    test('should return reverse of positive integer', () => {
        expect(ReverseInteger(123)).toEqual(321);
    });

    test('should return reverse of reverse negative integer', () => {
        expect(ReverseInteger(-456)).toEqual(-654);
    });

    test('should return integer without 0 in value', () => {
        expect(ReverseInteger(120)).toEqual(21);
    });
});