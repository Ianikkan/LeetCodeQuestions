class Solution:
    def searchMatrix(self, matrix, target: int) -> bool:
        rows = len(matrix)
        if rows == 0:
            return False
        cols = len(matrix[0])
        left, right = 0, (rows*cols) -1
        while left <= right:
            mid = (left + right) // 2
            testRow = mid // cols
            testCol = mid % cols
            if matrix[testRow][testCol] > target:
                right = mid-1
            elif matrix[testRow][testCol] < target:
                left = mid+1
            else:
                return True
        return False

s = Solution()
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
s.searchMatrix(matrix,3)