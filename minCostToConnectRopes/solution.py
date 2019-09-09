import heapq
class Solution:
    def connectRopes(self, ropes):
        cost = 0
        heapq.heapify(ropes)
        while len(ropes) > 1:
            first = heapq.heappop(ropes)
            second  = heapq.heappop(ropes)
            cost = cost + first + second
            heapq.heappush(ropes, first + second)
        return cost


s = Solution()
s.connectRopes([8,4,6,12])
