"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentsRegister_1 = require("./ComponentsRegister");
const ProductsRegister_1 = require("./ProductsRegister");
const Component_1 = require("./Component");
const Product_1 = require("./Product");
class DataParser {
    constructor(productsData, componentsData) {
        this.productsData = productsData;
        this.componentsData = componentsData;
        this.componentsRegister = new ComponentsRegister_1.ComponentsRegister();
        this.productsRegister = new ProductsRegister_1.ProductsRegister();
    }
    parse() {
        this.parseComponents();
        this.parseProducts();
        this.parseDependencies();
        return this.productsRegister;
    }
    parseComponents() {
        for (let componentName in this.componentsData) {
            this.componentsRegister.add(new Component_1.Component(componentName, this.componentsData[componentName]));
        }
    }
    parseProducts() {
        for (let i = 0; i < this.productsData.length; i++) {
            const productData = this.productsData[i];
            const product = new Product_1.Product(productData[1]);
            this.productsRegister.add(product);
        }
    }
    parseDependencies() {
        for (let i = 0; i < this.productsData.length; i++) {
            const productData = this.productsData[i];
            const productName = productData[1];
            const partName = productData[0];
            const partsAmount = productData[2];
            const product = this.productsRegister.get(productName);
            if (this.componentsRegister.has(partName)) {
                for (let i = 0; i < partsAmount; i++) {
                    const part = this.componentsRegister.get(partName);
                    product.addPart(part);
                }
            }
            else {
                for (let i = 0; i < partsAmount; i++) {
                    const part = this.productsRegister.get(partName);
                    product.addPart(part);
                }
            }
        }
    }
}
exports.DataParser = DataParser;
//# sourceMappingURL=DataParser.js.map