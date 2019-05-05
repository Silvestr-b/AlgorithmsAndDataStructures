import { SinglyLinkedListNode } from "./SinglyLinkedListNode";


class SinglyLinkedList {
   private head: SinglyLinkedListNode = null;

   add(node: SinglyLinkedListNode) {
      if(this.head === null) {
         this.head = node;
      } else {
         node.next = this.head;
         this.head = node;
      }
   }

   insertAfter(node: SinglyLinkedListNode, newNode: SinglyLinkedListNode) {
      newNode.next = node.next
      node.next = newNode;
   }

   remove() {
      if(this.head === null) return;
      this.head = this.head.next;
   }
   
   removeAfter(node: SinglyLinkedListNode) {
      if(node.next === null) return;
      node.next = node.next.next;
   }
}


export { SinglyLinkedList }