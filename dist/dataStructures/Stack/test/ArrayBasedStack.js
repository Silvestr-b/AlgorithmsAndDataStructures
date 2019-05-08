"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ArrayBasedStack_1 = require("../main/ArrayBasedStack");
const Stack_1 = require("./Stack");
describe('ArrayBasedStack', () => {
    const ctx = {
        stack: new ArrayBasedStack_1.ArrayBasedStack(0)
    };
    beforeEach(() => {
        ctx.stack = new ArrayBasedStack_1.ArrayBasedStack(10);
    });
    it('When try to push elem to to full stack, Error should be throwen', () => {
        ctx.stack = new ArrayBasedStack_1.ArrayBasedStack(2);
        ctx.stack.push(1);
        ctx.stack.push(2);
        chai_1.expect(() => ctx.stack.push(3)).to.throw('Stack overflow');
    });
    Stack_1.comonStackTests(ctx);
});
//# sourceMappingURL=ArrayBasedStack.js.map