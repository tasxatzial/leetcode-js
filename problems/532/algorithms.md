# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/k-diff-pairs-in-an-array/).

Here's a list of algorithms that were used in the solutions.

## Binary Search

1. Sort the array.

2. Traverse the array and for each element Y:
   * If Y is equal to the previous element, move to the next element.
   * Else use binary search to find (Y + k). If found, increase the number of k-diff pairs by 1.

**Solutions:**

* [Javascript](javascript/532.js)

**Complexity:**

N = array length

* Time: O(NlogN)
* Space: O(N)

## Hash map & Hash set

### Hash map

When k = 0 we can use a hash map to store an element of the array (key) and how many times it appears in the array (value). The k-diff is 0 therefore we are looking for elements with the same value.

1. Traverse the array and for each element Y, call map_lookup(Y):
   * If it returns 1, increase the number of k-diff pairs by 1 and change its value to 2.
   * If Y is not in the map, add the pair (Y, 1) to the map.

### Hash set

When k != 0 we can use a hash set to store an element of the array.

1. Traverse the array and for each element Y, call set_lookup(Y). If it returns false:
    * Call set_lookup(Y + k). If it returns true, increase the number of k-diff pairs by 1.
    * Call set_lookup(Y - k). If it returns true, increase the number of k-diff pairs by 1.
    * Add Y to the set.

**Solutions:**

* [Javascript](javascript/532-2.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(N)
