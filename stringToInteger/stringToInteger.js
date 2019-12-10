const stringToInteger = str => {
    
    str = str.trim();
    let result = str.match(/^[-+\s+]?\d+/);
        
    if (!result) return 0;
    result = parseInt(result, 10);
    
    if (result >= 2147483648) {
        result = 2147483647;
    }else if(result < -2147483648) {
        result = -2147483648;
    }
    
    return result;
};

module.exports = stringToInteger;