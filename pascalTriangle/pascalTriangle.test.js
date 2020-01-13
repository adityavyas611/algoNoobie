const generate = require('./pascalTriangle');

describe('You are climbing a stair case. It takes n steps to reach to the top.', () => {
    test('should return 2 as 1+1, 2', () => {
        expect(generate(5)).toEqual([
            [1],
           [1,1],
          [1,2,1],
         [1,3,3,1],
        [1,4,6,4,1]
       ]);
    });
})