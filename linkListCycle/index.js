/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fp = head, sp = head
    while(fp){
        if(fp && fp.next && fp.next.next){
            fp = fp.next.next
            sp = sp.next
            if(fp === sp){
                return true
            }
        }
        else{
            return false
        }
        
    }
    return false
    
};