 #Definition for a binary tree node.
class TreeNode:
     def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None
"""
#Recursive
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        self.ans = None
        def helper(currentNode):
            if currentNode is None:
                return False
            
            left = helper(currentNode.left)
            right = helper(currentNode.right) 
            
            mid =  currentNode == p or currentNode == q
            
            
            if mid + left + right  > 1:
                self.ans = currentNode
            
            return mid or left or right
            

        helper(root)
        return self.ans
"""

#Iterative 

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        stack = []
        parents = {root: None}
        stack.append(root)
        while len(stack) > 0 and (q not in parents or p not in parents) :
            cur = stack.pop()
            if cur.left:
                stack.append(cur.left)
                parents[cur.left] = cur
            if cur.right:
                stack.append(cur.right)
                parents[cur.right] = cur
                
        path = [q]
        qUp = parents[q]
        while qUp is not None:
            path.append(qUp)
            qUp = parents[qUp]
        
        pUp = p
        while pUp is not None:
            if pUp in path:
                return pUp
            pUp = parents[pUp]
            
        
