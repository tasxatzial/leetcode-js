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

/**
 * Returns an object that represents a node in a binary tree. The node value is the given bit.
 * 
 * bit must take values 0 or 1.
 * 
 * @param {number} bit 
 * @returns {Object}
 */
 let createNode = function(bit) {
    return {val: bit,
           left: undefined,
           right: undefined};
  }
  
  /**
   * Adds a new node as a child of the given parentNode. The node value is the given bit.
   * Does not add any node if the given bit already exists as a value of either children.
   * Returns the child node.
   * 
   * bit must take values 0 or 1.
   * 
   * @param {Object} parentNode 
   * @param {number} bit 
   * @returns {Object}
   */
  let addNode = function(parentNode, bit) {
    if (bit === 1) {
      if (parentNode.right === undefined) {
        parentNode.right = createNode(bit);
      }
      return parentNode.right;
    } else {
      if (parentNode.left === undefined) {
        parentNode.left = createNode(bit);
      }
      return parentNode.left;
    }
  }
  
  /**
   * Adds num (decimal) to the given tree.
   * 
   * @param {Object} treeRoot 
   * @param {number} num 
   */
  let treeAdd = function(treeRoot, num) {
    let bin = toBinary(num);
    let curr = treeRoot;
    for (let i = 0; i < bin.length; i++) {
      curr = addNode(curr, bin[i]);
    }
  }
  