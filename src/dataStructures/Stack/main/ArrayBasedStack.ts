import { Stack } from "./Stack";


class ArrayBasedStack<T> implements Stack<T> {
   private arr: T[];
   private topIndex = 0;

   constructor(private maxLength: number) {
      this.arr = new Array(maxLength);
   }

   push(elem: T) {
      if(this.topIndex+1 > this.maxLength) {
         throw new Error('Stack overflow');
      }
      this.arr[++this.topIndex] = elem;
   }

   pop() {
      if(this.topIndex === 0) {
         throw new Error('Stack is empty')
      }
      return this.arr[this.topIndex--];
   }

   pick() {
      if(this.topIndex === 0) {
         throw new Error('Stack is empty')
      }
      return this.arr[this.topIndex];
   }

   isEmpty() {
      return this.topIndex === 0
   }
}


export { ArrayBasedStack }