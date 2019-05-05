import { expect } from "chai";
import { SinglyLinkedList, SinglyLinkedListNode} from "../main";


describe('SinglyLinkedList', () => {
   let ll: SinglyLinkedList;
   let n1: SinglyLinkedListNode; 
   let n2: SinglyLinkedListNode;
   let n3: SinglyLinkedListNode;
   let n4: SinglyLinkedListNode;

   beforeEach(() => {
      ll = new SinglyLinkedList();
      n1 = new SinglyLinkedListNode(1);
      n2 = new SinglyLinkedListNode(2);
      n3 = new SinglyLinkedListNode(3);
      n4 = new SinglyLinkedListNode(4);
   })

   it('add: Should be added in right order', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);

      expect(stringifyLinkedList(ll)).equal('3,2,1')
   })

   it('insertAfter: Should be added in right place', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);
      ll.insertAfter(n2, n4);

      expect(stringifyLinkedList(ll)).equal('3,2,4,1')
   })

   it('remove: head node should be removed', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);
      ll.remove();

      expect(stringifyLinkedList(ll)).equal('2,1')
   })

   it('remove: head node should be removed', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);
      ll.remove();

      expect(stringifyLinkedList(ll)).equal('2,1')
   })

   it('remove: if list is empty nothing should happen', () => {
      ll.remove();

      expect(stringifyLinkedList(ll)).equal('')
   })

   it('removeAfter: node should be removed', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);
      ll.removeAfter(n3);

      expect(stringifyLinkedList(ll)).equal('3,1')
   })

   it('removeAfter: if there is no node after passed, nothing should happen', () => {
      ll.add(n1);
      ll.add(n2);
      ll.add(n3);
      ll.removeAfter(n1);

      expect(stringifyLinkedList(ll)).equal('3,2,1')
   })
   
}) 


function stringifyLinkedList(list: any) {
   let res = [];
   for(let node = list.head; node !== null; node = node.next) {
      res.push(node.value)
   }
   return res.join(',');
}