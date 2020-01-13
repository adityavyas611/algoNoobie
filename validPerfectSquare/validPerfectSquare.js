const isPerfectSquare = function(num) {
    
    for(let i = 0; i*i <= num ; i++) {
        if(num === i*i) return true;
    }
    return false;
};

module.exports = isPerfectSquare;