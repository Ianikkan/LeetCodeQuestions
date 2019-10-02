// current solution may have a problem with duplicate values
var optimize = function(a,b,target){
    a.sort((a,b) => {
        return a[1] - b[1]
    })
    b.sort((a,b) => {
        return a[1] - b[1]
    })

    let ap = 0, bp = b.length - 1
    let bestPairs = []
    let bestPairSum =  Number.MIN_SAFE_INTEGER;

    while (ap < a.length && bp >= 0){
        let testSum = a[ap][1] + b[bp][1]
        if (testSum <= target &&(bestPairs.length == 0 || (testSum >= bestPairSum  ))){
            if (testSum > bestPairSum) {
              bestPairs = [];
              bestPairSum = testSum
            }
            bestPairs.push([a[ap][0],b[bp][0]])
            m
        }
        if (testSum > target){
            bp--
        }
        else {
            ap++
        }

    }
    return bestPairs


}
optimize([[1, 3], [2, 5], [3, 7], [4, 10]],[[1, 2], [2, 3], [3, 4], [4, 5]], 10 )