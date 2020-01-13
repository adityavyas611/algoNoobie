const fizzBuzz = function(n) {
    const FB = [];
    
    for(let i = 1; i <= n ; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
        FB.push('FizzBuzz');
    }else if(i % 3 === 0) {
        FB.push('Fizz');
    }else if(i % 5 === 0) {
        FB.push('Buzz');
    }else{
        FB.push(i);
    }
    }
    return FB.map(String);
};

module.exports = fizzBuzz;