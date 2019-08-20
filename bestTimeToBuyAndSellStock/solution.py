class Solution:
    def maxProfit(self, prices: list) -> int:
        if(len(prices)) < 2:
            return 0
        boughtAt = prices[0]
        profit = 0
        for i in range(1,len(prices)):
            if prices[i] < boughtAt:
                boughtAt = prices[i]
            elif boughtAt - prices[i] > profit:
                profit = boughtAt - prices[i]
        
        return profit

x = Solution()

x.maxProfit([7,1,5,3,6,4])