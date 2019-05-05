"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const main_1 = require("../main");
describe('SinglyLinkedList', () => {
    let ll;
    let n1;
    let n2;
    let n3;
    let n4;
    beforeEach(() => {
        ll = new main_1.SinglyLinkedList();
        n1 = new main_1.SinglyLinkedListNode(1);
        n2 = new main_1.SinglyLinkedListNode(2);
        n3 = new main_1.SinglyLinkedListNode(3);
        n4 = new main_1.SinglyLinkedListNode(4);
    });
    it('add: Should be added in right order', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,2,1');
    });
    it('insertAfter: Should be added in right place', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.insertAfter(n2, n4);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,2,4,1');
    });
    it('remove: head node should be removed', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.remove();
        chai_1.expect(stringifyLinkedList(ll)).equal('2,1');
    });
    it('remove: head node should be removed', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.remove();
        chai_1.expect(stringifyLinkedList(ll)).equal('2,1');
    });
    it('remove: if list is empty nothing should happen', () => {
        ll.remove();
        chai_1.expect(stringifyLinkedList(ll)).equal('');
    });
    it('removeAfter: node should be removed', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.removeAfter(n3);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,1');
    });
    it('removeAfter: if there is no node after passed, nothing should happen', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.removeAfter(n1);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,2,1');
    });
});
function stringifyLinkedList(list) {
    let res = [];
    for (let node = list.head; node !== null; node = node.next) {
        res.push(node.value);
    }
    return res.join(',');
}
//# sourceMappingURL=SinglyLinkedList.js.map