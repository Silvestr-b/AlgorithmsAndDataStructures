"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
   Worst: O(N^2)
   Average: O(N^2)
   Best: O(N^2)
*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let iMin = i;
        // Проходим по части массива следующей за текущим индексом и находим индекс минимального элемента
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[iMin]) {
                iMin = j;
            }
        }
        // Меняем местами текущий элемент и минимальный из последующих
        const temp = arr[i];
        arr[i] = arr[iMin];
        arr[iMin] = temp;
    }
    return arr;
}
exports.selectionSort = selectionSort;
//# sourceMappingURL=selection.js.map