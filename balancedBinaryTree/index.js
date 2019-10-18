/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true
    let recurse = (node, height) => {
        if(!node){
            return height - 1;
        }
        let l = recurse(node.left, height+1)
        let r = recurse(node.right, height + 1)
        if(Math.abs(l-r) > 1){
            balanced = false
        }
        return Math.max(l,r)
    }
    recurse(root,0)
    return balanced
    
    
};