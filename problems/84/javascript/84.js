/**
 * Returns an array where the element at index i is the index j of the closest number such that:
 * heights[i] > heights[j] and i > j. If such number does not exist, the index is -1.
 * 
 * @param {number[]} heights 
 * @returns 
 */
let previousSmallerElement = function(heights) {
    let stack = [{index: -1, value: -1}];
    let arr = [];
    for (let i = 0; i < heights.length; i++) {
        let last = stack[stack.length - 1];
        if (heights[i] > last.value) {
            arr.push(i - 1);
        } else {
            while (last.value >= heights[i]) {
                stack.pop();
                last = stack[stack.length - 1];
            }
            arr.push(last.index);
        }
        stack.push({index: i, value: heights[i]});
    }
    return arr;
}

/**
 * Returns an array where the element at index i is the index j of the closest number such that:
 * heights[i] > heights[j] and i < j. If such number does not exist, the index is heights.length.
 * 
 * @param {number[]} heights 
 * @returns 
 */
let nextSmallerElement = function(heights) {
    let stack = [{index: heights.length, value: -1}];
    let arr = [];
    for (let i = heights.length - 1; i >= 0; i--) {
        let last = stack[stack.length - 1];
        if (heights[i] > last.value) {
            arr.push(i + 1);
        } else {
            while (last.value >= heights[i]) {
                stack.pop();
                last = stack[stack.length - 1];
            }
            arr.push(last.index);
        }
        stack.push({index: i, value: heights[i]});
    }
    return arr.reverse();
}
