class Solution:
    def floodFill(self, image, sr: int, sc: int, newColor: int):
        curColor = image[sr][sc]
        if newColor == curColor:
            return image
        rows = len(image)
        cols =  len(image[0])
        toChange = [[sr,sc]]
        directions = [[1,0],[-1,0],[0,1],[0,-1]]
        while len(toChange) > 0:
            curSquare = toChange.pop()
            row = curSquare[0]
            col = curSquare[1]
            image[row][col] = newColor
            for d in directions:
                testRow = d[0] + row
                testCol = d[1] + col
                if testRow >= 0 and testRow < rows and testCol >= 0 and testCol < cols and image[testRow][testCol] == curColor:
                    toChange.append([testRow, testCol])
        return image

        