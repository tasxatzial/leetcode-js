/* Approach: Binary search

N = array length

Time complexity: O(?)
    sort array: O(?) [built-in sort function]
    find number of pairs: O(NlogN)
Space complexity: O(?)
    sort array: O(?) [built-in sort function]
    find number of pairs: O(N)
*/

/**
 * Given an array of integers nums and an integer k, returns the number of unique k-diff pairs in the array.
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @returns 
 */
let findPairs = function(nums, k) {
    let sortedNums = [...nums].sort((a,b) => a - b);
    let i = 0;
    let totalPairs = 0;
    while (i < sortedNums.length) {
        if (i > 0 && sortedNums[i] === sortedNums[i-1]) {
          i++;
          continue;
        }
        let target = sortedNums[i] + k;
        let idx = binarySearch(sortedNums, target, i + 1);
        if (idx !== -1) {
            totalPairs++;
        }
        i++;
    }
    return totalPairs;
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
let binarySearch = function(nums, target, low) {
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
