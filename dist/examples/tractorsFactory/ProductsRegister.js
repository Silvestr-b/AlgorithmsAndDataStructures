"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsRegister {
    constructor() {
        this.products = {};
    }
    add(product) {
        this.products[product.getName()] = product;
    }
    get(productName) {
        if (!this.has(productName)) {
            throw new Error(`We do not produce: ${productName}`);
        }
        return this.products[productName];
    }
    remove(product) {
        delete this.products[product.getName()];
    }
    has(productName) {
        return !!this.products[productName];
    }
    getCostFor(productName) {
        const product = this.get(productName);
        const productCost = product.getCost();
        return productCost;
    }
}
exports.ProductsRegister = ProductsRegister;
//# sourceMappingURL=ProductsRegister.js.map