/**
 * @param {number[]} nums
 * @return {number[][]}
 * approach starts with empty set and then considers each number individually.
 * creates a new set at each step with the current number appended to each item in existing set.
 * then appends new set to existing set.
 * LC calls this recursive but no recursive call is ever made so idk
 */
var subsets = function(nums) {
    let result = [[]]
    for(let n of nums){
        let next = []
        for(let r of result){
            next.push([...r, n])
        }
        result = [...result, ...next]
    }
    return result
};
subsets([1,2,3])