class StackByArray {
  private data: any[];
  constructor() {
    this.data = [];
  }

  public peek(): any {
    return this.data[0];
  }

  public push(value: any): void {
    this.data.push(value);
  }

  public pop(): any {
    return this.data.pop();
  }

  public getSize(): number {
    return this.data.length;
  }
}

export default StackByArray;
