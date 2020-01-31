/**
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    if(A.length < 2){
        return A.length
    }
    let dp = [], longest = 0
    for(let i = 0; i < A.length; i++){
        dp.push({})
        for(let j = 0; j < i; j++){
            let dif = A[i] - A[j]
            if(dif in dp[j]){
                dp[i][dif] = dp[j][dif] + 1
            }
            else{
                dp[i][dif] = 2
            }
            longest = Math.max(longest, dp[i][dif])
        }
    }
    return longest
};