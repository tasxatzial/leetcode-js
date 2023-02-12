/* Approach: Tree traversal (recursive)

N = number of elements in tree

Time complexity: O(N)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number[][]}
 */
 let pathSum = function(root, targetSum) {
    let result = [];
    let pathToRoot = [];
    findPaths(root, result, pathToRoot, targetSum);
    return result;
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number[][]} result 
 * @param {number[]} pathToNode 
 * @param {number} target 
 * @returns {void}
 */
let findPaths = function(node, result, pathToNode, target) {
    if (node === null) {
        return;
    }
    let newTarget =  target - node.val;
    pathToNode.push(node.val);
    if (node.left === null && node.right === null) {
        if (newTarget === 0) {
            result.push([...pathToNode]);
        }
    }
    else {
        findPaths(node.left, result, pathToNode, newTarget);
        findPaths(node.right, result, pathToNode, newTarget);
    }
    pathToNode.pop();
};
