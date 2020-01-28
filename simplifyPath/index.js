/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let pathParts = path.split('/')
    for(let part of pathParts){
        if(part === '..'){
            stack.pop()
        }
        else if(!(part ==='.' || part === "")){
            stack.push(part)
        }
    }
   return '/' + stack.join('/')
    
};

simplifyPath("/home//foo/")