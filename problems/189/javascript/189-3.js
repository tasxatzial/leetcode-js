/* Approach: Quotient group

Time complexity: O(N)
Space complexity: O(1)
*/

var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Moves every k-th element (k = 0...) k places to the right. The first k-th element
 * is at index idx. Wraps around when the index is out of bounds.
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @param {number} idx 
 */
var subrotate = function(nums, k, idx) {
    let i = (k + idx) % nums.length;
    s = nums[idx];
    let n = s;
    while (i !== idx) {
        n = nums[i];
        nums[i] = s;
        i = (i + k) % nums.length;
        s = n;
    }
    nums[idx] = n;
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
