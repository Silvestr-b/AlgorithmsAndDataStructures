"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentsRegister {
    constructor() {
        this.components = {};
    }
    add(product) {
        this.components[product.getName()] = product;
    }
    get(componentName) {
        if (!this.has(componentName)) {
            throw new Error(`We do not produce: ${componentName}`);
        }
        return this.components[componentName];
    }
    remove(component) {
        delete this.components[component.getName()];
    }
    has(componentName) {
        return !!this.components[componentName];
    }
}
exports.ComponentsRegister = ComponentsRegister;
//# sourceMappingURL=ComponentsRegister.js.map