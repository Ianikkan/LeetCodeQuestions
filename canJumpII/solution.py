class Solution:
    def jump(self, nums) -> int:
        length = len(nums)
        if length <= 1:
            return 0
        l, r = 0, nums[0]
        jumps = 1
        while r < length - 1:
            nextR = max(i + nums[i] for i in range(l+1, r+1))
            l = r
            r = nextR
            jumps += 1
        return jumps
        