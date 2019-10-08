/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0){
        return 0
    }
    let height = grid.length, width = grid[0].length
    let dr = [0,1,0,-1]
    let dc = [1,0,-1,0]
    let search = function(row, col){
        let stack = [];
        stack.push([row,col]);
        grid[row][col] = 'V';
        while(stack.length > 0){
            let cur = stack.pop();
            for(let d = 0; d < 4; d++){
                let tempRow = cur[0] + dr[d]
                let tempCol = cur[1] + dc[d]
                if(tempRow >= 0 && tempRow < height && tempCol >=0 && tempCol < width && grid[tempRow][tempCol] === '1'){
                    stack.push([tempRow,tempCol])
                    grid[tempRow][tempCol] = 'V'
                }
            }
            
        }
    }
    let result = 0
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(grid[i][j] === '1'){
                result++
                search(i,j)
            }
        }
    }
    return result
};