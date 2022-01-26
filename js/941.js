/* https://leetcode.com/problems/valid-mountain-array/ */

/*
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i + 1] === arr[i]) {
            return false;
        }
        if (arr[i + 1] > arr[i]) {
            i++;
            continue;
        }
        if (arr[i + 1] < arr[i]) {
            break;
        }
    }
    if (i === 0 || i === arr.length - 1) {
        return false;
    }
    while (i < arr.length - 1) {
        if (arr[i + 1] >= arr[i]) {
            return false;
        }
        if (arr[i + 1] < arr[i]) {
            i++;
            continue;
        }
    }
    return true;
};
