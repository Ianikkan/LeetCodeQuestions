/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0
    }
    let buy = [-prices[0]]
    let cash = [0]
    buy.push(Math.max(buy[0], -prices[1]))
    cash.push(Math.max(0, buy[0] + prices[1]))
    for(let i = 2; i < prices.length; i++){
        buy.push(Math.max(buy[i-1], cash[i-2] - prices[i]))
        cash.push(Math.max(cash[i-1], buy[i-1] + prices[i]))
    }
    return cash.pop();
};