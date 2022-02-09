/* Approach: Hash map

N = array length

Time complexity: O(N)
Space complexity: O(N)
*/

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * The same array element may not be used twice.
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
var twoSum = function(nums, target) {
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
