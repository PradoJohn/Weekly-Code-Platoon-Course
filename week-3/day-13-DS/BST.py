
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    

class BST: 

    array = []

    def __init__(self):
        self.root = None

    def __str__(self) -> str:
        return f"{self.root.value} left: {self.root.left} right: {self.root.right}"
    
    # To insert value in the tree
    def insert(self, new_value):
        self.root = self.bst_insert(self.root, new_value)

    # value insertion helper function
    def bst_insert(self, tree, new_value):
        if tree is None:
            return Node(new_value)
        
        if new_value < tree.value:
            tree.left = self.bst_insert(tree.left, new_value)
        else:
            tree.right = self.bst_insert(tree.right, new_value)
        return tree
    
    # Get the max depth of binary Tree
    def max(self):
        return self.max_depth(self.root)
    # Max depth function helper
    @classmethod
    def max_depth(cls,tree):

        if tree is None:
                return 0
        else:
            return 1 + max(cls.max_depth(tree.left), cls.max_depth(tree.right))
        

    # Search the depth of a specific key 
    def search_key_depth(self, key):
        return self.searchKeyHelper(self.root, key)
    
    # Search helper function
    def searchKeyHelper(self, tree, key, depth=1):

        if tree is None:
            return 0
        #Base Case
        if key == tree.value:
            return depth
        elif key < tree.value:
            return self.searchKeyHelper(tree.left, key, depth + 1)
        else:
            return self.searchKeyHelper(tree.right, key, depth + 1)
        
    # Depth First Search Traversals InOrder/PreOrder/PostOrder
    def dfs_traverse(self, order = 'inOrder'):
        array = []
        if order == 'preOrder':
            return self.preOrderTraverse(self.root, array)
        elif order == 'postOrder':
            return self.postOrderTraverse(self.root, array)
        else:
             return self.inOrderTraverse(self.root, array)
        
    def inOrderTraverse(self, tree, array):
        if tree is not None:
            self.inOrderTraverse(tree.left, array)
            array.append(tree.value)
            self.inOrderTraverse(tree.right,array)
        return array
    
    def preOrderTraverse(self, tree, array):
      
        if tree is not None:
            array.append(tree.value)
            self.preOrderTraverse(tree.left, array)
            self.preOrderTraverse(tree.right, array)
        return array 
    
    def postOrderTraverse(self, tree, array):
        
        if tree is not None:
            self.postOrderTraverse(tree.left, array)
            self.postOrderTraverse(tree.right, array)
            array.append(tree.value)
        return array 




if __name__ == "__main__":

    tree = BST()
    values = [50,22,75,21,15,23,19,74,4]

    for node in values:
        tree.insert(node)
    # print(tree)

    # print(tree.max())

    #                   50
    #           22                75
    #      15        21        74
    #    4    19        22 

    # print(tree.max_depth())
    array = []
    inOrder = tree.dfs_traverse('inOrder')
    preOrder = tree.dfs_traverse('preOrder')
    postOrder = tree.dfs_traverse('postOrder')


    print(inOrder)
    print(preOrder)
    print(postOrder)