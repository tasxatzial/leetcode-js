/**
 * Searches the nums array for the given target starting from index startIdx.
 * Returns its index or -1 if target is not found.
 * 
 * Assumes that nums is in increasing order.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} startIdx 
 * @returns 
 */
var binarySearch = function(nums, target, startIdx) {
    let low = startIdx;
    let high = nums.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if (nums[low] === target) {
        return low;
    }
    return -1;
};
