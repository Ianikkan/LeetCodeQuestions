/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if(d === 1){
        var node = new TreeNode(v)
        node.left = root;
        return node
    }
    let dfs = function(level, node){
        if(!node){
            return
        }
        if(level === d-1){
            let left = new TreeNode(v), right = new TreeNode(v)
            left.left = node.left
            right.right = node.right
            node.left = left
            node.right = right
            return
        }
        dfs(level+1, node.left)
        dfs(level+1, node.right)
    }
    dfs(1, root)
    return root;
    
};