/**
 * @param{character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board){
    let len = board.length
    let subGridLen = len / 3
    let checkCol = function(col){
        let occured = new Set()
        for(let i = 0; i < len; i+=1){
            let ch = board[i][col]
            if(ch === '.'){
                continue
            }
            if(occured.has(ch)){
                return false
            }
            occured.add(ch)
        }
        return true
    }
    let checkRow = function(row){
        let occured = new Set()
        for(let i = 0; i < len; i+=1){
            let ch = board[row][i]
            if(ch === '.'){
                continue
            }
            if(occured.has(ch)){
                return false
            }
            occured.add(ch)
        }
        return true
    }
    let checkSubGrid = function(row, col){
        let occured = new Set()
        for(let i = row; i < row + subGridLen; i+=1){
            for(let j = col; j < col + subGridLen; j+=1){
                let ch = board[i][j]
                if(ch === '.'){
                    continue
                }
                if(occured.has(ch)){
                    return false
                }
                occured.add(ch)
            }
        }
        return true
    }
    for(let i = 0; i < len; i+=1){
        if(!(checkCol(i) && checkRow(i))){
            return false
        }
    }
    for(let i = 0; i < len; i+=subGridLen){
        for(let j = 0; j < len; j+= subGridLen){
            if(!checkSubGrid(i,j)){
                return false
            }
        }
    }
    return true
}