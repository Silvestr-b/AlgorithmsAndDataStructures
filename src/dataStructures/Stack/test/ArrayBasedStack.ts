import { expect } from "chai";
import { ArrayBasedStack } from "../main/ArrayBasedStack";


describe('ArrayBasedStack', () => {
   let stack: ArrayBasedStack<number>;
   beforeEach(() => {
      stack = new ArrayBasedStack(10);
   })

   it('If element is pushed, stack should be not empty', () => {
      stack.push(1);
      expect(stack.isEmpty()).to.be.false;
   })

   it('When element is pushed, it should be at latest position', () => {
      stack.push(1);
      expect(stack.pick()).to.be.equal(1);
   })

   it('When element is picked, it should stay in stack', () => {
      stack.push(1);
      stack.pick();
      expect(stack.pop()).to.be.equal(1);
   })

   it('When try to pick elem from empty stack, Error should be throwen', () => {
      expect(() => stack.pick()).to.throw('Stack is empty')
   })

   it('When several elements are pushed, they should be poped in correct order', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).to.be.equal(3);
      expect(stack.pop()).to.be.equal(2);
      expect(stack.pop()).to.be.equal(1);
   })

   it('When try to push elem to to full stack, Error should be throwen', () => {
      stack = new ArrayBasedStack(2);
      stack.push(1);
      stack.push(2);
      expect(() => stack.push(3)).to.throw('Stack overflow');
   })

   it('When try to pop elem from empty stack, Error should be throwen', () => {
      expect(() => stack.pop()).to.throw('Stack is empty')
   })
})