function curryingSum(x){
    let sum = x;
    return function resultFn(y){
        sum += y;
        resultFn.result = sum;
        return resultFn;
    }
}

module.exports = curryingSum;
