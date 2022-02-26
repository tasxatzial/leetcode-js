# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/merge-two-sorted-lists/).

Here's a list of algorithms that were used in the solutions.

## Merge (1 pass)

1. If either of the lists is null, return the other list.
2. Keep two pointers p1 & p2, each one points to the current node of each list. Also initialize an empty new list L.
3. Traverse both lists at the same time and while none of the current nodes is null:
   * If p1.val <= p2.val add a new node in L with p1.val as value and advance p1 to the next node.
   * Else add a new node in L with p2.val as value and advance p2 to the next node.
4. When at least one list has been processed, add the nodes of the other list to L.

**Solutions:**

* [Javascript](javascript/21.js)

**Complexity:**

N = list1 length

M = list2 length

* Time: O(N + M)
* Space: O(N + M)
