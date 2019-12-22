const climbingStairs = require('./climbingStairs');

describe('You are climbing a stair case. It takes n steps to reach to the top.', () => {
    test('should return 2 as 1+1, 2', () => {
        expect(climbingStairs(2)).toBe(2);
    });

    test('should return 3 as 1+1+1, 2+1, 1+2', () => {
        expect(climbingStairs(3)).toBe(3);
    });

    test('should return 0 as 0', () => {
        expect(climbingStairs(0)).toBe(0);
    });

    test('should return 1 as 1', () => {
        expect(climbingStairs(1)).toBe(1);
    });
});