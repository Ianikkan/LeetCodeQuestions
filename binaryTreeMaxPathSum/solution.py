import sys
import sys
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def __init__(self):
        self.result = (sys.maxsize - 1) *-1
    def maxPathSum(self, root: TreeNode) -> int:
        def doPathSum(node):
            if not node:
                return 0
            left = doPathSum(node.left)
            right = doPathSum(node.right)
            
            contained = left + right + node.val
            if contained > self.result:
                self.result = contained
            path = max(left,right) + node.val
            if path > self.result:
                self.result = path
            if node.val > self.result:
                self.result = node.val
            return max(path, node.val)
        
        doPathSum(root)
        return self.result
        

one = TreeNode(1)
two = TreeNode(2)
three = TreeNode(3)

one.left = two
one.right = three
s =Solution()
s.maxPathSum(one)