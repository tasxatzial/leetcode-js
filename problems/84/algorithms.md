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

## Stack (3 pass)

The idea here is the same as in the [brute force](#brute-force) approach. For each element Y instead of traversing the array to find the index of the first element to its left (right) that is less than Y, we now use a stack to find all the indices with just one array traversal.

1. Traverse the array and create an array P of the previous smaller elements.
2. Traverse the array and create an array N of the next smaller elements.
3. Traverse the array, for each element arr[i] the maximum area is arr[i]*(N[i] - P[i] - 1);
4. The maximum of all areas from the previous step is the solution.

**Solutions:**

* [Javascript](javascript/84.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(N)

## Stack (1 pass)

This solution should be faster than the [stack (3 pass)](#stack-two-pass) approach and requires less space. We also use a stack but now the maximum area is found with just a single array traversal.

**Solutions:**

* [Javascript](javascript/84-2.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(N)

## Recursion

The idea here is that if Y is the smallest height in the histogram, the maximum area we are looking for is the max of:

* Y * histogram.length.
* Max area of the sub-histogram to the left of Y.
* Max area of the sub-histogram to the right of Y.

We can apply the same idea to the sub-histograms to the left and right of Y.

This is a faster solution than [brute force](#brute-force) but slower than any of the solutions [[1]](#stack-1-pass) [[2]](#stack-3-pass) that use stacks. It requires more space as well.

**Solutions:**

Not implemented.

**Complexity:**

N = array length

Finding the minimum in each sub-histogram can be done in O(logN) with a [segment tree](https://en.wikipedia.org/wiki/Segment_tree).

* Time: O(NlogN)
* Space: O(N)
