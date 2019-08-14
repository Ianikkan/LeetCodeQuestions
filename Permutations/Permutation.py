result = []
def Permutation(nums):
    DoPermutation(0, nums)
    return result


def DoPermutation(fl, nums):
    if(fl == len(nums) - 1):
        result.append(nums)
        return
    for i in range(fl, len(nums)):
        temp = nums[:]
        temp[fl], temp[i] = temp[i], temp[fl]
        DoPermutation(fl + 1, temp )
print(Permutation([1,2,3]))