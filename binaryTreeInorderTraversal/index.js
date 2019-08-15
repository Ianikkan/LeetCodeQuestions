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
var inorderTraversal = function(root) {
    let numbers = [];
    let traverse = function(node){
        if(node !== null){
            traverse(node.left);
            numbers.push(node.val);
            traverse(node.right);
        }
    }
    traverse(root)
    return numbers;
    
};
