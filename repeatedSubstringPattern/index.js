/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(!s || s.length < 2){
        return false;
    }
    let checkPattern = pattern =>{
        if(s.length % pattern.length !== 0){
            return false
        }
        for(let i = pattern.length; i <=  s.length; i+= pattern.length){
            let cur = s.slice(i - pattern.length, i) 
            if(cur !== pattern){
                return false
            }
        }
        return true
    }
    let ceil = s.length / 2 + 1
    for(let i = 1; i < ceil; i++){
        if(checkPattern(s.slice(0,i))){
            return true
        }
    }
    return false
    
};
