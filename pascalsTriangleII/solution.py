class Solution:
    def getRow(self, rowIndex: int) -> list:
        row = [1]
        for c in range(rowIndex):
            nextRow = [1]
            for i in range(1,len(row)):
                nextRow.append(row[i - 1] + row[i])
            nextRow.append(1)
            row = nextRow
        return row
            