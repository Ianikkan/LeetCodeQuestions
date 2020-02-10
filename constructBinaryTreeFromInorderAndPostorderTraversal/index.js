/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let generate = function(il, ir, pl, pr){
        if(ir < il || pr < pl){
            return null
        }
        let iRoot = inorder.indexOf(postorder[pr]), node = new TreeNode(postorder[pr]);
        node.left = generate(il, iRoot-1, pl, pl+iRoot-1-il );
        node.right = generate(iRoot+1, ir, pl+iRoot-il, pr-1);
        return node
    }
    return generate(0, inorder.length-1, 0, postorder.length-1)
    
};