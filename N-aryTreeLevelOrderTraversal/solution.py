from collections import deque

# Definition for a Node.
class Node:
    def __init__(self, val, children):
        self.val = val
        self.children = children
class Solution:
    def levelOrder(self, root: 'Node') :
        result = []
        q = deque()
        q.append((root,0))
        while len(q) > 0:
            cur = q.pop()
            level = cur[1]
            node = cur[0]
            if not node:
                continue
            if level+1 > len(result):
                result.append([])
            result[level].append(node.val)
            for c in node.children:
                q.appendleft((c,level+1))
        return result
            