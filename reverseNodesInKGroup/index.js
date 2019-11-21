//  Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let reverseGroup = (before, start, after) =>{
        let runner = start, prev = null
        while(runner && runner !== after){
            let next = runner.next
            runner.next = prev
            prev = runner
            runner = next
        }
        if(before){
            before.next = prev
        }
        start.next = after
    }
    let before = null, after = null, start = head, runner = head, newHead = null
    
    while(runner){
        for(let i = 1; i < k; i++){
            runner = runner ? runner.next : null
        }
        if(runner){
            let after = runner.next
            reverseGroup(before, start, after)
            if (!newHead) {
                newHead = runner;
            }
            before = start
            runner = after
            start = runner
    
        }
        
    }
    return newHead || head
};


l1 = new ListNode(1)
l2 = new ListNode(2)
l3 = new ListNode(3)
l4 = new ListNode(4)
l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
reverseKGroup(l1, 2)


/**
 * notes
 * need to keep track of node before section to reverse, after reversal this nodes next should be changed to the last node that was reversed
 * 
 * need to keep track of node after group to reverse, after reversal need to set the next of the first node that was reversed to this node
 * 
 * 
 */
