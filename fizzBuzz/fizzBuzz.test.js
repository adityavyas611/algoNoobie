const fizzBuzz = require('./fizzBuzz');

describe('Check for Intersection', () => {
    test('should return true', () => {
        expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    });

    test('should return false', () => {
        expect(fizzBuzz(1)).toEqual(["1"]);
    });
})