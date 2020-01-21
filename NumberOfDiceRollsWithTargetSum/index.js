/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(d, f, target) {
    let memo = {}
    let breakDown = (d,t) =>{
        if(d === 0 && t === 0){
            return 1
        }
        if(d === 0){
            return 0
        }
        let memoStr = '' + d + '-' + t
        if(memoStr in memo){
            return memo[memoStr]
        }
        let result = 0
        for(let i = 1; i <= f; i+=1){
            result += breakDown(d-1,t-i)
        }
        memo[memoStr] = result
        return memo[memoStr]
    }
   return breakDown(d,target) % (Math.pow(10,9) + 7)

    
};
let x = numRollsToTarget(2,6,7)