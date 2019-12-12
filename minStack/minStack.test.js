const minStack = require('./minStack');

const minstack = new minStack();


describe('Stack Implementation using Object',() => {
    test('should return array of values',() => {
        expect(minstack.push(-2)).toEqual(undefined);
        expect(minstack.push(0)).toEqual(undefined);
        expect(minstack.push(-3)).toEqual(undefined);
    });

    test('should return min value',() => {
        expect(minstack.getMin()).toEqual(-3);
    });

    test('should return min value',() => {
        expect(minstack.pop()).toEqual(-3);
    });
    
    test('should return top value',() => {
        expect(minstack.top()).toBe(0);
    });

    test('should return top value',() => {
        expect(minstack.getMin()).toBe(-2);
    });
});