/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let charCounts = new Array(26)
    let grouped = {}
    for(let s of strs){
        charCounts.fill(0)
        for(let c of s){
            let offset = c.charCodeAt(0) - 'a'.charCodeAt(0)
            charCounts[offset]+=1
        }
        let countStr = ""
        for(let i = 0; i < 26; i+=1){
            countStr += '#' + charCounts[i] 
        }
        if(countStr in grouped){
            grouped[countStr].push(s)
        }
        else{
            grouped[countStr] = [s]
        }
    }
    return Object.values(grouped)
};