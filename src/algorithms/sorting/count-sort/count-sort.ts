class CountSort {
  public static sort(array: number[], max?: number): void | [] {
    if (array.length === 0) return [];

    const maxNum: number = (max || this.getMax(array)) + 1;
    const counts: number[] = new Array(maxNum).fill(0);

    for (let item of array) {
      counts[item]++;
    }

    let k: number = 0;
    for (let i: number = 0; i < counts.length; i++) {
      for (let j: number = 0; j < counts[i]; j++) {
        array[k] = i;
        k++;
      }
    }
  }

  private static getMax(array: number[]): number {
    return Math.max(...array);
  }
}

export default CountSort;
