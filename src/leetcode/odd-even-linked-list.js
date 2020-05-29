/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return null;
    let currentEvenNode = head.next;
    let currentOddNode = head;
    let oddHead = head;
    let evenHead = head.next;
    while(currentOddNode.next !== null && currentEvenNode.next !== null) {
        if (currentEvenNode.next !== null) {
            currentOddNode.next = currentEvenNode.next;
            currentOddNode = currentOddNode.next;
        }
        if (currentOddNode.next !== null) {
            currentEvenNode.next = currentOddNode.next;
            currentEvenNode = currentEvenNode.next;
        }
    }

    currentOddNode.next = evenHead;
    if (currentEvenNode !== null) {
        currentEvenNode.next = null;
    }

    // logList(oddHead)

    return oddHead;
};

function logList(list) {
    while(list !== null) {
        console.log(list.val);
        list = list.next;
    }
}
