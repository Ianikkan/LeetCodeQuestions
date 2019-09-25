class Solution:
    def generateMatrix(self, n: int):
        result = [['*'] * n for _ in range(n)]
        dr = [[0,1],[1,0],[0,-1],[-1,0]]
        r = c = d = 0
        for i in range(1,(n*n)+1):
            result[r][c] = i
            tr, tc = r + dr[d][0] , c + dr[d][1]
            if 0 <= tr < n and 0 <= tc < n and result[tr][tc] == '*':
                r, c = tr, tc
            else:
                d = (d + 1) % 4
                r = r + dr[d][0]
                c = c + dr[d][1]
        return result
            