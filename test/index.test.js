const returnMyName = require('./index');

describe('test run', () => {
  test('should return Aditya', () => {
    expect(returnMyName()).toBe('Aditya');
  });
});