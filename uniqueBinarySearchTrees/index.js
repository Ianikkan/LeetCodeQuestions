/**
 * @param {number} n 
 * @return {number}
 */
var numTrees = function(n){
    let dp = [1]
    for(let i = 1; i <=n; i+= 1){
        let num = 0
        for(let j = 1; j <=i; j+=1){
            num += dp[j-1] * dp[i-j]
        }
        dp.push(num)
    }
    return dp.pop()
}

numTrees(3)