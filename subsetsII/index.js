/**
 * @param {number[]} nums
 * @return {number[][]}
 *  start off with empty set, as this will be a subset of any possible input set
 *  iterate through nums and on every iteration create a copy of every subset in the result set and append the current num to it.
 *  create a string represnetation of subset and check that string against a set of all string representations of added subsets.
 *  if it is not already in the set then add it to the result set and add teh string to the string set
 */
/*
var subsetsWithDup = function(nums){
    let result = [[]]
    let added = new Set()
    for(let n of nums){
        let temp = []
        for(let r of result){
            let next = [...r,n].sort((a,b) => (a-b));
            let nextStr = next.join("-");
            if(!(added.has(nextStr))){
                temp.push(next)
                added.add(nextStr)
            }
        }
        result = [...result, ...temp]
    }
    return result
}
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 * start off with the empty set as that will be a subset of any possible input sequence 
 * for each item in nums append it to every item in the current set,
 * when a duplicate item is encounted only consider each existing result one time, 
 * append the duplicates to the subsets created on that iteration only, not the previous subsets
*/
var subsetsWithDup = function(nums){
    nums.sort((a,b) => (a-b))
    let result = [[]], i = 0
    while(i < nums.length){
        let count = 0
        while(i+count < nums.length && nums[i] === nums[i+count]){count+=1}
        let resultLen = result.length
        for(let j = 0; j < resultLen; j++){
            let cur = [...result[j]]
            for(let k = 0; k < count; k+=1){
                cur.push(nums[i])
                result.push([...cur])
            }
        }
        i+=count
    }
    return result
}
subsetsWithDup([1,2,2])