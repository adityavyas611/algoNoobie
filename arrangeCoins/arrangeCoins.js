const arrangeCoins = function(n) {
    let count = 0;
        
    for(let i=1; i <= n; i++){
        if(i !== n) {
            count ++;
            n -= i;
        } else count ++;
    }
    return count;
};

module.exports = arrangeCoins;