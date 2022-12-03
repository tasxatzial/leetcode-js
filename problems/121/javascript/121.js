/* Approach: Linear pass 

Time complexity: O(N)
Space complexity: O(1)
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 let maxProfit = function(prices) {
    let minIdx = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[minIdx];
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        else if (prices[i] < prices[minIdx]) {
            minIdx = i;
        }
    }
    return maxProfit;
};
