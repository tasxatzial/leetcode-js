/* Approach: 1 pass

N = list1 length
M = list2 length

Time complexity: O(N + M)
Space complexity: O(N + M)
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Merge the two sorted lists in a one sorted list.
 * 
 * @param {ListNode} list1 
 * @param {ListNode} list2 
 * @returns {ListNode}
 */
let mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let mergedList = {};
    let ptr1 = list1;
    let ptr2 = list2;
    let ptr3 = mergedList;
    while (ptr1 !== null && ptr2 !== null) {
        ptr3.next = {};
        ptr3 = ptr3.next;        
        if (ptr1.val <= ptr2.val) {
            ptr3.val = ptr1.val;
            ptr1 = ptr1.next;
        } else {
            ptr3.val = ptr2.val;
            ptr2 = ptr2.next;
        }
    }
    let remainingList = (ptr1 === null) ? ptr2 : ptr1;
    while (remainingList !== null) {
        ptr3.next = {};
        ptr3 = ptr3.next;
        ptr3.val = remainingList.val;
        remainingList = remainingList.next;
    }
    ptr3.next = null;
    return mergedList.next;
};
