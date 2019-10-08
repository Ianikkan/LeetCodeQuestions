/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [], right = [], ans = [];
    left.push(1);
    for(let i = 1; i < nums.length; i++) {
        left.push(nums[i-1] * left[i-1])
    }
    
    right.push(1)
    nums.reverse()
    for(let i = 1; i < nums.length; i++) {
        right.push(nums[i-1] * right[i-1])
    }
    right.reverse()
    ans.push(right[0])
    for(let i = 1; i < nums.length-1; i++){
        ans.push(left[i] * right[i])
    }
    ans.push(left[nums.length-1])
   return ans 
    
};

productExceptSelf([1,2,3,4])