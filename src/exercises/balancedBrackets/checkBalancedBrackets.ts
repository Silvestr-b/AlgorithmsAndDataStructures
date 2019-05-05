

function checkBalancedBrackets(str: string) {
   const stack = []; // O(1)
   for(let i = 0; i < str.length; i++) { // O(1) + O(1N) + O(1N) + O(1N)
      const token = str[i]; // O(1N) + O(1N)
      switch(token) { 
         case '[' : // O(1N)
         case '(' : { // O(1N)
            stack.push(token); // O(1N)
            break; 
         }
         case ']' : { // O(1N)
            if (stack.pop() !== '[') return false; // O(1N) + O(1N) + O(1N) + O(1)
            break;
         }
         case ')' : { // O(1N)
            if (stack.pop() !== '(') return false; // O(1N) + O(1N) + O(1N) + O(1)
            break;
         }
      }            
   }
   return true; // O(1)
}
// O(12N + 3) ==> O(N)


export { checkBalancedBrackets }