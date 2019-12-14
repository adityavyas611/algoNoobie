/*var majorityElement = function(nums) {
    const obj = {};
    const min = Math.floor(nums.length / 2);
    
    for(let i = 0; i < nums.length; i += 1){
        if(obj[nums[i]] === undefined) {
            obj[nums[i]] = 1; 
        } else {
            obj[nums[i]] += 1;
        }
    } 
                
    for(let j of Object.keys(obj)){
        if(obj[j] > min) return j;
    }
};*/

/*var majorityElement = function(nums) {
    nums.sort((a,b) => a - b);
    return nums[Math.floor(nums.length/2)];
}*/

const majorityElement = (nums) => {
    if (nums.length === 0) return 0;
    const map = {};
    const len = nums.length / 2;
    for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
    if (map[n] > len) return n;
  }
}

module.exports = majorityElement;