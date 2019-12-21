const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let val = 0;
    nums.forEach(num => {
        maxSum = Math.max(maxSum, val += num);
        val = Math.max(val, 0);
    })
    return maxSum;
};

module.exports = maxSubArray;