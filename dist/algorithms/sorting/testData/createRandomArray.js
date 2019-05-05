"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createRandomArray(length, max) {
    const arr = new Array(length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * max);
        if (Math.random() < 0.5) {
            arr[i] *= -1;
        }
    }
    return arr;
}
exports.createRandomArray = createRandomArray;
//# sourceMappingURL=createRandomArray.js.map