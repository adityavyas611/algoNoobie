const threeSum = (nums) => {
    let res = [];
      if (nums.length < 3) return res;
      let sort = nums.sort();
      for (let i = 0; i < sort.length - 2; i += 1) {
          if (i > 0 && sort[i] === sort[i - 1]) continue;
          
          for (let j = i + 1, k = sort.length - 1; j < k;) {
              let sum = sort[i] + sort[j] + sort[k];
              if (sum === 0) {
                  res.push([sort[i], sort[j], sort[k]]);
                  j += 1;
                  k -= 1;
                  
                  while (j < k && sort[j] === sort[j - 1]) j += 1;
                  while (j < k && sort[k] === sort[k + 1]) k -= 1;
              }
              else if (sum > 0) k -= 1;
              else j += 1;
          }
      }
      return res;  
  };

  module.exports = threeSum;