"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayBasedStack {
    constructor(maxLength) {
        this.maxLength = maxLength;
        this.topIndex = 0;
        this.arr = new Array(maxLength);
    }
    push(elem) {
        if (this.topIndex + 1 > this.maxLength) {
            throw new Error('Stack overflow');
        }
        this.arr[++this.topIndex] = elem;
    }
    pop() {
        if (this.topIndex === 0) {
            throw new Error('Stack is empty');
        }
        return this.arr[this.topIndex--];
    }
    pick() {
        if (this.topIndex === 0) {
            throw new Error('Stack is empty');
        }
        return this.arr[this.topIndex];
    }
    isEmpty() {
        return this.topIndex === 0;
    }
}
exports.ArrayBasedStack = ArrayBasedStack;
//# sourceMappingURL=ArrayBasedStack.js.map