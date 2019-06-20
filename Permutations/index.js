/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    var doPermute = function(fixed, nums) {
      if (fixed === nums.length - 1) {
        result.push(nums);
        return;
      }
      for (let i = fixed; i < nums.length; i++) {
        let tempNums = Array.from(nums);
        swap(fixed, i, tempNums);
        doPermute(fixed + 1, tempNums);
      }
    };
    doPermute(0, nums);
    return result;
};



var swap = function(l,r,nums){
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    }

console.log(permute([]));