import { Stack } from "./Stack";


class LinkedListBasedStack<T> implements Stack<T> {
   private head: LinkedListBasedStackNode<T> = null;
   
   push(elem: T) {
      const newHead = new LinkedListBasedStackNode<T>(elem);
      if(this.head !== null) {
         newHead.next = this.head;
      }
      this.head = newHead;
   }

   pop() {
      if(this.head === null) {
         throw new Error('Stack is empty');
      }
      const value = this.head.value;
      this.head = this.head.next;
      return value;
   }

   pick() {
      if(this.head === null) {
         throw new Error('Stack is empty');
      }
      return this.head.value;
   }

   isEmpty() {
      return this.head === null;
   }

}

class LinkedListBasedStackNode<T> {
   public next: LinkedListBasedStackNode<T> = null;
   constructor(
      public value: T | null
   ) { }
}


export { LinkedListBasedStack }