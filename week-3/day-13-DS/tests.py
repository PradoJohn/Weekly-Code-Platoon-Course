class BSTNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, value):
        self.root = self._insert(self.root, value)

    def _insert(self, node, value):
        if node is None:
            return BSTNode(value)
        if value < node.key:
            node.left = self._insert(node.left, value)
        else:
            node.right = self._insert(node.right, value)
        return node

    def max_depth(self):
        return self._max_depth(self.root)

    def _max_depth(self, node):
        if node is None:
            return 0
        left_depth = self._max_depth(node.left)
        right_depth = self._max_depth(node.right)
        return 1 + max(left_depth, right_depth)

    def __str__(self):
        return self._tree_str(self.root)

    def _tree_str(self, node, level=0):
        if node is None:
            return '\t' * (level + 1) + 'None\n'
        tree_str = '\t' * level + str(node.key) + '\n'
        tree_str += self._tree_str(node.left, level + 1)
        tree_str += self._tree_str(node.right, level + 1)
        return tree_str

# Create a BST
bst = BST()
bst.insert(50)
bst.insert(22)
bst.insert(75)
bst.insert(15)

# Print the tree structure and maximum depth
print(bst)
print("Maximum Depth:", bst.max_depth())
