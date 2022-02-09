/* Approach: Hash map

N = array length

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * Given an array of integers nums and an integer k, returns the number of unique k-diff pairs in the array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findPairs = function(nums, k) {
    let map = new Map();
    let i = 0;
    let totalPairs = 0;
    while (i < nums.length) {
        let fr = map.get(nums[i]);
        if (fr !== undefined) {
            if (k === 0 && fr < 2) {
               totalPairs++;
               map.set(nums[i], 1 + fr) 
            }
        } else {
            if (map.has(nums[i] + k)) {
                totalPairs++;
            }
            if (map.has(nums[i] - k)) {
                totalPairs++;
            }
            map.set(nums[i], 1); 
        }
        i++;
    }
    return totalPairs;
};
