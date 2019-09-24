# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children

class Solution:
    def postorder(self, root: 'Node'):
        result = []
        def doPostorder(node):
            if not node:
                return
            for c in node.children:
                doPostorder(c)
            result.append(node.val)
        doPostorder(root)
        return result