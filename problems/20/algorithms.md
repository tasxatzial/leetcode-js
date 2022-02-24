# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/valid-parentheses/).

Here's a list of algorithms that were used in the solutions.

## Stack

1. Traverse the string and for each char:
   * If it is a left bracket, add it to the stack.
   * If it is a right bracket, check if it matches the corresponding right bracket of the top stack element.
      * If yes, pop the stack and move to the next string char.
      * If no, the string has unbalanced brackets.

**Solutions:**

* [Javascript](javascript/20.js)

**Complexity:**

N = string length

* Time: O(N)
* Space: O(N)
