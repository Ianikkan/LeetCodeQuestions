/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    var testNode = (sNode, tNode) => {
        if(sNode === null && tNode === null){
            return true
        }
        if(sNode === null || tNode === null){
            return false
        }
        return sNode.val === tNode.val && testNode(sNode.left,tNode.left) && testNode(sNode.right, tNode.right)
    }
    let stack = [s]
    while(stack.length > 0){
        let cur = stack.pop()
        if(cur === null){
            continue
        }
        if(testNode(cur,t)){
            return true
        }
        else{
            stack.push(cur.left)
            stack.push(cur.right)
        }
    }
    return false
    
};