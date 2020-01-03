var searchRange = function(nums, target){
    if(!nums || nums.length < 1){
        return [-1,-1]
    }
    let firstPos = -1, lastPos = -1
    if(nums[0] === target){
        firstPos = 0
    }
    if(nums[nums.length-1] === target){
        lastPos = nums.length-1
    }
    let findLow = () => {
        let low = 0, high = nums.length - 1
        while(low <= high){
            let mid = Math.floor((low + high) / 2)
            if(nums[mid] === target && nums[mid-1] !== target){
                return mid
            }
            if(nums[mid] >= target){
                high = mid-1
            }
            else{
                low = mid+1
            }
        }
        return -1
    }
    let findHigh = () => {
        let low = 0, high = nums.length-1
        while(low <= high){
            let mid = Math.floor((low+high) / 2)
            if(nums[mid] === target && nums[mid+1] !== target){
                return mid
            }
            if(nums[mid] <= target){
                low = mid+1
            }
            else{
                high = mid-1
            }
        }
        return -1
    }
    if(firstPos === -1){
        firstPos = findLow()
    }
    if(lastPos === -1){
        lastPos = findHigh()
    }
    return [firstPos, lastPos]
}
console.log(searchRange([5,7,7,8,8,10],8));