# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/largest-rectangle-in-histogram/).

Here's a list of algorithms that were used in the solutions.

## Brute force

1. Traverse the array and for each element Y:
   * Find the index i1 of the first element to its left that is less than Y.
   * Find the index i2 of the first element to its right that is less than Y.
   * The area of the largest rectangle is (i2 - i1 + 1) * Y.
2. The maximum area of all areas from the previous step is the solution.

**Solutions:**

Not implemented.

**Complexity:**

N = array length

* Time: O(N^2)
* Space: O(1)
