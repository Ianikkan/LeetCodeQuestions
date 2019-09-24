class Solution:
    def exist(self, board, word):
        if not word or word == '':
            return True
        if not board:
            return False
        rows, cols = len(board), len(board[0])
        if rows == 0:
            return False
        
        def searchFromPoint(r,c,wordIndex):
            if not (0 <= r < rows and 0 <= c < cols and board[r][c] == word[wordIndex]):
                return False
            if wordIndex == len(word) - 1:
                return True
            val = board[r][c]
            board[r][c] = '**'
            if searchFromPoint(r,c+1,wordIndex+1):
                return True
            if searchFromPoint(r,c-1,wordIndex+1):
                return True
            if searchFromPoint(r+1,c,wordIndex+1):
                return True
            if searchFromPoint(r-1,c,wordIndex+1):
                return True
            board[r][c] = val
            
        
        for i in range(rows):
            for j in range(cols):
                if word[0] == board[i][j]:
                    if searchFromPoint(i,j,0):
                        return True
        return False
        
s = Solution()    
board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]]
word = 'ABCESEEEFS'
s.exist(board, word)
