# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children

class Solution:
    def preorder(self, root: 'Node'):
        result = []
        def doPreorder(node):
            if not node:
                return
            result.append(node.val)
            for c in node.children:
                doPreorder(c)
        doPreorder(root)
        return result