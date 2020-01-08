/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s){
    let result = []
    let isPalindrome = function(s){
        let front = 0, back = s.length-1
        while(front <= back){
            if(s.charAt(front) !== s.charAt(back)){
                return false
            }
            front+=1
            back-=1
        }
        return true
    }
    let dfs = function(start, cur){
        if(start === s.length){
            result.push(cur)
            return
        }
        for(let i = start; i < s.length; i+=1){
            let testStr = s.substring(start, i+1)
            if(isPalindrome(testStr)){
                dfs(i+1, [...cur, testStr])
            }

        }
    }
    dfs(0, [])
    return result
}