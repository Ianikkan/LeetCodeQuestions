/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1){
        return 0
    }
    let binarySearch = (start, end) => {
        let mid = Math.floor((start + end) / 2)
        if(mid > 0 && mid < nums.length-1){
            if(nums[mid-1] < nums[mid] && nums[mid+1] < nums[mid]){
                return mid
            }
        }
        if(mid === 0 && nums[mid+1] < nums[mid]){
            return mid
        }
        if(mid === nums.length-1 && nums[mid] > nums[mid-1]){
            return mid
        }
        if(nums[mid] > nums[mid+1]){
            return binarySearch(start, mid-1)
        }
        return binarySearch(mid+1, end)
    }
    return binarySearch(0, nums.length-1)
};