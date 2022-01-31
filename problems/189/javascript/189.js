/* Approach 1: Using splice & slice

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

/*----------------------------------------------*/

/* Approach 2: Reversing sub-arrays

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

/*----------------------------------------------*/

/* Approach 3: Quotient group

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
