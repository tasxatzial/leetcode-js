/* Approach: Binary Search

N = array length

Time complexity: O(?)
    sort array: O(?) [built-in sort function]
    find indices (sorted array): O(NlogN)
    find final indices (unsorted array): O(N)
Space complexity: O(?)
    sort array: O(?) [built-in sort function]
    find indices (sorted array): O(1)
    find final indices (unsorted array): O(1)
*/

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * The same array element may not be used twice.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
let twoSum = function(nums, target) {
    let sortedNums = [...nums].sort((a,b) => a - b);
    let i = 0;
    while(i < sortedNums.length) {
        let diff = target - sortedNums[i];
        let idx = binarySearch(sortedNums, diff, i + 1);
        if (idx !== -1) {
            let i1, i2;
            let val1 = sortedNums[i];
            let val2 = sortedNums[idx];
            if (val1 === val2) {
                i1 = findIndex(nums, val1, 0);
                i2 = findIndex(nums, val2, i1 + 1);
            } else {
                i1 = findIndex(nums, val1, 0);
                i2 = findIndex(nums, val2, 0);
            }
            return [i1, i2];
        }
        i++;
    }
    return null;
};

/**
 * Searches the nums array for the given target starting from index startIdx.
 * Returns its index or -1 if target is not found.
 * 
 * Runtime O(N)
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} start 
 * @returns 
 */
let findIndex = function(nums, target, startIdx) {
    for (let i = startIdx; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
};

/**
 * Searches the nums array for the given target starting from index startIdx.
 * Returns its index or -1 if target is not found.
 * 
 * Assumes that nums is in increasing order. Runtime O(logN)
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {number} startIdx 
 * @returns 
 */
let binarySearch = function(nums, target, startIdx) {
    let low = startIdx;
    let high = nums.length - 1;
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
