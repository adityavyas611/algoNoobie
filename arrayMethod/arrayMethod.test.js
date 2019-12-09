const arrayMethod = require('./arrayMethod');

describe('mapFilterAndReduce', () => {
  it(`maps over an array and filters firstName for a length less than 5 and reduces
    into an object with the key as the name and value as the length`, () => {
    const arr = arrayMethod([{
      firstName: 'Tony',
    }, {
      firstName: 'Steve',
    }, {
      firstName: 'Tchala',
    }, {
      firstName: 'Thor',
    }]);
    expect(arr).toEqual({
      Tony: 4,
      Thor: 4,
    });
  });
});