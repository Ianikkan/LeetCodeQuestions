from collections import deque
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
    def mergeKLists(self, lists: List[ListNode]) -> ListNode:
        if not lists:
            return None
        d = deque(lists) 
        listLength = len(lists)
        for i in range(listLength - 1):
            a = d.pop()
            b = d.pop()
            d.appendleft(self.merge2Lists(a,b))
        return d[0] 
            
    def merge2Lists(self, a, b):
        root= node = ListNode(None)
        while a and b:
            if a.val < b.val:
                node.next = a 
                a = a.next
            else:
                node.next = b  
                b = b.next
            node = node.next
        if a is not None:
            node.next = a
        else:
            node.next = b
            
        return root.next
