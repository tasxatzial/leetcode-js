/* Approach: Binary search

N = array length

Time complexity: O(logN)
Space complexity: O(1)
*/

/**
 * Searches the nums array for the given target. Returns an array of its first and last position or [-1, -1] if target is not found.
 * 
 * Assumes that nums is in increasing order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
    let first = binarySearchLowest(nums, target);
    let last = binarySearchHighest(nums, target);
    return [first, last];
};

/**
 * Searches the nums array for the given target. Returns its first position or -1 if target is not found.
 * 
 * Assumes that nums is in increasing order.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
let binarySearchLowest = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] >= target) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    if (nums[high] === target) {
        return high;
    }
    return -1;
};

/**
 * Searches the nums array for the given target. Returns its last position or -1 if target is not found.
 * 
 * Assumes that nums is in increasing order.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
let binarySearchHighest = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid = Math.ceil((low + high) / 2);
        if (nums[mid] <= target) {
            low = mid;
        }
        else {
            high = mid - 1;
        }
    }
    if (nums[low] === target) {
        return low;
    }
    return -1;
};
