class Solution(object):
    def spiralOrder(self, matrix):
        if not matrix:
            return []
        rows, cols = len(matrix), len(matrix[0])
        directions = [[0,1],[1,0],[0,-1],[-1,0]]
        visited = [[False for _ in range(cols)] for _ in range(rows)]
        r = c = d = 0
        result = []
        for _ in range(rows * cols):
            result.append(matrix[r][c])
            visited[r][c] = True
            tr, tc = r + directions[d][0], c + directions[d][1]
            if 0 <= tr < rows and 0 <= tc < cols and visited[tr][tc] == False:
                r,c = tr, tc
            else:
                d = (d + 1)%4
                r = r + directions[d][0]
                c = c + directions[d][1]
        return result

matrix = [[2,3,4],[5,6,7],[8,9,10],[11,12,13]]

s = Solution()
s.spiralOrder(matrix)