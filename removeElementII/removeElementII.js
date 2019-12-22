const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) break;

      if (j - i > 1) {
        nums.splice(j, 1);
        j--;
      }
    }
  }

  return nums.length;
};

module.exports = removeDuplicates;