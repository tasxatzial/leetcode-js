/* Approach: splice & slice

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i = nums.length - k % nums.length;
    let firstNums = nums.slice(0, i);
    nums.splice(0, i);
    nums.push(...firstNums);
};
