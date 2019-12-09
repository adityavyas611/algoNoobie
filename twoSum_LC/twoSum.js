/* Normal Solution Complexity 0(n^2) */

/* const twoSum = (nums, target) => {
    const indiceArray = [];
    for(let i = 0; i < nums.length; i += 1){
        for(let j = i + 1; j < nums.length; j += 1){
            if(nums[i] + nums[j] === target) {
                indiceArray.push(i);
                indiceArray.push(j);
                return indiceArray;
            }
        }
    }
}; */

/* Optimized Solution Complexity 0(n) */

const twoSum = (nums, target) => {
  if (nums.length === 0) {
    return [];
  }

  const indiceObj = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (typeof nums[i] !== "number") {
      return [];
    }

    if (indiceObj[nums[i]] >= 0) {
      return [indiceObj[nums[i]], i];
    }
    indiceObj[target - nums[i]] = i;
  }
};

module.exports = twoSum;
