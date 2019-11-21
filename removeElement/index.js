/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums,val){
    if(!nums  || nums.length === 0){
        return 0
    }
    let churn = i => {
        while(i >= 0 && nums[i] === val){
            i--
        }
        return i
    }
    let toSwap = churn(nums.length - 1)
    for(let i = 0; i < toSwap; i++){
        if(nums[i] === val){
            [nums[i], nums[toSwap]] = [nums[toSwap], nums[i]]
            toSwap = churn(toSwap)
        }
    }
    return toSwap + 1
}

removeElement([2,2,2],0)
