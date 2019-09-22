# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        node = head
        while node:
            runner = node.next
            while runner and runner.val == node.val:
                runner = runner.next
            node.next = runner
            node = runner
        return head