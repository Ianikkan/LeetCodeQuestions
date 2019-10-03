/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target){
    let height = matrix.length, width = height > 0 ? matrix[0].length : 0 
    if (height === 0){
        return false
    }
    let r = 0, c = width - 1
    while(r < height && c >= 0){
        if(matrix[r][c] > target){
            c-- 
        }
        else if(matrix[r][c] < target){
            r++
        }
        else{
            return true
        }
    }
    return false

}