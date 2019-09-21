from collections import deque
class Solution(object):
    def orangesRotting(self, grid):
        rows,cols = len(grid), len(grid[0])
        
        mins = 0 
        #add all rotting oranges to queue
        #queue contaian a tuple, (r,c,minutes)
        q = deque()
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 2:
                    q.append((i,j,0))
        
        directions = [(0,1), (0,-1), (1,0), (-1,0)]
        while len(q) > 0:
            cur = q.popleft()
            for d in directions:
                tempR = cur[0] + d[0]
                tempC = cur[1] + d[1]
                if 0 <= tempR < rows and 0 <= tempC < cols and grid[tempR][tempC] == 1:
                    q.append((tempR,tempC, cur[2] + 1))
                    mins =  cur[2] + 1
                    grid[tempR][tempC] = 1
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1:
                    return -1
        return mins
            
s = Solution()

s.orangesRotting([[2,1,1],[1,1,0],[0,1,1]])


