/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [], board = [];
    for(let i = 0; i < n; i++){
        board.push([]);
        for(let j = 0; j < n; j++){
            board[i].push('.')
        }
    }
    let isValid = (row,col) =>{
        let diagLeftRow = Math.max(0, row - col), diagLeftCol = Math.max(0, col - row)
        let diagRightRow = Math.max(0, row - (n-(col+1))), diagRightCol = Math.min(n-1, col + row)
        for(let i = 0; i < n; i++){
            if(board[row][i] === 'Q' || board[i][col] === 'Q' || ((diagLeftRow < n && diagLeftCol < n) && board[diagLeftRow++][diagLeftCol++] === 'Q') ||
            ((diagRightRow < n && diagRightCol >=0) && board[diagRightRow++][diagRightCol--] === 'Q')  )
                return false
        }
        return true
        
    }
    let generate = row =>{
        if(row >= n){
            let temp = board.map(e => e.join(""))
            result.push(temp)
            return;
        }
       for(let i = 0; i < n; i++){
           if(isValid(row,i)){
               board[row][i] = 'Q'
               generate(row+1)
               board[row][i] = '.'
           }
       }
    }
    generate(0);
    return result;
};