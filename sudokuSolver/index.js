/**
 * @param{character[][]} board
 * @return {void}
 */
var solveSudoku = function(board){
    let checkValid = function(row, col, val){
        let gridRow = Math.floor(row / 3) * 3, gridCol = Math.floor(col / 3)  *3
        for(let i = 0; i < 9; i+=1){
            if(board[row][i] === val || board[i][col] === val || board[gridRow][gridCol] == val){
                return false
            }
            gridCol +=1
            if(gridCol === 3 || gridCol === 6 || gridCol === 9){
                gridRow += 1
                gridCol -=3
            }
        }
        return true
    }

    let backtrack = function(row, col){
        if(row === 9){
            return true
        }
        let nextRow = col === 8 ? row + 1: row
        let nextCol = col === 8 ? 0 : col+1
        if(board[row][col] !== '.'){
           return backtrack(nextRow, nextCol)
            
        }
        for (let i = 1; i <= 9; i += 1) {
          if (checkValid(row, col, i.toString(10))) {
            board[row][col] = i.toString(10);
            if(!backtrack(nextRow, nextCol)){
                board[row][col] = '.';
            }
            else{
                return true
            }
          }
        }
        return false

    }
    backtrack(0,0)
}
solveSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])