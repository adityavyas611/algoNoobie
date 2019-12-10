const removeElement = (nums, val) => {

    if(typeof nums !== 'object'){
        throw new Error('nums is not an array!');
    }
    
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i -= 1;
        }
    }
    return nums.length;
};

/* Filter Solution */
/*

const removeElement = (nums, val) => {
    return nums.filter(num => num !== val).length;
} 

*/
module.exports = removeElement;
