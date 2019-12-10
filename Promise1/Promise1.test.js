const Promise1 = require('./Promise1');

describe('Implement Promise to return data', () => {
    test('should return a new promise after 2000',() => {
        expect(Promise1('hello world')).resolves.toEqual('hello world');
    })
});