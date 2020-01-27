function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var rotateRight = function(head, k) {
    //get the count of nodes
    if(!head){
        return head
    }
    let count = 0, runner = head
    while(runner.next !== head){
        count +=1
        runner = runner.next
        if(!runner.next){
            runner.next = head
            count +=1
        }
    }
    k = k % count
    if(k === 0){
        return head
    }
    runner = head
    while(k < count-1){
        runner = runner.next
        k += 1
    }
    let newHead = runner.next
    runner.next = null
    return newHead
};

let l1 = new ListNode(1)
let l2 = new ListNode(2)
let l3 = new ListNode(3)
let l4 = new ListNode(4)
let l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5
l1.next = l2
l2.next = l3

rotateRight(l1,5)