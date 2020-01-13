const intersection = function(nums1, nums2) {
    return nums1.filter((num) => {
        return nums2.includes(num);
    }).filter((element, index, arr) => arr.indexOf(element) === index);
};

module.exports = intersection;