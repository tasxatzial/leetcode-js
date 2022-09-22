/* Approach: Quotient group (in-place)

Time complexity: O(N)
Space complexity: O(1)
*/

var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

/**
 * Rotates to the right k steps the elements in indices 0+idx, k+idx, 2*k+idx, ...
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @param {number} idx 
 */
var subrotate = function(nums, k, idx) {
    let curr = nums[idx];
    for (i = (k + idx) % nums.length; i != idx; i = (i + k) % nums.length) {
        let next = nums[i];
        nums[i] = curr;
        curr = next;
    }
    nums[idx] = curr;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let g = gcd(nums.length, k);
    for (let i = 0; i < g; i++) {
        subrotate(nums, k, i);
    }
};
