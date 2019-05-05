"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        this.prevNode = null;
    }
    getNext() {
        return this.nextNode;
    }
    getPrev() {
        return this.prevNode;
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map