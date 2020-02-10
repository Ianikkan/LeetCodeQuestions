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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let path = [], result = []
    let dfs = function(node, curSum){
        if(!node){
            return
        }
        path.push(node.val)
        if(curSum + node.val === sum && node.left === null && node.right === null){
            result.push([...path])
        }
        dfs(node.left, curSum + node.val)
        dfs(node.right, curSum + node.val)
        path.pop()
    }
    dfs(root, 0)
    return result
};