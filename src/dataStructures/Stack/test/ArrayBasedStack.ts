import { expect } from "chai";
import { ArrayBasedStack } from "../main/ArrayBasedStack";
import { comonStackTests } from "./Stack";


describe('ArrayBasedStack', () => {
   const ctx = {
      stack: new ArrayBasedStack<any>(0)
   }

   beforeEach(() => {
      ctx.stack = new ArrayBasedStack(10);
   })

   it('When try to push elem to to full stack, Error should be throwen', () => {
      ctx.stack = new ArrayBasedStack(2);
      ctx.stack.push(1);
      ctx.stack.push(2);
      expect(() => ctx.stack.push(3)).to.throw('Stack overflow');
   })

   comonStackTests(ctx);
})