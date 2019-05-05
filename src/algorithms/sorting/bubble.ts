/* 
   Worst: O(N^2)
   Average: O(N^2)
   Best: O(N)
*/
function bubbleSort(arr: number[]) {
   for(let i = 0; i < arr.length-1; i++) { // доходим до предпоследнего потому что последний не надо ни с чем сравнивать
      for(let j = 0; j < arr.length-1-i; j++) { // После каждого прохода сдвигаем планку на один элемент левее
         const e1 = arr[j];
         const e2 = arr[j+1];
         if(e1 > e2) {
            arr[j] = e2;
            arr[j+1] = e1; 
         }
      }
   }
   return arr
}  


export { bubbleSort }


