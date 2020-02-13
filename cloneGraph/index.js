/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node){
        return node
    }
    let nodeMap = {};
    let dfs = function(node){
        if(node.val in nodeMap){
            return nodeMap[node.val]
        }
        let newNode = new Node(node.val)
        nodeMap[node.val] = newNode;
        for(let n of node.neighbors){
            nodeMap[node.val].neighbors.push(dfs(n))
        }
        return newNode
    }
    dfs(node)
    return nodeMap[node.val]
};