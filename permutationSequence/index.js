/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let factorials = [1], result = [1]
    for(let i = 2; i < n; i+=1){
        factorials.push(i*factorials[i-2])
        result.push(i)
    }
    if(n > 1){
        result.push(n)
    }
    let curPerm = 1, pos = 0
    while(curPerm < k){
        let step = factorials.pop()
        let i = 1
        while(curPerm + (i*step) <= k){
            i+=1
        }
        curPerm += (i-1)*step
        i += (pos-1);
        [result[i], result[pos]] = [result[pos], result[i]]
        for(let j = i; j > pos+1; j-=1){
            if(result[j] < result[j-1]){
                [result[j], result[j-1]] = [result[j-1], result[j]]
            }
        }
        pos+=1
    }
    return result.join("")
};

getPermutation(4,19)