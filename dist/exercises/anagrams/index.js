"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAnagrams_1 = require("./findAnagrams");
const fastFindAnagrams_1 = require("./fastFindAnagrams");
console.log(fastFindAnagrams_1.fastFindAnagrams('abba'));
console.log(findAnagrams_1.findAnagrams('abba'));
// console.log(fastFindAnagrams('dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu'));
// console.log(findAnagrams('dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu'));
const source = 'dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu';
(() => {
    let i = 10;
    console.time('a');
    while (i--) {
        findAnagrams_1.findAnagrams(source);
    }
    console.timeEnd('a');
})();
(() => {
    let i = 10;
    console.time('b');
    while (i--) {
        fastFindAnagrams_1.fastFindAnagrams(source);
    }
    console.timeEnd('b');
})();
//# sourceMappingURL=index.js.map