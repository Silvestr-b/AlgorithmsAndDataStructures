
type traverceCtx = { [vertex:string]: boolean }
class AjacentListGraph {
   private adjacentList: { [name: string]: string[] } = {};

   addVertex(vertex: string) {
      this.adjacentList[vertex] = [];
   }

   addEdge(v1: string, v2: string) {
      this.adjacentList[v1].push(v2);
      this.adjacentList[v2].push(v1);
   }

   print() {
      let str = '';
      for(let vertex in this.adjacentList) {
         str += `\n${vertex} ->`;
         for(let i = 0; i < this.adjacentList[vertex].length; i++) {
            str += ` ${this.adjacentList[vertex][i]}`;
         }
      }
      return str;
   }

   deepTraverse(vertex: string, ctx?: traverceCtx) {
      if(!ctx) {
         ctx = {};
      }
      if(ctx[vertex]) {
         return '';
      } else {
         ctx[vertex] = true;
      }
      const relatedVertices = this.adjacentList[vertex];
      let res = ` -> ${vertex}`;
      for(let i = 0; i < relatedVertices.length; i++) {
         res += this.deepTraverse(relatedVertices[i], ctx);
      }
      return res;
   }
}

const graph = new AjacentListGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');


graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'B');



console.log(graph.deepTraverse('A'))



export { AjacentListGraph }