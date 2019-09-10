import sys
class Solution:
    def updateMatrix(self, matrix):
        result = [[sys.maxsize - 10000 for j in range(len(matrix[0]))] for i in range(len(matrix))]
        
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    result[i][j] = 0
                else:
                    if i > 0:
                        result[i][j] = min(result[i][j], result[i-1][j] + 1)
                    if j > 0:
                        result[i][j] = min(result[i][j], result[i][j-1] + 1)
        
        for i in range(len(matrix)-1, -1, -1):
            for j in range(len(matrix[0]) -1, -1, -1):
                if i < len(matrix) - 1:
                    result[i][j] = min(result[i][j], result[i+1][j] + 1) 
                if j < len(matrix[0]) - 1:
                    result[i][j] = min(result[i][j], result[i][j+1] + 1)
        
        return result

s = Solution()
s.updateMatrix([[0,0,0],
 [0,1,0],
 [1,1,1]])
