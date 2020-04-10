
class Node {
    next = undefined;

    constructor(value) {
        this.value = value;
    }
}

export default function solution(list1, list2) {
    let list1Pointer = list1;
    let list2Pointer = list2;
    const resultingListPointer = new Node(Number.NEGATIVE_INFINITY);
    let currentPointer = resultingListPointer;
    
    while (list1Pointer !== undefined && list2Pointer !== undefined) {
        if (list1Pointer.value < list2Pointer.value) {
            currentPointer.next = new Node(list1Pointer.value);
            list1Pointer = list1Pointer.next;
        } else {
            currentPointer.next = new Node(list2Pointer.value);
            list2Pointer = list2Pointer.next;
        }
        currentPointer = currentPointer.next;
    }

    // fill in the remaining list items

    return resultingListPointer.next;
}
