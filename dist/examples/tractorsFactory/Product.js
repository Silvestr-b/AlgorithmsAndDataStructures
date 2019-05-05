"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name) {
        this.name = name;
        this.parts = [];
    }
    addPart(dep) {
        this.parts.push(dep);
    }
    getName() {
        return this.name;
    }
    getCost() {
        let cost = 0;
        for (let i = 0; i < this.parts.length; i++) {
            const part = this.parts[i];
            cost += part.getCost();
        }
        return cost;
    }
}
exports.Product = Product;
//# sourceMappingURL=Product.js.map