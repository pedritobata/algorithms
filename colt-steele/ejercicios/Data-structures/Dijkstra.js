class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
}

const weightedGraph = new WeightedGraph();
weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addEdge("A", "B", 9);
weightedGraph.addEdge("A", "C", 5);
weightedGraph.addEdge("B", "C", 7);
console.log("weighted graph:", weightedGraph.adjacencyList);


// FIRST IMPLEMENTATION
class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(value, priority){
        this.values.push({value, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}