/* Approach: Reversing sub-arrays (in place)

Time complexity: O(N)
Space complexity: O(1)
*/

/**
 * Reverses (in place) the sub-array from start index to end index (included).
 * 
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 */
 var reverse = function(nums, start, end) {
    let iEnd;
    if ((end - start) % 2 === 0) {
        iEnd = start + Math.round((end-start) / 2.0);
    } else {
        iEnd = start + Math.round(Math.floor((end-start) / 2.0));
    }
    for (let i = start; i <= iEnd; i++) {
        let tmp = nums[end - (i - start)];
        nums[end - (i - start)] = nums[i];
        nums[i] = tmp;
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
