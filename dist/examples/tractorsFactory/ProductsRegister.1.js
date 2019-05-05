"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsRegister {
    constructor() {
        this.products = {};
    }
    add(product) {
        this.products[product.getName()] = product;
    }
    remove(product) {
        delete this.products[product.getName()];
    }
    has(productName) {
        return this.products[productName];
    }
    getCostFor(productName) {
        if (!this.has(productName)) {
            throw new Error('Product not found');
        }
        const product = this.products[productName];
        const productCost = product.getCost();
        return productCost;
    }
}
exports.ProductsRegister = ProductsRegister;
//# sourceMappingURL=ProductsRegister.1.js.map