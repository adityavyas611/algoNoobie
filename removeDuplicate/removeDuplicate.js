/* Memory Efficient */
/* const removeDuplicates = (nums) => {
    
     if (nums.length === 0) return 0;
    
     let i = 0;
    
     for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}*/

/* Faster Solution*/

const removeDuplicates = (nums) => {
    if(typeof nums !== 'object'){
        throw new Error('nums is not an array!');
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

module.exports = removeDuplicates;
