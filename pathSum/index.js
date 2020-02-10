/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let dfs = function(node, curSum){
        if(!node){
            return false
        }
        if(curSum + node.val === sum && node.left === null && node.right === null){
            return true
        }
        return dfs(node.left, curSum + node.val) || dfs(node.right, curSum + node.val)
    }
    return dfs(root, 0)
};