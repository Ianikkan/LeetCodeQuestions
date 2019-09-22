class Solution:
    def merge(self, intervals):
        length = len(intervals)
        if length < 2:
            return intervals
        intervals.sort(key=lambda x : x[0])
        result = [intervals[0]]
        for i in range (1,length):
            if intervals[i][0] <= result[-1][1]:
                result[-1][1] = max(intervals[i][1], result[-1][1])
            else:
                result.append(intervals[i])
        return result
