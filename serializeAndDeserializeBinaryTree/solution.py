from collections import deque
#Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        :type root: TreeNode
        :rtype: str
        """
        def doSerialize(node):
            if node:
                vals.append(str(node.val))
                doSerialize(node.left)
                doSerialize(node.right)
            else:
                vals.append('*')
        vals = []
        doSerialize(root)
        return ','.join(vals)


            
    

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        :type data: str
        :rtype: TreeNode
        """
        def doDeserialize():
            val = next(vals)
            if val != '*':
                node = TreeNode(int(val))
                node.left=doDeserialize()
                node.right = doDeserialize()
                return node
            return None

        vals = iter(data.split(','))
        return doDeserialize()



# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.deserialize(codec.serialize(root))

one = TreeNode(1)
two = TreeNode(2)
three = TreeNode(3)
four = TreeNode(4)
five = TreeNode(5)

one.left = two
one.right = three
three.left = four
three.right = five

codec = Codec()
codec.deserialize(codec.serialize(one))