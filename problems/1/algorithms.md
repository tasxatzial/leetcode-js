# Algorithms

**Problem**: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Here's a list of algorithms that can be used to solved the problem.

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
