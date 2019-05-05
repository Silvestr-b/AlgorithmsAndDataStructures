"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkedList {
    constructor() {
        this.head = new LinkedList.LinkedListNode(0);
        this.length = 0;
    }
    toString() {
        let str = '';
        for (let node = this.head.nextNode; node !== null; node = node.nextNode) {
            str += ` -> ${node.value}`;
        }
        return str;
    }
    addHead(value) {
        const node = new LinkedList.LinkedListNode(value);
        const temp = this.head.nextNode;
        node.nextNode = temp;
        this.head.nextNode = node;
        this.length++;
    }
    addEnd(value) {
        const newNode = new LinkedList.LinkedListNode(value);
        let lastNode = this.head;
        while (lastNode.nextNode !== null) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = newNode;
        this.length++;
    }
    addAfter(pos, value) {
        if (pos > this.length - 1) {
            throw new Error(`Index higher than length: ${pos}`);
        }
        ;
        for (let node = this.head, i = -1; i <= pos; node = node.nextNode, i++) {
            if (i === pos) {
                const oldNext = node.nextNode;
                const newNext = new LinkedList.LinkedListNode(value);
                newNext.nextNode = oldNext;
                node.nextNode = newNext;
            }
        }
        this.length++;
    }
}
// getHead() {
//    return this.head.value;
// }
// getEnd() {
//    return this.end.value;
// }
// getAtPosition(pos: number) {
//    for(let node = this.head, i = 0; node.nextNode !== null; node = node.nextNode, i++) {
//       if(i === pos) {
//          return node.value;
//       }
//    }
// }
// removeHead() {
//    if(this.head === null) return;
//    if(this.head.nextNode === null) {
//       this.head = null;
//       this.end = null;
//    } else {
//       this.head = this.head.nextNode;
//    }
// }
// removeEnd() {
//    if(this.end === null) return;
//    if(this.head.nextNode === null) {
//       this.head = null;
//       this.end = null;
//    } else {
//       for(let node = this.head, i = 0; node.nextNode !== null; node = node.nextNode, i++) {
//          if(i === pos) {
//             return node.value;
//          }
//       }
//    }
// }
// removeAtPosition(pos: number) {
//    if(this.head === null) return;
// }
LinkedList.LinkedListNode = class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
    getNext() {
        return this.nextNode;
    }
    getPrev() {
        return this.prevNode;
    }
};
exports.LinkedList = LinkedList;
const ll = new LinkedList();
ll.addHead(1);
ll.addHead(2);
ll.addHead(3);
ll.addEnd(55);
ll.addAfter(2, 9238903);
console.log(ll.toString());
//# sourceMappingURL=LinkedList.js.map