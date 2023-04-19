class HashTable {
  data: any[];
  size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  public set(key: string, value: any): void {
    const address = this.hash(key);
    const bucket = this.data[address];

    if (!bucket) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);

    this.size++;
  }

  public get(key: string): any {
    const address = this.hash(key);
    const bucket = this.data[address];

    if (!bucket) {
      return undefined;
    } else {
      for (let item of bucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
  }

  private hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < this.data.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  remove(key: string) {
    const address = this.hash(key);
    const bucket = this.data[address];

    if (!bucket) {
      throw Error("Item not Found!");
    } else {
      const index = bucket.findIndex((item) => item[0] === key);
      bucket.splice(index, 1);
      this.size--;
    }
  }

  public getKeys(): string[] {
    const all = this.data.flat(1);

    return all.map((item) => item[0]);
  }

  public getValues(): string[] {
    const all = this.data.flat(1);

    return all.map((item) => item[1]);
  }
}

export default HashTable;
