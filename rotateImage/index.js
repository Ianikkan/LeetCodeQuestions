/**
 * Roatates a 2d array 90 degrees clock wise in place
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length - 1;
    
    const rotateUnit = (i,j) => {
        let temp, temp2;
        //first 
        temp = matrix[j][n-i];
        matrix[j][n-i] = matrix[i][j];

        //second 
        temp2 = matrix[n-i][n-j];
        matrix[n-i][n-j] = temp;
        temp = temp2;

        //third 
        temp2 = matrix[n-j][i];
        matrix[n-j][i] = temp;
        temp = temp2;

        //fourth 
        matrix[i][j] = temp;

    }

    for(let i = 0; i < n; i++)
        for(let j = i; j < n - i; j++){
            rotateUnit(i,j);
        }

}

