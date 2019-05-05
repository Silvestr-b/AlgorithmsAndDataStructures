"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const main_1 = require("../main");
describe('DoublyLinkedList', () => {
    let ll;
    let n1;
    let n2;
    let n3;
    let n4;
    beforeEach(() => {
        ll = new main_1.DoublyLinkedList();
        n1 = new main_1.DoublyLinkedListNode(1);
        n2 = new main_1.DoublyLinkedListNode(2);
        n3 = new main_1.DoublyLinkedListNode(3);
        n4 = new main_1.DoublyLinkedListNode(4);
    });
    it('add: Should be added in right order', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,2,1');
    });
    it('insertAfter: Should be inserted in right place', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.insertAfter(n2, n4);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,2,4,1');
    });
    it('insertBefore: Should be inserted in right place', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.insertBefore(n2, n4);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,4,2,1');
    });
    it('replace: Should be replaced', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.replace(n2, n4);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,4,1');
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
    it('removeBefore: node should be removed', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.removeBefore(n1);
        chai_1.expect(stringifyLinkedList(ll)).equal('3,1');
    });
    it('removeBefore: if previos node is head passed node should become head', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.removeBefore(n2);
        chai_1.expect(stringifyLinkedList(ll)).equal('2,1');
    });
    it('removeBefore: if there is no node before passed, nothing should happen', () => {
        ll.add(n1);
        ll.add(n2);
        ll.add(n3);
        ll.removeBefore(n2);
        chai_1.expect(stringifyLinkedList(ll)).equal('2,1');
    });
});
function stringifyLinkedList(list) {
    let res = [];
    for (let node = list.head; node !== null; node = node.next) {
        res.push(node.value);
    }
    return res.join(',');
}
//# sourceMappingURL=DoublyLinkedList.js.map