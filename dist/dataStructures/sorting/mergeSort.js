"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createRandomArray_1 = require("./testData/createRandomArray");
/*
   Worst: O(NlogN)
   Average: O(NlogN)
   Best: O(NlogN)
*/
class MergeSorter {
    static sort(source) {
        this.temp = new Array(source.length);
        this.sortSegment(source, 0, source.length - 1);
    }
    static sortSegment(source, startIndex, endIndex) {
        // Если сегмент содержит только один элемент, то дальше делить не надо
        if (endIndex <= startIndex)
            return;
        // Находим индекс середины сегмента, это последний элемент левого подсегмента
        const middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        // Рекурсивно вызываем себя для обоих подсегментов
        this.sortSegment(source, startIndex, middleIndex);
        this.sortSegment(source, middleIndex + 1, endIndex);
        // Сортируем и мерджим левый и правый подсегмент
        this.merge(source, startIndex, middleIndex, endIndex);
    }
    /*
       Исходный массив,
       Индекс первого элемента в левом сегменте,
       Индекс последнего элемента в левом сегменте,
       Индекс последнего элемента в правом сегменте
    */
    static merge(source, startIndex, mediumIndex, endIndex) {
        // Заполняем временный массив данными левого и правого сегмента
        for (let i = startIndex; i <= endIndex; i++) {
            this.temp[i] = source[i];
        }
        let i = startIndex;
        let j = mediumIndex + 1;
        // Мерджим временные сегменты в основной массив в правильном порядке
        for (let k = startIndex; k <= endIndex; k++) {
            if (i > mediumIndex) { // если первый подсегмент иссяк
                source[k] = this.temp[j++];
            }
            else if (j > endIndex) { // если второй сегмент иссяк
                source[k] = this.temp[i++];
            }
            else if (this.temp[i] <= this.temp[j]) { // если элемент первого сегмента меньше или элемента из второго сегмента
                source[k] = this.temp[i++];
            }
            else {
                source[k] = this.temp[j++];
            }
        }
    }
}
MergeSorter.temp = null;
const arr = createRandomArray_1.createRandomArray(10, 100);
MergeSorter.sort(arr);
console.log(arr);
// function mergeSort(source: number[]) {
//    sort(source, 0, source.length - 1);
// }
/*
   Исходный массив,
   Индекс первого элемента в текущем подмассиве,
   Индекс последнего элемента в текущем подмассиве
*/
function sort(source, startIndex, endIndex) {
    if (endIndex <= startIndex) {
        return;
    }
    // Находим индекс последнего элемента левого подмассива
    const middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    // Рекурсивно вызываем себя для обоих подмассивов
    sort(source, startIndex, middleIndex);
    sort(source, middleIndex + 1, endIndex);
    // Сортируем и мерджим левый и правый подмассив
    merge(source, startIndex, middleIndex, endIndex);
}
/*
   Исходный массив,
   Индекс первого элемента в левом подмассиве,
   Индекс последнего элемента в левом подмассиве,
   Индекс последнего элемента в правом подмассиве
*/
function merge(source, startIndex, mediumIndex, endIndex) {
    // Определяем длины подмассивов
    const firstArrLength = mediumIndex - startIndex + 1;
    const secondArrLength = endIndex - mediumIndex;
    // Создаем временные массивы для сохранения данных
    const firstArr = new Array(firstArrLength);
    const secondArr = new Array(secondArrLength);
    // Заполняем временные массивы данными левого и правого подмассивов
    for (let i = 0; i < firstArrLength; i++) {
        firstArr[i] = source[startIndex + i];
    }
    for (let i = 0; i < secondArrLength; i++) {
        secondArr[i] = source[mediumIndex + 1 + i];
    }
    // Мерджим временные массивы в основной массив в правильном порядке
    let firstArrIndex = 0;
    let secondArrIndex = 0;
    let sourceArrIndex = startIndex;
    // Проходимся по временным массивам пока один из них не закончиться 
    while (firstArrIndex < firstArrLength && secondArrIndex < secondArrLength) {
        // Сравниваем элементы двух временных массивов и вставляем в исходный меньшее значение
        if (firstArr[firstArrIndex] <= secondArr[secondArrIndex]) {
            source[sourceArrIndex] = firstArr[firstArrIndex];
            firstArrIndex++;
        }
        else {
            source[sourceArrIndex] = secondArr[secondArrIndex];
            secondArrIndex++;
        }
        sourceArrIndex++;
    }
    // Если в одном из временных массивов остались данные добавляем их в исходный массив 
    while (firstArrIndex < firstArrLength) {
        source[sourceArrIndex] = firstArr[firstArrIndex];
        firstArrIndex++;
        sourceArrIndex++;
    }
    while (secondArrIndex < secondArrLength) {
        source[sourceArrIndex] = secondArr[secondArrIndex];
        sourceArrIndex++;
        secondArrIndex++;
    }
}
const mergeSort = MergeSorter.sort.bind(MergeSorter);
exports.mergeSort = mergeSort;
//# sourceMappingURL=mergeSort.js.map