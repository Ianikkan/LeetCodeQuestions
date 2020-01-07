/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result =[]
   if(!candidates || candidates.length < 1){
       return result 
   } 
   candidates.sort((a,b)=>(a-b))

   let dfs = (target, curNums, pos)=>{
       if(target === 0){
           result.push([...curNums])
           return 
       }
       if(target < 0){return }
       for(let i = pos; i < candidates.length;i+=1){
           if(i > pos && candidates[i] === candidates[i-1]){
               continue
           }
           curNums.push(candidates[i])
           dfs(target-candidates[i], curNums, i+1)
           curNums.pop()
       }
   }

   dfs(target, [], 0)
   return result
};
combinationSum2([2,5,2,1,2],5)