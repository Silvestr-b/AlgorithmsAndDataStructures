import { createRandomArray } from "./testData/createRandomArray";
import { bubbleSort } from "./bubble";
import { mergeSort } from "./merge";
import { selectionSort } from "./selection";


const arr = createRandomArray(1000, 50);
const iterations = 1000;


measurePerformance('bubble', iterations, () => bubbleSort([...arr]));
measurePerformance('selection', iterations, () => selectionSort([...arr]));
measurePerformance('merge', iterations, () => mergeSort([...arr]));
measurePerformance('sort', iterations, () => [...arr].sort((i,j)=>i<j?1:-1));


function measurePerformance(name: string, iterations: number, cb: () => any) {
   console.time(name);
   while(iterations--) cb();
   console.timeEnd(name);
}