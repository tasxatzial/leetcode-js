# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/k-diff-pairs-in-an-array/).

Here's a list of algorithms that were used in the solutions.

## Binary Search

1. Sort the array.

2. If (Y) is an element of the array, the k-diff pair is (Y, Y + k). Therefore we can use binary search to find (Y + k).

**Solutions:**

* [Javascript](javascript/532.js)

**Complexity:**

N = array length

* Time: O(NlogN)
* Space: O(N)

## Hash map / Hash set

**Solutions:**

* [Javascript](javascript/532-2.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(N)
