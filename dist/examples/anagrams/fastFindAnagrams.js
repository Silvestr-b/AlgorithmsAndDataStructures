"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fastFindAnagrams(sourceString) {
    const source = sourceString.split('');
    let anagramsCounter = 0;
    // Преребираем все возможные длины строки   
    for (let sbstrLength = 1; sbstrLength < source.length; sbstrLength++) {
        const charsCounter1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // Подсчитываем символы в подстроке
        for (let i = 0; i < sbstrLength; i++) {
            const char = source[i];
            const charCode = char.charCodeAt(0) - 97;
            charsCounter1[charCode]++;
        }
        // Для каждой длины строки перебираем возможные подстроки
        for (let i = 0; i + sbstrLength <= source.length; i++) {
            const startIndex = i;
            const endIndex = i + sbstrLength - 1;
            const charsCounter2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            // Обновляем данные о символах для подстроки
            if (i > 0) {
                const newChar = source[endIndex];
                const oldChar = source[startIndex - 1];
                const newCharCode = newChar.charCodeAt(0) - 97;
                const oldCharCode = oldChar.charCodeAt(0) - 97;
                charsCounter1[newCharCode]++;
                charsCounter1[oldCharCode]--;
            }
            // Подсчитываем символы в подподстроке 
            for (let k = startIndex; k <= endIndex; k++) {
                const char = source[k];
                const charCode = char.charCodeAt(0) - 97;
                charsCounter2[charCode]++;
            }
            // проходим по всем подстрокам той же длинны начиная со следующей за текущей
            outer: for (let k = startIndex + 1; k + sbstrLength <= source.length; k++) {
                const startIndex = k;
                const endIndex = k + sbstrLength - 1;
                // Обновляем данные о символах для подподстроки
                const newChar = source[endIndex];
                const oldChar = source[startIndex - 1];
                const newCharCode = newChar.charCodeAt(0) - 97;
                const oldCharCode = oldChar.charCodeAt(0) - 97;
                charsCounter2[newCharCode]++;
                charsCounter2[oldCharCode]--;
                // Сравниваем сколичество символов
                for (let i = 0; i < charsCounter1.length; i++) {
                    if (charsCounter1[i] !== charsCounter2[i]) {
                        continue outer;
                    }
                }
                anagramsCounter++;
            }
        }
    }
    return anagramsCounter;
}
exports.fastFindAnagrams = fastFindAnagrams;
//# sourceMappingURL=fastFindAnagrams.js.map