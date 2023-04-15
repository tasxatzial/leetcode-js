# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/).

Here's a list of algorithms that were used in the solutions.

## Binary search

The standard binary search algorithm can easily be modified to find the first or last position of the target element.

1. Use binary search to find the first position F of the target.
2. Use binary search to find the last position L of the target.
3. Return [F, L]

**Solutions:**

* [Javascript](javascript/34.js)

**Complexity:**

N = array length

* Time: O(logN)
* Space: O(1)
