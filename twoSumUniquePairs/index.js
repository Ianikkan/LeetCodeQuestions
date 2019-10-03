var findPairs = (nums, target) => {
    let occuredNums = new Set()
    let usedNums = new Set()
    let pairs = 0
    for(let n of nums){
        if(occuredNums.has(target-n)){
            if(!(usedNums.has(Math.max(target-n, n)))){
                pairs++
                usedNums.add(Math.max(n, target-n))
            }
        }
        occuredNums.add(n)
    }
    return pairs

}
findPairs([1,5,1,5],6)