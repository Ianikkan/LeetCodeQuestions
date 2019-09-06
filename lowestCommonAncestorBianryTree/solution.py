 #Definition for a binary tree node.
 class TreeNode:
     def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None

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
            