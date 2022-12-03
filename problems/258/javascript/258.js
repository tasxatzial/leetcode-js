/* Time complexity: O(1) */

/**
 * @param {number} num
 * @return {number}
 */
 let addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    let s = num % 9;
    if (s === 0) {
        return 9;
    }
    return s;
};
