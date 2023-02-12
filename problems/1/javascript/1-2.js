/* Approach: Hash map

N = array length

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * Given an array of integers nums and an integer target, return the indices of the
 * two numbers that add up to target, or null if such numbers don't exist.
 * 
 * The same array element may not be used twice.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
let twoSum = function(nums, target) {
    let map = new Map();
    let i = 0;
    while(i < nums.length) {
        let diff = target - nums[i];
        let val = map.get(diff);
        if (val !== undefined) {
            return [i, val];
        }
        map.set(nums[i], i);
        i++;
    }
    return null;
};
