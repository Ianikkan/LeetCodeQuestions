 // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(null)
    dummy.next = head
    let seen = 0, cur = dummy, toRemove = dummy 
    while(seen < n){
        cur = cur.next
        seen++
    }
    while(cur.next){
        cur = cur.next
        toRemove = toRemove.next
    }
    toRemove.next = toRemove.next.next
    return dummy.next

};