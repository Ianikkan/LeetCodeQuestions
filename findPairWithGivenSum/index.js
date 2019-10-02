var findPair = (nums, target) => {
    let seen = {};
    target -= 30;
    pair = []
    for(let i = 0; i < nums.length; i++){
        if(target-nums[i] in seen){
            if (pair.length == 0 || Math.max(pair[0], pair[1]) < Math.max(i, seen[target-nums[i]])){
                pair[0] = seen[target-nums[i]]
                pair[1] = i
            }
        }
        seen[nums[i]] = i
    }
    return pair
}
let nums = [20, 50, 40, 25, 30, 10], target = 90
findPair(nums, target)