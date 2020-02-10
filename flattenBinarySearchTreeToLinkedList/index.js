/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let sentinel = new TreeNode(null)
    let dfs = function(node){
        if(!node){
            return
        }
        dfs(node.right)
        dfs(node.left)
        node.right = sentinel.right
        node.left = null
        sentinel.right = node
    }
    dfs(root)
};