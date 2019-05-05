"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    /*
       Исходный массив,
       Индекс первого элемента в сегменте,
       Индекс последнего элемента в сегменте
    */
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
        let i = startIndex; // индекс для обхода первого подсегмента
        let j = mediumIndex + 1; // индекс для обхода второго подсегмента
        // Мерджим временные сегменты в основной массив в правильном порядке
        for (let k = startIndex; k <= endIndex; k++) {
            if (i > mediumIndex) { // если первый подсегмент иссяк добавляем элементы оставшиеся во втором
                source[k] = this.temp[j++];
            }
            else if (j > endIndex) { // если второй сегмент иссяк добавляем элементы оставшиеся в первом
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
const mergeSort = MergeSorter.sort.bind(MergeSorter);
exports.mergeSort = mergeSort;
//# sourceMappingURL=merge.js.map