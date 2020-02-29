/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let stack = [], added = 0, result = [];
    let dfs = function(start){
        if(added === s.length && stack.length === 4){
            result.push(stack.join('.'));
            return;
        }
        if(stack.length > 3){
            return;
        }
        for(let i = start; i < s.length && i < start + 3; i++){
            let part = Number.parseInt(s.slice(start, i+1))
            if(part <= 255){
                stack.push(part)
                added += (i - start) + 1
                dfs(i+1)
                stack.pop()
                added -= (i - start) + 1
            }
            if(s[start] === '0'){
                break
            }
        }
    }
    dfs(0);
    return result;
};

restoreIpAddresses("010010")