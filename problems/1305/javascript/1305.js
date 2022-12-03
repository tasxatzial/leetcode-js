/* Approach: Tree traversal (recursive)

N = number of elements in tree

Time complexity: O(?)
    collect tree values: O(N)
    sort: O(?) [built-in sort function]
Space complexity: O(?)
    collect tree values: O(N)
    sort: O(?) [built-in sort function]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 let getAllElements = function(root1, root2) {
    let root1Vals = [];
    let root2Vals = [];
    collectVals(root1, root1Vals);
    collectVals(root2, root2Vals);
    root1Vals.push(...root2Vals);
    return root1Vals.sort((a,b) => a - b);
};

let collectVals = function(root, vals) {
    if (root === null) {
        return vals;
    }
    vals.push(root.val);
    collectVals(root.left, vals);
    collectVals(root.right, vals);
};
