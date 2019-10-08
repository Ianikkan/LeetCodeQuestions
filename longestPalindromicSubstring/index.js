/**
 * @param {string} s
 * @return {string}
 */
/** 
 * DP solution
var longestPalindrome = function(s) {
    if(!s || s.length === 0){
        return ""
    }
    let L = 0, R = 0
    let dp = []
    for(let i = 0; i < s.length; i++){
        dp.push([])
        for (let j = 0; j < s.length; j++) {
          if (i == j) {
            dp[i].push(true);
          } else if (j - i === 1 && s[i] === s[j]) {
            dp[i].push(true);

            L = i;
            R = j;
          } else {
            dp[i].push(false);
          }
        }
        }
    
    for(let i = 0; i < s.length-2; i++){
        for(let j = i+2; j < s.length; j++){
            let l = j - (2+i)
            let r = j
            if(s[l] === s[r] && dp[l+1][j-1]){
                dp[l][r] = true
                L = l
                R = r
            }

        }
    } 
    return s.slice(L,R+1)
    }
 */

 var longestPalindrome = function(s){
     if(!s || s.length === 0){
         return ""
     }
     let L = 0 , R = 0
     var testPalindrome = function(l,r){
         while(l >= 0 && r < s.length && s[l] === s[r]){
             if(l === 0 || r === s.length - 1 || s[l-1] !== s[r+1]){
                 break
             }
             l--
             r++
         }
         if(r - l  > R - L && s[r] === s[l]){
             R = r
             L = l
         }
     }
     for(let i = 0; i < s.length-1; i++){
         testPalindrome(i,i)
         testPalindrome(i,i+1)
     }
     testPalindrome(s.length-1, s.length-1)
     return s.slice(L,R+1)

 }
console.log(longestPalindrome("cbbc"))