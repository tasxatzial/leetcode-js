/* https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/ */

/*
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.
*/

const maxPow2 = 2 ** 31;

/**
 * Converts a decimal number to binary (array of 0,1).
 * 
 * @param {number} num 
 * @returns 
 */
let toBinary = function(num) {
  let bin = [];
  for (let i = 31; i>=0; i--){
    bin.push((num >> i) & 1)
  }
  return bin;
}

/**
 * Converts a binary number (represented by an array of 0,1) to decimal.
 * 
 * @param {number[]} bin 
 * @returns {number}
 */
let toDecimal = function(bin) {
  let sum = 0;
  let pow2 = maxPow2;
  for (let i = 0; i < bin.length; i++) {
    sum += bin[i] * pow2;
    pow2 /= 2;
  }
  return sum;
}
