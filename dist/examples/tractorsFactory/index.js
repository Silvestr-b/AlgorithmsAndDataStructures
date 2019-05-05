"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataParser_1 = require("./DataParser");
const requirements = [["Paint", "Tractor", 3], ["Iron", "Plow", 4], ["Plow", "Tractor", 1], ["Iron", "Engine", 2], ["Chemicals", "Engine", 1], ["Engine", "Tractor", 1], ["Chemicals", "Wheels", 5], ["Wheels", "Truck", 18], ["Engine", "Truck", 1], ["Rubber", "Wheels", 7]];
const costs = { "Paint": 100, "Iron": 900, "Chemicals": 350, "Rubber": 500 };
function calculateCost(requirements) {
    const parser = new DataParser_1.DataParser(requirements, costs);
    const products = parser.parse();
    let sum = 0;
    for (let i = 0; i < 500; i++) {
        sum += products.getCostFor('Tractor');
    }
    for (let i = 0; i < 750; i++) {
        sum += products.getCostFor('Truck');
    }
    return sum;
}
console.log(calculateCost(requirements)); // 75512500
//# sourceMappingURL=index.js.map