from BST import *

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