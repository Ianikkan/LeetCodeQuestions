function Node(val) {
    this.val = val;
    this.left = this.right = null
}

let three = new Node(3);
let nine = new Node(9);
let twenty = new Node(20);
let fifteen = new Node(15);
let seven = new Node(7);

three.left = nine;
three.right = twenty;
twenty.left = fifteen;
twenty.right = seven;
var levelOrder = function(root){
    let q = []
    let result = []
     if (!root){
         return result
     }
     q.push({level: 0, node : root})
     while(q.length > 0){
         cur = q.shift()
         if (cur.node === null){
             continue
         }
         let {left, right} = cur.node
         let {level} = cur
         if (level + 1 > result.length){
             result.push([])
         }
         result[level].push(cur.node.val)
         q.push({level : level+1, node:left })
         q.push({level : level+1, node:right })
     }
 
     return result
 
 
 
 }