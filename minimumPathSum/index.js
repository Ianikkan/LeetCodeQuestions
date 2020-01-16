/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length === 0 || grid[0].length === 0){
        return 0
    }
    let height = grid.length, width = grid[0].length
    let dp = []
    for(let i = 0; i < height; i+=1){
        dp.push([])
        for(let j = 0; j < width; j+=1){
            dp[i].push(0)
        }
    }
    dp[0][0] = grid[0][0]
    for(let i = 0; i < height; i+=1){
        for(let j = 0; j < width;j += 1){
            if(i === 0 && j === 0){
            }
            else if(i === 0){
                dp[i][j] = grid[i][j]+ dp[i][j-1]
            }
            else if(j === 0){
                dp[i][j] = grid[i][j] + dp[i-1][j]
            }
            else {
                dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[height - 1][width-1]
    
};