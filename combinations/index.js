/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    let recurse = function(nums, k, begin){
        if(k === 0){
            result.push([...nums])
            return;
        }
        for(let i = begin; i <= n; i+=1){
            nums.push(i)
            recurse(nums, k-1, i+1)
            nums.pop(i)
        }
    }
    recurse([], k, 1)
    return result
};

combine(4,2)