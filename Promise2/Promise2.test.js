const Promise2 = require('./Promise2');

describe('Implement Promise to return data', () => {
    test('should return a new promise after 2000',() => {
        expect(Promise2(3)).resolves.toEqual("odd");
    });

    test('should return a new promise after 2000',() => {
        expect(Promise2(4)).rejects.toEqual("even");
    });

    test('should return a new promise after 2000',() => {
        expect(Promise2(5)).resolves.toEqual("odd");
    });

    test('should return a new promise after 2000',() => {
        expect(Promise2(6)).rejects.toEqual("even");
    });
});