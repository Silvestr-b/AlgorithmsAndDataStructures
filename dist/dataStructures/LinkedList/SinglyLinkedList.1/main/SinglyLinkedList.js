"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    add(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }
    insertAfter(node, newNode) {
        newNode.next = node.next;
        node.next = newNode;
    }
    remove() {
        if (this.head === null)
            return;
        this.head = this.head.next;
    }
    removeAfter(node) {
        if (node.next === null)
            return;
        node.next = node.next.next;
    }
}
exports.SinglyLinkedList = SinglyLinkedList;
//# sourceMappingURL=SinglyLinkedList.js.map