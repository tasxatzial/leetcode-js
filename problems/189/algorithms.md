# Algorithms

See the problem description on [leetcode](https://leetcode.com/problems/rotate-array/).

Here's a list of algorithms that were used in the solutions.

## Reversing sub-arrays

1. Set k = k % array.length.

2. Reverse the array.

3. Reverse the array from indices 0 to (k-1) included.

4. Reverse the array from indices k to (array.length-1) included.

**Solutions:**

* [Javascript](javascript/189-2.js)

**Complexity:**

N = array length

* Time: O(N)
* Space: O(1)

## Quotient group

1. Find gcd = GCD(k, array.length).

2. For s = 0..(gcd-1) rotate to the right k steps the elements in indices 0+s, k+s, 2*k+s, ...

**Solutions:**

* [Javascript](javascript/189-3.js)

**Complexity:**

This solution should be faster than [reversing sub-arrays](#reversing-sub-arrays).

N = array length

* Time: O(N)
* Space: O(1)
