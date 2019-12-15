/* const searchInsert = (nums, target) => {
     if(!nums.includes(target)) {
        nums.push(target)
        nums.sort((a,b) => a-b)
        return nums.indexOf(target)
    }
    return nums.indexOf(target);
};*/

const searchInsertPosition = (nums, target) => {
    return nums.includes(target) ? nums.indexOf(target) : nums.filter(elem => elem < target).length;
}

module.exports = searchInsertPosition;