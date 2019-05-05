import { DoublyLinkedListNode } from "./DoublyLinkedListNode";


class DoublyLinkedList {
   private head: DoublyLinkedListNode = null;

   add(node: DoublyLinkedListNode) {
      if(this.head === null) {
         this.head = node;
      } else {
         node.next = this.head;
         this.head.prev = node;
         this.head = node;
      }
   }
   insertAfter(node: DoublyLinkedListNode, newNode: DoublyLinkedListNode) {
      newNode.prev = node;
      newNode.next = node.next;
      node.next.prev = newNode;
      node.next = newNode;
   }
   insertBefore(node: DoublyLinkedListNode, newNode: DoublyLinkedListNode) {
      newNode.next = node;
      newNode.prev = node.prev;
      node.prev.next = newNode;
      node.prev = newNode;
   }
   replace(node: DoublyLinkedListNode, newNode: DoublyLinkedListNode) {
      newNode.prev = node.prev;
      newNode.next = node.next;
      node.next.prev = newNode;
      node.prev.next = newNode;
   }

   remove() {
      if(this.head === null) return;
      if(this.head.next !== null) {
         this.head.next.prev = null;
      }
      this.head = this.head.next;
   }

   removeAfter(node: DoublyLinkedListNode) {
      if(node.next === null) return;
      if(node.next.next !== null) {
         node.next.next.prev = node;
         node.next = node.next.next;
      } else {
         node.next = null;
      }
   }

   removeBefore(node: DoublyLinkedListNode) {
      if(node.prev === null) return;
      if(node.prev.prev !== null) {
         node.prev.prev.next = node;
         node.prev = node.prev.prev;
      } else {
         node.prev = null;
         this.head = node;
      }
   }
}


export { DoublyLinkedList }