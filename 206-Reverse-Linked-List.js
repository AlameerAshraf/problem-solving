function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next;  // Store the next node
        current.next = prev;      // Reverse the current node's pointer
        prev = current;           // Move prev to the current node
        current = next;           // Move to the next node
    }
    
    return prev;  // Prev will be the new head of the reversed list
}