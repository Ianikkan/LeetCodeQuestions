/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0
    for(let i = 0; i < 2; i+=1){
        for(let j = left; j < nums.length; j+=1){
            if(nums[j] === i){
                [nums[left], nums[j]] = [nums[j], nums[left]]
                left += 1
            }
        }
    }
    
};