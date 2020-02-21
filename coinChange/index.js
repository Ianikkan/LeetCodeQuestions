/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = {}
    let dfs = function(curAmount){
        if(curAmount in dp){
            return dp[curAmount]
        }
        if(curAmount < 0){
            return -1
        }
        if(curAmount === 0){
            return 0;
        }
        let res = Number.MAX_VALUE;
        for(let c of coins){
            let temp = dfs(curAmount - c)
            if(temp >= 0){
                res = Math.min(res, temp + 1)
            }
        }
        dp[curAmount] = res
        return res
    }
    dfs(amount)
    if(dp[amount] === Number.MAX_VALUE){
        return -1
    }
    return dp[amount]
};

coinChange([1,2,5], 5)