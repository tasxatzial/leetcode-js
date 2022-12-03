/**
 * @param {number[][]} accounts
 * @return {number}
 */
 let maximumWealth = function(accounts) {
    let wealths = accounts.map(x => x.reduce((a,b) => a + b, 0));
    return Math.max(...wealths);
};
