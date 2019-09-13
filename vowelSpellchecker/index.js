/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    let words = {}, lowerWords = {}, noVowelWords = {}
    let noVowelReg = new RegExp('[aeiou]','g');
    for(let w of wordlist){
        words[w] = "";
        let lowerW = w.toLowerCase();
        if(!(lowerW in lowerWords)){
            lowerWords[lowerW] = w;
        }
        let noVowelW = w.toLowerCase().replace(noVowelReg, '*')
        if(!(noVowelW in noVowelWords)){
            noVowelWords[noVowelW] = w;
        }
    }
    let result = []
    for (let q of queries){
        if(q in words){
            result.push(q);
            continue;
        }
        else if(q.toLowerCase() in lowerWords){
            result.push(lowerWords[q.toLowerCase()]);
            continue;
        }
        else if( q.toLowerCase().replace(noVowelReg, '*') in noVowelWords){
            result.push(noVowelWords[q.toLowerCase().replace(noVowelReg, '*')]);
        }
        else{
            result.push("");
        }
    }
    return result;
    
};


let wList = ["KiTe","kite","hare","Hare"]
let q = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]

spellchecker(wList, q)