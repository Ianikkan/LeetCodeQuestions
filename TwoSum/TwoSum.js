/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i];
        let currTarget = target - curr;
        if(map[currTarget] !== undefined){
            return [map[currTarget],i]
        }
        map[curr] = i;
    }
    
};
