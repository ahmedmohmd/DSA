class Graph {
  private data: {
    [node: string]: any[];
  };
  private size: number;

  constructor() {
    this.data = {};
    this.size = 0;
  }

  public addVertex(vertex: string | number): void {
    this.data[vertex] = [];
    this.size++;
  }

  public addEdge(node1: any, node2: any): void {
    this.data[node1].push(node2);
    this.data[node2].push(node1);
  }

  public dfs(node: any, visited: any[] = []) {
    console.log(node);
    visited.push(node);

    for (let node in this.data) {
      if (!visited.includes(node)) {
        this.dfs(node, visited);
      }
    }
  }

  public bfs(node: string | number): void {
    const queue = [node];
    const visited = [];

    while (queue.length > 0) {
      let current = queue.shift();

      if (visited.includes(current)) continue;

      console.log(current);
      visited.push(current);

      for (let child of this.getNode(node)) {
        queue.push(child);
      }
    }
  }

  private getNode(node: any): any {
    return this.data[node];
  }

  public get getData() {
    return this.data;
  }

  public get getsize(): number {
    return this.size;
  }
}

export default Graph;
