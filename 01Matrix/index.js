var updateMatrix = function(matrix) {
    let result = [], q = []
    for(let i = 0; i < matrix.length; i++){
        result.push([])
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                result[i].push(0)
                q.push([i,j])
            }
            else{
                result[i].push(Number.MAX_SAFE_INTEGER)
            }
        }
    }
    let moves = [[1,0], [-1,0], [0,1],[0,-1]]
    while(q.length > 0){
        let cur = q.shift();
        let [curRow, curCol] = cur
        for(let m of moves){
            let tempR = curRow + m[0]
            let tempC = curCol + m[1]
            if(0 <= tempR && tempR < matrix.length && 0 <= tempC && tempC < matrix[0].length){
                if(result[tempR][tempC] > result[curRow][curCol] + 1){
                    result[tempR][tempC] = result[curRow][curCol] + 1
                    q.push([tempR, tempC])
                }
            }
        }
    }
    return result;
}

let input = [[0,0,0],
 [0,1,0],
 [0,0,0]]

 updateMatrix(input)