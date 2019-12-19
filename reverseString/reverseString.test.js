const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('should reverse the string', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
    expect(reverseString('')).toEqual('');
    expect(reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
  });
});