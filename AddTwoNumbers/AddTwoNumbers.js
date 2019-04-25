/**
*****************************
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*********************************
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let l3 = new ListNode();
    let curr = l3;
    while(l1 !== null && l2 !== null){
        let pos = l1.val + l2.val + carry;
        if(pos > 9){
            carry = Math.floor(pos / 10)
            pos = pos % 10;
        }
        else{
            carry = 0;
        }
        curr.next = new ListNode(pos);
        curr = curr.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    let rest = l1 || l2;
    while(rest !== null){
        let pos = rest.val + carry;
        if(pos > 9){
            carry = Math.floor(pos / 10) ;
            pos = pos % 10;
        }
        else{
            carry = 0
        }
        curr.next = new ListNode(pos);
        curr = curr.next;
        rest = rest.next;
    }
    if( carry > 0)
        curr.next = new ListNode(carry);
    return l3.next
    
    
};
