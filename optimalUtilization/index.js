// current solution may have a problem with duplicate values
var utilizeOptimally = (a, b, target) => {
    a.sort((a , b) =>  a[1] - b[1])
    

    b.sort((a, b) =>  a[1] - b[1])
    result = []

    let aPointer = 0
    let bPointer = b.length - 1
    let best = null

    while(aPointer < a.length && bPointer >= 0){
        curr = a[aPointer][1] + b[bPointer][1]
        if(curr === best){
            result.push([a[aPointer][0], b[bPointer][0]])
        }
        if (curr > best && curr <= target){
            best = curr
            result = [a[aPointer][0], b[bPointer][0]]
        }

        if (curr > target){
            bPointer --;
        }
        else{
            aPointer ++
        }
    }

    return result
}


utilizeOptimally([[1, 3], [2, 5], [3, 7], [4, 10]],[[1, 2], [2, 3], [3, 4], [4, 5]], 10 )