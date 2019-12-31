const singleNumber = (nums) => {
    
  const map = {};
  
  for(let i = 0; i < nums.length; i+= 1) {
      if(map[nums[i]] === undefined) {
          map[nums[i]] = 1;
      }else {
          map[nums[i]] += 1;
      }
  }
  
  for(key of Object.keys(map)) {
      if(map[key] === 1) {
          return key;
      }
  }
};

module.exports = singleNumber;