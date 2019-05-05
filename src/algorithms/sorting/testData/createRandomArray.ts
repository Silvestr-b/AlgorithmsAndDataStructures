

function createRandomArray(length: number, max: number) {
   const arr = new Array(length);
   for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.round(Math.random() * max);
      if(Math.random() < 0.5) {
         arr[i] *= -1
      }
   }
   return arr;
}


export { createRandomArray }