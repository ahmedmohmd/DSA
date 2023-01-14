class QuickSort {
  public sort(array: number[], start?: number, end?: number): void {
    if (start >= end) return;

    let boundary = this.partition(array, start || 0, end || array.length - 1);

    this.sort(array, start || 0, boundary - 1);
    this.sort(array, boundary + 1, end || array.length - 1);
  }

  private partition(array: number[], start: number, end: number): number {
    let peviot = array[end];
    let boundary = start - 1;

    for (let i = start; i <= end; i++) {
      if (array[i] <= peviot) {
        boundary++;
        this.swap(array, i, boundary);
      }
    }

    return boundary;
  }

  private swap(array: any[], index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }
}

export default QuickSort;
