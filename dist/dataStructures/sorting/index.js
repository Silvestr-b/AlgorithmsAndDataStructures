"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRandomArray_1 = require("./testData/createRandomArray");
const bubble_1 = require("./bubble");
const mergeSort_1 = require("./mergeSort");
const arr = createRandomArray_1.createRandomArray(1000, 50);
const iterations = 1000;
measurePerformance('bubble', iterations, () => bubble_1.bubbleSort([...arr]));
measurePerformance('merge', iterations, () => mergeSort_1.mergeSort([...arr], 0, arr.length - 1));
measurePerformance('sort', iterations, () => [...arr].sort((i, j) => i < j ? 1 : -1));
function measurePerformance(name, iterations, cb) {
    console.time(name);
    while (iterations--)
        cb();
    console.timeEnd(name);
}
//# sourceMappingURL=index.js.map