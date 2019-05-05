"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacentList = {};
    }
    addVertex(vertex) {
        this.adjacentList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacentList[v1].push(v2);
        this.adjacentList[v2].push(v1);
    }
}
exports.Graph = Graph;
const graph = new Graph();
graph.addVertex('Tractor');
graph.addVertex('Track');
graph.addVertex('Plow');
graph.addVertex('Engine');
graph.addVertex('Wheels');
graph.addVertex('Paint');
graph.addVertex('Iron');
graph.addVertex('Chemicals');
graph.addVertex('Rubber');
graph.addEdge('Tractor', 'Plow');
graph.addEdge('Tractor', 'Engine');
graph.addEdge('Track', 'Engine');
graph.addEdge('Track', 'Wheels');
graph.addEdge('Plow', 'Iron');
graph.addEdge('Engine', 'Iron');
graph.addEdge('Engine', 'Chemicals');
graph.addEdge('Wheels', 'Chemicals');
graph.addEdge('Wheels', 'Rubber');
console.log(graph);
//# sourceMappingURL=Vertex.js.map