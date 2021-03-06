"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        throw new Error('Arguments must have the same length');
    }
    const charsCounter1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const charsCounter2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < str1.length; i++) {
        const charCode1 = str1[i].charCodeAt(0) - 97;
        const charCode2 = str2[i].charCodeAt(0) - 97;
        charsCounter1[charCode1]++;
        charsCounter2[charCode2]++;
    }
    for (let char in charsCounter1) {
        if (charsCounter1[char] !== charsCounter2[char]) {
            return false;
        }
    }
    return true;
}
exports.areAnagrams = areAnagrams;
//# sourceMappingURL=areAnagrams.js.map