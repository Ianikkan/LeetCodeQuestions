var removeDuplicates = function(nums){
    if(!nums || nums.length === 0){
        return 0
    }
    let swapPnt = 0
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[swapPnt]){
            swapPnt += 1
            nums[swapPnt] = nums[i]
        }
    }
    return swapPnt+1
}
removeDuplicates([1,1])