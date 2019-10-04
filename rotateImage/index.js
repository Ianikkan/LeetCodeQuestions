/**
 * Roatates a 2d array 90 degrees clock wise in place
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let len = matrix.length-1;
    for(let i = 0; i < len; i++){
        for (let j = i; j < len-i; j++){
            let temp = matrix[j][len-i]
            matrix[j][len-i] = matrix[i][j]

            matrix[i][j] = matrix[len-i][len-j]
            matrix[len-i][len-j] = temp

            temp = matrix[len-j][i]
            matrix[len-j][i] = matrix[i][j]

            matrix[i][j] = temp;
        }
    }
}

rotate([[1,2,3],[4,5,6],[7,8,9]])

