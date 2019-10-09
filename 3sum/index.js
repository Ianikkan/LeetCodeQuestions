/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => (a-b));
    let leng = nums.length - 1
    let result = []
    var searchFromFixed = (target, left) => {
        let l = left+1, r = leng
        while(l < r){
            let cur = nums[l] + nums[r]
            if(cur === target){
                result.push([nums[left], nums[l], nums[r]])
                l++
                r--
                while(l < r && nums[l] === nums[l-1]){
                    l++
                }
                while(r > l && nums[r] === nums[r+1]){
                    r--
                }

            }
            else if( cur < target){
                l++
            }
            else{
                r--
            }
        }
    }
    for(let i = 0; i < leng-1; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue
        }
        searchFromFixed(0-nums[i], i)
    }
    return result
    
};
threeSum([-1,0,1,2,-1,-4])