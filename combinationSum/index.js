var combinationSum = function(candidates, target){
    if(!candidates || candidates.length < 1){
        return [[]]
    }
    candidates.sort((a,b) => (a-b))
    let result = []
    let backtrack = (curSum, cur, pos) =>{
        if (curSum === target) {
            result.push([...cur]);
        }
        for(let i = pos; i < candidates.length; i+=1){
            if(curSum + candidates[i] > target){
                break
            }
            cur.push(candidates[i])
            backtrack(curSum+candidates[i],cur,i)
            cur.pop()

        }
    }
    backtrack(0, [], 0)
    return result;
}
combinationSum([2,3,6,7],7)