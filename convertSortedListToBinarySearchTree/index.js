/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    //convert list to array
    let arr = []
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    // recursively partition array, creating nodes as we go
    let partition = function(left, right){
        if(left > right){
            return null
        }
        let mid = Math.floor((left + right) / 2), node = new TreeNode(arr[mid])
        node.left = partition(left, mid - 1)
        node.right = partition(mid+1, right)
        return node
    }
    return partition(0, arr.length-1)
};