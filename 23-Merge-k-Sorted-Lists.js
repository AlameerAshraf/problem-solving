class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes
    current.next = l1 !== null ? l1 : l2;

    return dummy.next;
}

function mergeKLists(lists) {
    if (lists.length === 0) return null;
    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists, left, right) {
    if (left === right) {
        return lists[left];
    }
    
    let mid = Math.floor((left + right) / 2);
    let l1 = mergeHelper(lists, left, mid);
    let l2 = mergeHelper(lists, mid + 1, right);

    return mergeTwoLists(l1, l2);
}
