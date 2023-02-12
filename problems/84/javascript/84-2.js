/* Approach: Stack (1 pass)

N = array length

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * Given an array of integers heights representing the histogram's bar height where the width
 * of each bar is 1, the function returns the area of the largest rectangle in the histogram.
 * 
 * @param {number[]} heights 
 * @returns {number}
 */
let largestRectangleArea = function(heights) {
    let newHeights = [...heights];
    newHeights.push(-1); // necessary so that all stack elements are processed
    let stack = [{index: -1, value: -1}];
    let max = 0;
    for (let i = 0; i < newHeights.length; i++) {
        let last = stack[stack.length - 1];
        let startIndex = i;
        while (last && last.value >= newHeights[i]) {
            let area = last.value * (i - last.index);
            if (area > max) {
                max = area;
            }
            startIndex = stack.pop().index;
            last = stack[stack.length - 1];
        }
        stack.push({index: startIndex, value: newHeights[i]});
    }
    return max;
};
