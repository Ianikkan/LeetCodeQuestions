/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid.length === 0 || obstacleGrid[0].length === 0 || obstacleGrid[0][0] === 1){
        return 0
    }
    let dp = []
    for(let i = 0; i < obstacleGrid.length; i+=1){
        dp.push([])
        for(let j = 0; j < obstacleGrid[0].length; j+=1){
            dp[i].push(0)
        }
    }
    dp[0][0] = 1
    for(let i = 0; i < obstacleGrid.length; i+=1){
        for(let j = 0; j < obstacleGrid[0].length; j+=1){
            if(i === 0 && j === 0){
            }
            else if(obstacleGrid[i][j] === 1){
                dp[i][j] = 0
            }
            else if(i === 0){
                dp[i][j] = dp[i][j-1]

            }
            else if(j === 0){
                dp[i][j] = dp[i-1][j]
            }
            else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[obstacleGrid.length-1][obstacleGrid[0].length-1]
    
};