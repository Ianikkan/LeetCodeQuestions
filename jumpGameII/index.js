/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums){
    let jumps = 1, curJumpIndex = nums[0], nextJumpIndex = nums[0]
    for(let i = 0; i < nums.length && curJumpIndex < nums.length-1; i+=1){
         if(i+nums[i] > nextJumpIndex){
            nextJumpIndex = i+nums[i]
        }
        if(i === curJumpIndex){
            jumps+=1
            curJumpIndex = nextJumpIndex
        }
       
    }
    return jumps

}

jump([1,1,1,1])