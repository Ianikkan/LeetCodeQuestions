  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
 /*
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
     var s1 = [], s2 = []
    let inorderTraversal = (seq, node) => {
        if(node === null){
            return
        }
        inorderTraversal(seq, node.left)
        if(node.left === null && node.right === null){
            seq.push(node.val)
        }
        inorderTraversal(seq, node.right)
    }
   
    inorderTraversal(s1, root1)
    inorderTraversal(s2, root2)
    return s1.join("") === s2.join("")
};

var l1 = new TreeNode(1)
var l2= new TreeNode(2)
leafSimilar(l1,l2)