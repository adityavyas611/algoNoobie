let minStack = function (){
    this.count = 0;
    this.storage = {};
};

minStack.prototype.push = function (x) {
    this.storage[this.count] = x;
    this.count += 1;
};

minStack.prototype.pop = function () {
    
    if(this.count === 0) return 0;
    
    this.count -= 1;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
};

/**
 * @return {number}
 */
minStack.prototype.top = function() {
    return this.storage[this.count - 1];
};

/**
 * @return {number}
 */
minStack.prototype.getMin = function(){
    let arr = Object.values(this.storage).map(value => value );
    return Math.min(...arr);
};

module.exports = minStack;