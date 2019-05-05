"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const areAnagrams_1 = require("./areAnagrams");
function findAnagrams(str) {
    let result = 0; // O(1)
    // Преребираем все возможные длины строки   
    for (let sbstrLength = 1; sbstrLength < str.length; sbstrLength++) { // O(1) + O(1N) + O(1N) + O(1N)
        // Для каждой длины строки перебираем возможные подстроки
        for (let i = 0; i + sbstrLength <= str.length; i++) { // O(1N) + O(1N^2) + O(1N^2) + O(1N^2) + O(1N^2)
            const substr1 = str.substring(i, i + sbstrLength); // O(1N^2) + O(N^3) + O(1N^2) + O(1N^2)
            // Перебираем все подстроки следующие за текущей подстрокой
            for (let t = i + 1; t + sbstrLength <= str.length; t++) {
                const substr2 = str.substring(t, t + sbstrLength);
                if (areAnagrams_1.areAnagrams(substr1, substr2)) {
                    result++;
                }
            }
        }
    }
    return result;
}
exports.findAnagrams = findAnagrams;
//# sourceMappingURL=findAnagrams.js.map