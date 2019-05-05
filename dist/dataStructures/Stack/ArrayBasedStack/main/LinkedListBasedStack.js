"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedListBasedStack {
    constructor() {
        this.head = null;
    }
    push(elem) {
        const newHead = new LinkedListBasedStackNode(elem);
        if (this.head !== null) {
            newHead.next = this.head;
        }
        this.head = newHead;
    }
    pop() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }
    pick() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        }
        return this.head.value;
    }
    isEmpty() {
        return this.head === null;
    }
}
exports.LinkedListBasedStack = LinkedListBasedStack;
class LinkedListBasedStackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//# sourceMappingURL=LinkedListBasedStack.js.map