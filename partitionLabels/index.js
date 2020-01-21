/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    let getLastPos = function(){
        let pos = {}
        for(let i = 0; i < S.length; i+=1){
            pos[S[i] = i]
        }
        return pos
    }
    let getLengths = function(pos){
        let result = []
        let minIndex = pos[S[0]], start = 0
        for(let i = 0; i < S.length; i+=1){
            let ch = S[i]
            minIndex = Math.max(minIndex, pos[ch])
            if(minIndex === i){
                result.push(i - start + 1)
                start = i
            }
        }
        return result
    }
    return getLengths(getLastPos())
    
};

partitionLabels("ababcbacadefegdehijhklij")