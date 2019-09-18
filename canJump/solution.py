class Solution:
    def canJump(self, nums: list) -> bool:
        if not nums:
            return False
        length = len(nums)
        if length == 0 or length == 1:
            return True
        jumpTo = nums[0]
        for i in range(1,length):
            if i > jumpTo:
                return False
            if jumpTo >= length - 1:
                return True
            if nums[i] + i > jumpTo:
                jumpTo = nums[i] + i