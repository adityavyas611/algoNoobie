const merge = (nums1, m, nums2, n) => {
    
  nums1.splice(m, nums1.length);
  nums1.push(...nums2.splice(0, n));
  return nums1.sort((a,b) => a - b );
};

module.exports = merge;