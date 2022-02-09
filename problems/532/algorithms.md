# Algorithms

**Problem**: Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

Here's a list of algorithms that can be used to solved the problem.

## Binary Search

1. Sort the array.

2. Get the first element of the array (Y) and compute (X = Y + k).

3. Do a binary search for X. If found, increase the total number of pairs.

4. Goto 2 and repeat the process for the next element of the array that is not the same as the current element.

**Solutions:**

* [Javascript](javascript/532.js)

**Complexity:**

N = array length

* Time: O(NlogN)
* Space: O(N)
