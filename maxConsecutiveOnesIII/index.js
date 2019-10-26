var longestOnes = function (A,K){
    if(!A){
        return 0
    }
    let r = [], longest = 0, left = right = 0
    while(right < A.length){
        if(A[right] === 0){
            if(r.length === K){
                if(K === 0){
                    right++
                    left = right
                }
                else{
                    left = r.shift() + 1
                    r.push(right)
                    right++
                }
            }
            else{
                r.push(right)
                right++
            }
        }
        else{
            right++
        }
         longest = Math.max(longest, right - left)
    }
    return longest
}

let  A = [1,1,1,0,0,0,1,1,1,1,0], K = 1
longestOnes(A,K)