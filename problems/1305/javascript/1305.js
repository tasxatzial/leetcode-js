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

var collectVals = function(root) {
    if (root == undefined) {
        return [];
    }
    if (root.left == undefined && root.right == undefined) {
        return [root.val];
    }
    let leftVals = collectVals(root.left);
    let rightVals = collectVals(root.right);
    let res = [root.val];
    res.push(...leftVals);
    res.push(...rightVals);
    return res;
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let root1Vals = collectVals(root1);
    let root2Vals = collectVals(root2);
    let res = root1Vals;
    res.push(...root2Vals);
    return res.sort((a,b) => a - b);
};
