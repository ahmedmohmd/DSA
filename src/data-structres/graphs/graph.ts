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

  public removeVertex(vertex: string | number): void {
    const neighboors = this.getNode(vertex);

    for (let neighboor of neighboors) {
      let index: number = this.getNode(neighboor).findIndex(
        (node) => node === vertex
      );
      this.getNode(neighboor).splice(index, 1);
    }

    delete this.data[vertex];
  }

  public addEdge(from: any, to: any): void {
    this.data[from].push(to);
    // this.data[node2].push(node1);
  }

  public removeEdge(from: any, to: any): void {
    const index = this.getNode(from).findIndex((node) => node === to);
    // const toIndex = this.getNode(node2).findIndex((node) => node === node1);

    // this.getNode(node1).splice(fromIndex, 1);
    this.getNode(from).splice(index, 1);
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

  public toplogicalSort(vertex): any[] {
    const stack = [];
    const visited = [];

    this.topSort(vertex, visited, stack);

    const sorted = [];

    while (stack.length > 0) {
      sorted.push(stack.pop());
    }

    return sorted;
  }

  private topSort(vertex, visited, stack): void {
    if (visited.includes(vertex)) {
      return;
    }

    visited.push(vertex);

    for (let neighboor of this.getNode(vertex)) {
      this.topSort(neighboor, visited, stack);
    }

    stack.push(vertex);
  }

  public isCyclic(): boolean {
    const all = Object.entries({ ...this.data }).map((node) => node[0]);
    const visiting = [];
    const visited = [];

    while (all.length) {
      let node = all[0];
      return this.doCyclic(node, all, visiting, visited);
    }
  }

  private doCyclic(
    vertex,
    all: any[],
    visiting: any[],
    visited: any[]
  ): boolean {
    all.splice(all.indexOf(vertex), 1);
    visiting.push(vertex);

    for (let child of this.getNode(vertex)) {
      if (visited.includes(child)) {
        continue;
      }
      if (visiting.includes(child)) {
        return true;
      }
      if (this.doCyclic(child, all, visiting, visited)) {
        return true;
      }
    }

    visiting.splice(visiting.indexOf(vertex), 1);
    visited.push(vertex);

    return false;
  }
}

export default Graph;
