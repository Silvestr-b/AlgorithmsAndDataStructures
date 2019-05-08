import { expect } from "chai";
import { LinkedListBasedStack } from "../main/LinkedListBasedStack";
import { comonStackTests } from "./Stack";


describe('LinkedListBasedStack', () => {
   const ctx = {
      stack: new LinkedListBasedStack<any>()
   }

   beforeEach(() => {
      ctx.stack = new LinkedListBasedStack();
   })

   comonStackTests(ctx);
})