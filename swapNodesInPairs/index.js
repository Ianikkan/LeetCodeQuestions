/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head){
        return head
    }
    let f = head, s = head.next, prev = null
    head = s ? s : head
    while(s){
        f.next = s.next
        s.next = f
        if(prev){
            prev.next = s
        }
        prev = f
        f = f.next
        s = f ? f.next : null
    }
    return head
};