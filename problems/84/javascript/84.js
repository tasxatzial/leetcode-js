/* Approach: Stack (3 pass)

N = array length

Time complexity: O(N)
    Previous smaller element: O(N)
    Next smaller element: O(N)
    find largest area: O(3N)
Space complexity: O(N)
    Previous smaller element: O(2N)
    Next smaller element: O(2N)
    find largest area: O(2N)
*/

/**
 * Returns an array where the element at index i is the index j of the closest number such that:
 * heights[i] > heights[j] and i > j. If such number does not exist, the index is -1.
 * 
 * @param {number[]} heights 
 * @returns {number}
 */
let previousSmallerElement = function(heights) {
    let stack = [{index: -1, value: -1}];
    let arr = [];
    for (let i = 0; i < heights.length; i++) {
        let last = stack[stack.length - 1];
        let prevSmaller = i - 1;
        while (last.value >= heights[i]) {
            stack.pop();
            last = stack[stack.length - 1];
            prevSmaller = last.index;
        }
        arr.push(prevSmaller);
        stack.push({index: i, value: heights[i]});
    }
    return arr;
};

/**
 * Returns an array where the element at index i is the index j of the closest number such that:
 * heights[i] > heights[j] and i < j. If such number does not exist, the index is heights.length.
 * 
 * @param {number[]} heights 
 * @returns {number[]}
 */
let nextSmallerElement = function(heights) {
    let stack = [{index: heights.length, value: -1}];
    let arr = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        let last = stack[stack.length - 1];
        let nextSmaller = i + 1;
        while (last.value >= heights[i]) {
            stack.pop();
            last = stack[stack.length - 1];
            nextSmaller = last.index;
        }
        arr.push(nextSmaller);
        stack.push({index: i, value: heights[i]});
    }
    return arr.reverse();
};

/**
 * Given an array of integers heights representing the histogram's bar height where the width
 * of each bar is 1, the function returns the area of the largest rectangle in the histogram.
 * 
 * @param {number[]} heights 
 * @returns {number}
 */
let largestRectangleArea = function(heights) {
    let max = 0;
    let prevSmaller = previousSmallerElement(heights);
    let nextSmaller = nextSmallerElement(heights);
    for (let i = 0; i < heights.length; i++) {
        let area = heights[i] * (nextSmaller[i] - prevSmaller[i] - 1);
        if (area > max) {
            max = area;
        }
    }
    return max;
};
