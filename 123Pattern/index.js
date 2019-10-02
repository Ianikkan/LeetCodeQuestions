/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let i = Number.MAX_SAFE_INTEGER
    for (let j = 0; j < nums.length-1; j++){
        i = Math.min(i, nums[j])
        for(let k = j+1; k < nums.length; k++){
            if (i < nums[k] && nums[k] < nums[j]){
                return true
            }
        }
    }
   
return false
};

