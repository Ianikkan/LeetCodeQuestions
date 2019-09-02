#Definition for singly-linked list.
class ListNode:
     def __init__(self, x):
         self.val = x
         self.next = None

class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        root = ListNode(None)
        node = root
        while l1 is not None and l2 is not None:
            if l1.val > l2.val:
                node.next = ListNode(l2.val)
                l2 = l2.next
            else:
                node.next = ListNode(l1.val)
                l1 = l1.next
            node = node.next
        if l1 is None:
            node.next = l2
        else:
            node.next = l1
        return root.next
       
                
                