/* Approach: Linear pass

Time complexity: O(N) */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
let validMountainArray = function(arr) {
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
