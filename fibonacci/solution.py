class Solution:
    def fib(self, N: int) -> int:
        memo = [0,1]
        def doFib(N):
            if N < len(memo):
                return memo[N]
            memo.append(doFib(N-1) + doFib(N-2))
            return memo[N]
        return doFib(N)    

