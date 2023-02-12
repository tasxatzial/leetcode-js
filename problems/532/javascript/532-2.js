/* Approach: Hash map / Hash set

N = array length

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * Given an array of integers nums and an integer k, returns the number of unique k-diff pairs in the array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
 let findPairs = function(nums, k) {
    if (k === 0) {
        return findPairs0diff(nums); // hash map
    } else {
        return findPairskdiff(nums, k); // hash set
    }
};

/**
 * Given an array of integers nums, returns the number of unique 0-diff pairs in the array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
let findPairs0diff = function(nums) {
    let map = new Map();
    let i = 0;
    let totalPairs = 0;
    while (i < nums.length) {
        let fr = map.get(nums[i]);
        if (fr === 1) {
            totalPairs++;
            map.set(nums[i], 2);
        } else if (fr === undefined) {
            map.set(nums[i], 1);
        }
        i++;
    }
    return totalPairs;
};

/**
 * Given an array of integers nums and an integer k, returns the number of unique k-diff pairs in the array.
 * 
 * Assumes k != 0.
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
let findPairskdiff = function(nums, k) {
    let set = new Set();
    let i = 0;
    let totalPairs = 0;
    while (i < nums.length) {
        if (!set.has(nums[i])) {
            if (set.has(nums[i] + k)) {
                totalPairs++;
            }
            if (set.has(nums[i] - k)) {
                totalPairs++;
            }
            set.add(nums[i]); 
        }
        i++;
    }
    return totalPairs;
};
