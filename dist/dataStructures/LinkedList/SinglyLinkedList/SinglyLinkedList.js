"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SinglyLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
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
    toString() {
        let str = '';
        for (let node = this.head; node !== null; node = node.next) {
            str += ` -> ${node.value}`;
        }
        return str;
    }
}
SinglyLinkedList.Node = SinglyLinkedListNode;
exports.SinglyLinkedList = SinglyLinkedList;
const ll = new SinglyLinkedList();
const n1 = new SinglyLinkedList.Node(1);
const n2 = new SinglyLinkedList.Node(2);
const n3 = new SinglyLinkedList.Node(3);
const n4 = new SinglyLinkedList.Node(4);
ll.add(n1);
ll.add(n2);
ll.add(n3);
// ll.insertAfter(n2, n4)
// ll.remove()
ll.removeAfter(n2);
console.log(ll.toString());
//# sourceMappingURL=SinglyLinkedList.js.map