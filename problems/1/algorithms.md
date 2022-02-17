# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/two-sum/).

Here's a list of algorithms that were used in the solutions.

## Binary search

1. Sort the array.

2. Traverse the array and for each element Y compute its difference D from the target. Use binary search to find D. If found, return [indexOf(Y), indexOf(D)] as the solution.

**Solutions:**

* [Javascript](javascript/1.js)

**Complexity:**

N = array length

* Time: O(NlogN)
* Space: O(N)

## Hash map

We can use a hash map to store an element of the array (key) and its corresponding index (value).

1. Traverse the array and for each element Y compute its difference D from the target. Call map_lookup(D):
   * If D exists in the map, return [indexOf(Y), indexOf(D)] as the solution.
   * Else add the pair (Y, indexOf(Y)) to the hash map.

**Solutions:**

* [Javascript](javascript/1-2.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(N)
