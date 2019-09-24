class Solution:
    def climbStairs(self, n: int) -> int:
        memo = [1,2]
        def doClimb(n):
            if n <= len(memo):
                return memo[n-1]
            memo.append(doClimb(n-1)+ doClimb(n-2))
            return memo[n-1]
        doClimb(n)
        return memo[n-1]
