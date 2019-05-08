"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const comonStackTests = (ctx) => {
    it('If element is pushed, stack should be not empty', () => {
        ctx.stack.push(1);
        chai_1.expect(ctx.stack.isEmpty()).to.be.false;
    });
    it('When element is pushed, it should be at latest position', () => {
        ctx.stack.push(1);
        chai_1.expect(ctx.stack.pick()).to.be.equal(1);
    });
    it('When element is picked, it should stay in stack', () => {
        ctx.stack.push(1);
        ctx.stack.pick();
        chai_1.expect(ctx.stack.pop()).to.be.equal(1);
    });
    it('When try to pick elem from empty stack, Error should be throwen', () => {
        chai_1.expect(() => ctx.stack.pick()).to.throw('Stack is empty');
    });
    it('When several elements are pushed, they should be poped in correct order', () => {
        ctx.stack.push(1);
        ctx.stack.push(2);
        ctx.stack.push(3);
        chai_1.expect(ctx.stack.pop()).to.be.equal(3);
        chai_1.expect(ctx.stack.pop()).to.be.equal(2);
        chai_1.expect(ctx.stack.pop()).to.be.equal(1);
    });
    it('When try to pop elem from empty stack, Error should be throwen', () => {
        chai_1.expect(() => ctx.stack.pop()).to.throw('Stack is empty');
    });
};
exports.comonStackTests = comonStackTests;
//# sourceMappingURL=Stack.js.map