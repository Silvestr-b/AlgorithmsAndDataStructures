"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedListBasedStack_1 = require("../main/LinkedListBasedStack");
const Stack_1 = require("./Stack");
describe('LinkedListBasedStack', () => {
    const ctx = {
        stack: new LinkedListBasedStack_1.LinkedListBasedStack()
    };
    beforeEach(() => {
        ctx.stack = new LinkedListBasedStack_1.LinkedListBasedStack();
    });
    Stack_1.comonStackTests(ctx);
});
//# sourceMappingURL=LinkedListBasedStack.js.map