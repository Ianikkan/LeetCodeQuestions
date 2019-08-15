def findPairs(arr, k):
    seen = {}
    results = []
    for i in arr:
        if (abs(i-k)) in seen:
            results.append([i-k,i])
        seen[i] = ""
    return results

nums = [1,2,3,4,5,10,12,45,6]

findPairs(nums,1)
