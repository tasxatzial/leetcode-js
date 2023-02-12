/* Time complexity: O(1) */

/**
 * @param {number} num
 * @returns {number}
 */
 var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    return 1 + (num - 1) % 9;
};
