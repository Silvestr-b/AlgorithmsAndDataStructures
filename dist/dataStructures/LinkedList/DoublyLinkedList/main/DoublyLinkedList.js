"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DoublyLinkedList {
    constructor() {
        this.head = null;
    }
    add(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }
    insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.next = newNode;
    }
    insertBefore(node, newNode) {
        newNode.next = node;
        newNode.prev = node.prev;
        node.prev.next = newNode;
        node.prev = newNode;
    }
    replace(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node.next;
        node.next.prev = newNode;
        node.prev.next = newNode;
    }
    remove() {
        if (this.head === null)
            return;
        if (this.head.next !== null) {
            this.head.next.prev = null;
        }
        this.head = this.head.next;
    }
    removeAfter(node) {
        if (node.next === null)
            return;
        if (node.next.next !== null) {
            node.next.next.prev = node;
            node.next = node.next.next;
        }
        else {
            node.next = null;
        }
    }
    removeBefore(node) {
        if (node.prev === null)
            return;
        if (node.prev.prev !== null) {
            node.prev.prev.next = node;
            node.prev = node.prev.prev;
        }
        else {
            node.prev = null;
            this.head = node;
        }
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
//# sourceMappingURL=DoublyLinkedList.js.map