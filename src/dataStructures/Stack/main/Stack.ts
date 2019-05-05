

interface Stack<T> {
   push(elem: T): void;
   pop(): T;
   pick(): T;
   isEmpty(): boolean;
}


export { Stack }