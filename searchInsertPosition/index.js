/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target){
    if(!nums || nums.length < 1){
        return 0
    }
    let lo = 0, hi = nums.length - 1
    if(nums[0] >= target){
        return 0
    }
    if(nums[nums.length]-1 <= target){
        return nums.length-1
    }
    while(lo <= hi){
        let mid = Math.floor((lo + hi) / 2);
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] < target &&(mid === nums.length-1 || nums[mid+1] > target)){
            return mid + 1
        }
        
        if(nums[mid] < target){
            lo = mid+1
        }
        else{
            hi = mid-1
        }
    }
    return best

}
searchInsert([1,3,5,6], 7)