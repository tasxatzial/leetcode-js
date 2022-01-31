/* Approach: Trie

N = array length
Y = length of binary number (32 bits)

Time complexity: O(96N)
  convert to binary: O(32N)
  add to binary tree: O(32N)
  find max XOR: O(32N)
Space complexity: O(32N)

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
  for (let i = 31; i>=0; i--) {
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
  return {val: bit, left: undefined, right: undefined};
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

  /**
 * Returns an array that represents the binary number X for which X ^ num is maximum.
 * 
 * @param {Object} treeRoot 
 * @param {number} num 
 * @returns {number[]}
 */
let findMaxXORBin = function(treeRoot, num) {
  let bin = toBinary(num);
  let res = [];
  let curr = treeRoot;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === 1) {
      if (curr.left !== undefined) {
        res.push(0);
        curr = curr.left;
      } else {
        res.push(1);
        curr = curr.right;
      }
    } else {
      if (curr.right !== undefined) {
        res.push(1);
        curr = curr.right;
      } else {
        res.push(0);
        curr = curr.left;
      }
    }
  }
  return res;
}

  /**
 * Returns the maximum XOR between any two numbers in the given array.
 * 
 * @param {number[]} nums
 * @returns {number}
 */
let findMaximumXOR = function(nums) {
  let root = createNode(-1);
  for (let i = 0; i < nums.length; i++) {
    treeAdd(root, nums[i]);
  }
  let max = 0;
  while (nums.length > 1) {
    let lastNum = nums[nums.length - 1];
    let res = findMaxXORBin(root, lastNum);
    let maxXOR = toDecimal(res) ^ lastNum;
    if (maxXOR > max) {
      max = maxXOR;
    }
    nums.pop();
  }
  return max;
}
