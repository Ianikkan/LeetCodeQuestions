/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s || s.length === 0 || s[0] === '0'){
        return 0
    }
    let dp = [1]
    let num = parseInt(s.slice(0,2))
    if(num > 10 && num <= 26 && num !== 20 &&  s[2] !== '0'){
        dp.push(2)
    }
    else{
        if(num > 26 && s[1] === '0'){
            return 0
        }
        dp.push(1)
    }
    for(let i = 2; i < s.length; i+=1){
        if(s[i] === '0'){
            if(s[i-1] === '1' || s[i-1] === '2'){
                dp.push(dp[i-1])
            }
            else{
                return 0
            }
            continue
        }
        dp.push(dp[i-1])
        num = parseInt(s.slice(i-1,i+1))
        if(num > 10 && num <= 26){
            if(i < s.length - 1 && s[i+1] === '0'){
                continue
            }
            dp[i] += dp[i-2]
        }
    }
    
 
    return dp.pop()
};