import sys
class Solution:
    def maxSubArray(self, nums: list,) -> int:
        localMax, globalMax = (sys.maxsize -1) * -1, (sys.maxsize -1) * -1
        for n in nums:
            if localMax + n > n:
                localMax += n
            else:
                localMax = n
            if localMax > globalMax:
                globalMax = localMax
        
        return globalMax