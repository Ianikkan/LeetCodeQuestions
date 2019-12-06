/**
 * 
 * @param {numer[]} nums 
 * @return {void}
 */
var nextPermutation = function(nums){
    // starting from right side of nums find first element that is greater than the element to the left, call this l
    for(let i = nums.length - 1; i > 0; i--){
        if(nums[i] > nums[i-1]){
            let l = i - 1, toSwap = i
            // find the smallest element to right of l that is greater than l, call this toSwap
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] > nums[i-1]){
                    toSwap = j
                }
            }
            // swap  l and toSwap
                [nums[toSwap], nums[l]] = [nums[l],nums[toSwap]]
                l+=1
                r = nums.length - 1
            // reverse all elemets from l+1 to end of nums 
                while(r > l){
                    [nums[r], nums[l]] = [nums[l], nums[r]]
                    r -= 1
                    l += 1
                }
            return
            }
        }
    nums.reverse()
    }
nextPermutation([1,2,3])