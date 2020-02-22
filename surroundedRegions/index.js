/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(!board || board.length === 0){
        return
    }
    let  dirs = [[0,1],[0,-1],[1,0], [-1,0]]
    let dfs = function(row, col){
        board[row][col] = 'S'
        for(let d of dirs){
            let nRow = row + d[0], nCol = col + d[1]
            if(nRow >= 0 && nRow <board.length && nCol >= 0 && nCol < board[0].length && board[nRow][nCol] === 'O'){
                dfs(nRow, nCol)
            }
            
        }
    }
    for(let i = 0; i < board.length; i++){
        if(board[i][0] === 'O'){
            dfs(i,0)
        }
        if(board[i][board[0].length-1] === 'O'){
            dfs(i, board[0].length-1)
        }
    }
    for(let i = 0; i < board[0].length; i++){
        if(board[0][i] === 'O'){
            dfs(0,i)
        }
        if(board[board.length-1][i] === 'O'){
            dfs(board.length-1, i)
        }
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'S'){
                board[i][j] = 'O'
            }
            else{
                board[i][j] = 'X'
            }
        }
    }
    
   
};