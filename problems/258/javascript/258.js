/* Time complexity: O(1) */

/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    var s = num % 9;
    if (s === 0) {
        return 9;
    }
    return s;
};
