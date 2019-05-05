import { findAnagrams } from "./findAnagrams";
import { fastFindAnagrams } from "./fastFindAnagrams";


console.log(fastFindAnagrams('abba'));
console.log(findAnagrams('abba'));
// console.log(fastFindAnagrams('dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu'));
// console.log(findAnagrams('dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu'));


const source = 'dxskilnpkkdxwpeefvgkyohnwxtrrtxtckkdgnawrdjtcpzplywyxmwtemwmtklnclqccklotbpsrkazqolefprenwaozixvlxhu';
(() => {
   let i = 10;
   console.time('a')
   while(i--) {
      findAnagrams(source);
   }
   console.timeEnd('a')   
})();
(() => {
   let i = 10;
   console.time('b')
   while(i--) {
      fastFindAnagrams(source);
   }
   console.timeEnd('b')   
})();