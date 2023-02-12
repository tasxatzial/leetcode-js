/* Approach: Partition array indices into disjoint cycles (in-place)

Time complexity: O(N)
Space complexity: O(1)
*/

let gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

/**
 * Rotates (in place) to the right by k steps the elements nums[0+idx], nums[k+idx], nums[2*k+idx], ...
 * 
 * @param {number[]} nums 
 * @param {number} k 
 * @param {number} idx 
 * @returns {void}
 */
let subrotate = function(nums, k, idx) {
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
 * @returns {void}
 */
let rotate = function(nums, k) {
    let g = gcd(nums.length, k);
    for (let i = 0; i < g; i++) {
        subrotate(nums, k, i);
    }
};
