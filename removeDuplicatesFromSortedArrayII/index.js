var removeDuplicates = function(nums){
    if(nums.length < 3){
        return nums.length
    }
    let swp = 2
    for(let i = 2; i < nums.length; i++){
        if(nums[i] > nums[swp-2]){
            nums[swp++] = nums[i]
        }
    }
    return swp
}