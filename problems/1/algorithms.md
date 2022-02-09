# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/two-sum/).

Here's a list of algorithms that were used in the solutions.

## Binary Search

1. Sort the array.

2. Get the first element of the array (Y) and compute its difference (X) from the target.

3. Do a binary search for X.
    * If X is found, search the unsorted array and return the indices of X and Y as the solution.
    * Else goto 2 and repeat the process for the next element of the array.

**Solutions:**

* [Javascript](javascript/1.js)

**Complexity:**

N = array length

* Time: O(NlogN)
* Space: O(N)
