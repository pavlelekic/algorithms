/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;
    // if (headA === headB) return headA;
    let lengthA = 0;
    let lengthB = 0;
    let currA = headA;
    let currB = headB;
    while (currA.next !== null) {
        lengthA++;
        currA = currA.next;
    }
    while (currB.next !== null) {
        lengthB++;
        currB = currB.next;
    }

    const lengthDelta = Math.abs(lengthA - lengthB);
    // console.log(lengthDelta);
    
    currA = headA;
    currB = headB;
    for (let i = 0; i < lengthDelta; i++) {
        if (lengthA > lengthB) {
            currA = currA.next;
        } else {
            currB = currB.next;
        }
    }

    while (currA !== null) {
        if (currA === currB) return currA;
        currA = currA.next;
        currB = currB.next;
    }

    return null;
};
