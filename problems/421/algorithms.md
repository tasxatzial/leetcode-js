# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/).

Here's a list of algorithms that can be used to solved the problem.

## Trie

This solution is based on the fact that A XOR B is maximized when the corresponding bits of the binary representations of A and B are different.

1. Convert each number to its 32-bit binary representation and store it in a Trie. Use one node for each digit.

2. For each number A in nums use the trie to find the number B that maximizes A XOR B.

3. The maximum of all A XOR B from the previous step is the solution.

**Solutions:**

* [Javascript](javascript/421.js)

**Complexity:**

N = array length

* Time: O(96N) -> O(N)
* Space: O(32N) -> O(N)
