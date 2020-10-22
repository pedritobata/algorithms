class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
}

const graph = new Graph();
graph.addVertex("perico");
graph.addVertex("jhon");
graph.addVertex("tomas");
graph.addEdge("perico", "jhon");
graph.addEdge("perico", "tomas");
graph.addEdge("jhon", "tomas");
console.log(graph);
graph.removeEdge("tomas", "jhon");
console.log(graph);