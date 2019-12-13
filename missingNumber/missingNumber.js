const missingNumber = function(nums) {
  let total = nums.length;

  for (let i = 0; i < nums.length; i++) {
    total += i - nums[i];
  }

  return total;
};

module.exports = missingNumber;
