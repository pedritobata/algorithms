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

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList; //truco para acceder al this de afuera , osea a mi Graph
        (function dfs(vertex){
            //base case here??
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    dfs(neighbor);
                }
            });
        })(start);
        return result;
    }

    depthFirstIterative(start){
        const result = [];
        const stack = [start];
        const visited = {[start]: true};
        let current;
        while(stack.length){
            current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    breadthFirst(start){
        const result = [];
        const queue = [start];
        const visited = {[start]: true};
        let current;
        while(queue.length){
            current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
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
graph.removeVertex("jhon");
console.log(graph);

const graphtoTraverse = new Graph();
graphtoTraverse.addVertex("A");
graphtoTraverse.addVertex("B");
graphtoTraverse.addVertex("C");
graphtoTraverse.addVertex("D");
graphtoTraverse.addVertex("E");
graphtoTraverse.addVertex("F");

graphtoTraverse.addEdge("A","B");
graphtoTraverse.addEdge("A","C");
graphtoTraverse.addEdge("B","D");
graphtoTraverse.addEdge("C","E");
graphtoTraverse.addEdge("D","E");
graphtoTraverse.addEdge("D","F");
graphtoTraverse.addEdge("E","F");
console.log("Traversed depthfirst recursively:",graphtoTraverse.depthFirstRecursive("A"));
console.log("Traversed depthfirst iteratively:",graphtoTraverse.depthFirstIterative("A"));
console.log("Traversed breadhfirst:",graphtoTraverse.breadthFirst("A"));