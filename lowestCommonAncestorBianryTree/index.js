
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null
    let helper = node => {
        if (node === null) {
            return false
        }
        let mid = node === p || node === q;
        let left = helper(node.left);
        let right = helper(node.right);
        
        if(mid + left + right > 1){
           ans = node
        }
        return mid || left || right
    }
    helper(root)
    return ans
};