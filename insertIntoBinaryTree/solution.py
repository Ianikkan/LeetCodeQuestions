# Definition for a binary tree node.
class TreeNode:
     def __init__(self, x):
         self.val = x
         self.left = None
         self.right = None

class Solution:
    def insertIntoBST(self, root, val: int) :
        toInsert = TreeNode(val)
        if root is None:
            return toInsert
        self.doInsert(root, toInsert)
        return root
   
    def doInsert(self, curNode, toInsert):
        if toInsert.val > curNode.val:
            if curNode.right is None:
                curNode.right = toInsert
            else:
                self.doInsert(curNode.right, toInsert )
        else:
            if curNode.left is None:
                curNode.left = toInsert
            else:
                self.doInsert(curNode.left, toInsert)