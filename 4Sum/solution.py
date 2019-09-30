class Solution(object):
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        result = []
        length = len(nums)
        nums.sort()
        def twoSum(anchor,start) :
            l,r = start, length-1
            while l < r:
                testSum = anchor[0] + anchor[1] + nums[l] + nums[r]
                if testSum < target:
                    l += 1
                elif testSum > target:
                    r -= 1
                else:
                    result.append([anchor[0], anchor[1], nums[l],  nums[r]])
                    l += 1
                    r -= 1
                    while l < r and nums[l] == nums[l-1]:
                        l+= 1
                    while r > l and nums[r] == nums[r+1]:
                        r -= 1
        left, right = 0,1
        while left < length - 3:
            right = left + 1
            while right < length -2:
                twoSum([nums[left],nums[right]], right + 1)
                right += 1
                while right < length - 2 and nums[right] == nums[right-1]:
                    right += 1
            left += 1 
            while left < length -3 and nums[left] == nums[left-1]:
                left += 1
        return result

s = Solution()
s.fourSum([-1,2,2,-5,0,-1,4],3)