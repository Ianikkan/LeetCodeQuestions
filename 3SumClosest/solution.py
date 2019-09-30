class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        fixedLeft = 0
        sum = nums[0] + nums[1] + nums[2] 
        while fixedLeft < len(nums) - 2:
            l,r = fixedLeft + 1, len(nums)-1
            while l < r:
                testSum = nums[fixedLeft] + nums[l] + nums[r]
                if abs(target - testSum) < abs(target - sum):
                    sum = testSum
                if testSum > target:
                    r -= 1
                elif testSum < target:
                    l += 1
                else:
                    return sum
            fixedLeft += 1
        return sum
                    
s = Solution()
s.threeSumClosest([-55,-24,-18,-11,-7, -3, 4, 5, 6, 9, 11, 23, 33],0)