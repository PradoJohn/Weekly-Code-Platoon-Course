#Searching the Matrix

# Given a matrix of size length x width, where '1' represents land, 
# while '0' represents water. The task is to return the number of 
# islands present in the matrix. An island is a group of 1’s surrounded 
# either vertically or horizontally.

#array 
# [[1, 1, 0, 1, 1],[1, 1, 0, 0, 0], [0, 1, 0, 0, 0],[0, 1, 0, 0, 1],[1, 1, 0, 1, 1]]

#Stacking arrays to create a matrix
#array --> matrix
# [1, 1, 0, 1, 1],
# [1, 1, 0, 0, 0], 
# [0, 1, 0, 0, 0],
# [0, 1, 0, 0, 1],
# [1, 1, 0, 1, 1]

#rows = len(matrix) = 5
#cols = len(matrix[0]) = 5
#matrix is 5 x 5 

class Island_Search:
    def __init__(self, matrix):
        self.matrix = matrix
       
    def island_count(self):
        if not self.matrix:
            return 0
        num_islands = 0
        rows = len(self.matrix) #5
        cols = len(self.matrix[0]) #5
        
       
        for i in range(rows):
            for j in range(cols):
                if self.matrix[i][j] == 1:  #i is what row we are in, j is what column we are in
                    self.dfs(i, j, rows, cols)
                    # print('Hello')
                    num_islands += 1
                    print(num_islands)
                else:
                    print(i, j)
                    continue
        return num_islands

    def dfs(self, i, j, rows, cols):
        if i < 0 or j < 0 or i >= rows or j >= cols or self.matrix[i][j] != 1:
            return
        # [1, 1, 0, 1, 1],
        # [1, 1, 0, 0, 0], 
        # [0, 1, 0, 0, 0],
        # [0, 1, 0, 0, 1],
        # [1, 1, 0, 1, 1]
        self.matrix[i][j] = "#"
        print(self.matrix)
        print('look right')
        self.dfs(i, j + 1, rows, cols)
        print('look left')
        self.dfs(i, j - 1, rows, cols)
        print('look up')
        self.dfs(i + 1, j, rows, cols)
        print('look down')
        self.dfs(i - 1, j, rows, cols)
        
        # [1,1,0,1,1], 
        # [1,1,0,0,0], 
        # [0,1,0,0,0], 
        # [0,1,0,0,1], 
        # [1,1,0,1,1]     

        # [#,#,0,#,#], 
        # [#,#,0,0,0], 
        # [0,#,0,0,0], 
        # [0,#,0,0,#], 
        # [#,#,0,#,#]     

        # [a,b,0,i,j], 
        # [d,c,0,0,0], 
        # [0,e,0,0,0], 
        # [0,f,0,0,k], 
        # [h,g,0,m,l]     

search1 = Island_Search([[1, 1, 0, 1, 1], [1, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 1],[1, 1, 0, 1, 1]])
print(search1.island_count())