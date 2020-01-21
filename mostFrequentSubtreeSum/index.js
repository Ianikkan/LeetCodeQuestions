/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let sums = {}
    let dfs = (node) => {
        if(!node){
            return 0
        }
        let leftSum = recurseTree(node.left)
        let rightSum = recurseTree(node.right)
        let curSum = leftSum + rightSum + node.val
        if(curSum in sums){
            sums[curSum] += 1
        }
        else{
            sums[curSum] = 1
        }
        return curSum
    }
    dfs(root)
    let result = []
    let maxSum = 1
    for(let k of Object.keys(sums)){
        if(sums[k] === maxSum){
            result.push(k)
        }
        if(sums[k] > maxSum){
            maxSum = sums[k]
            result = [k]
        }
    }
    return result
};