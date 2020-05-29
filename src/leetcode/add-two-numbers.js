// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const result = new ListNode();
    let currentResultNode = result;
    let leftOver = 0;

    while (true) {
        console.log(JSON.stringify(l1),JSON.stringify(l2));
        currentResultNode.val = leftOver + (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
        leftOver = 0;
        if (currentResultNode.val > 9) {
            leftOver = 1;
            currentResultNode.val -= 10;
        }

        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }

        if ((l1 !== null || l2 !== null) || leftOver === 1) {
            currentResultNode.next = new ListNode();
            currentResultNode = currentResultNode.next;
        } else {
            break;
        }
    }

    return result;
};