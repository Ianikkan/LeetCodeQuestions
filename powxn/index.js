/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0){
        return 1
    }
    if(n < 0){
        x = 1 / x
        n *= -1
    }
    let result = x
    for(let i = 0; i < n; i+=1){
        result *= x 
    }
    return result 
};

myPow(2.00000, 10)